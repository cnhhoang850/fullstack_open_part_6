let timeoutID = false
const notiReducer = (state = '', action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch(action.type) {
        case 'NEW_NOTI': {
            const anecdote = action.data
            return `${anecdote} added`
        }
        case 'VOTE_NOTI' : {
            const anecdote = action.data
            return `${anecdote} voted`
        }
        case 'CLEAR_NOTI' : {
            timeoutID = false
            return ''
        }
        default: 
            return state
    }
}



export const newNoti = (anecdote) => {
    return async dispatch => {
        await dispatch({
            type: 'NEW_NOTI',
            data: anecdote
        })
        setTimeout(() => {
            dispatch(clearNoti())
        }, 5000)
    }
}


export const voteNoti = (anecdote) => {
    return async dispatch => {
        await dispatch({
            type: 'VOTE_NOTI',
            data: anecdote
        })
        if (timeoutID !== false) {
            clearTimeout(timeoutID)
            timeoutID = setTimeout(() => {
                dispatch(clearNoti())
            }, 5000)
        } else {
        timeoutID = setTimeout(() => {
            dispatch(clearNoti())
        }, 5000)
        }
    }
}

export const clearNoti = () => {
    return {
        type: 'CLEAR_NOTI'
    }
}

export default notiReducer