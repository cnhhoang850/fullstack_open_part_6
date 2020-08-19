const notiReducer = (state = '', action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch(action.type) {
        case 'NEW_NOTI': {
            const anecdote = action.anecdote
            return `${anecdote} added`
        }
        case 'VOTE_NOTI' : {
            const anecdote = action.anecdote
            return `${anecdote} voted`
        }
        case 'CLEAR_NOTI' : {
            return ''
        }
        default: 
            return state
    }
}

export const newNoti = anecdote => {
    return {
        type: 'NEW_NOTI',
        anecdote
    }
}

export const voteNoti = anecdote => {
    return {
        type: 'VOTE_NOTI',
        anecdote
    }
}

export const clearNoti = () => {
    return {
        type: 'CLEAR_NOTI'
    }
}

export default notiReducer