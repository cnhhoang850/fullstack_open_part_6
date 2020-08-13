import React from 'react'
import {useDispatch} from 'react-redux'
import {createAnec} from '../reducers/anecdoteReducer'

const NewAnec = (props) => {
    const dispatch = useDispatch()

    const addAnec = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnec(content))
    }

    return (
    <form onSubmit={addAnec}>
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
    )
}

export default NewAnec