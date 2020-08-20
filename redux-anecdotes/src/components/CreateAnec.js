import React from 'react'
import {useDispatch} from 'react-redux'
import {createAnec} from '../reducers/anecdoteReducer'
import {newNoti, clearNoti} from '../reducers/notiReducer'
import anecdoteService from '../services/anecdotes'

const NewAnec = (props) => {
    const dispatch = useDispatch()

    const addAnec = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnec(content))
        dispatch(newNoti(content))
    }

    return (
    <form onSubmit={addAnec}>
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
    )
}

export default NewAnec