import React from 'react'
import { connect } from 'react-redux'
import {createAnec} from '../reducers/anecdoteReducer'
import {newNoti} from '../reducers/notiReducer'

const NewAnec = (props) => {
    const addAnec = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnec(content)
        props.newNoti(content)
    }

    return (
    <form onSubmit={addAnec}>
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
    )
}

export default connect(null, {createAnec, newNoti})(NewAnec)