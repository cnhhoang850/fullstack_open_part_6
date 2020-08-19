import React, {useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {filterA} from '../reducers/filterReducer'

const Filter = (props) => {
   const dispatch = useDispatch()

   const filterChange = e => {
       e.preventDefault()
       const filter = e.target.value
       dispatch(filterA(filter))

   }

   return (
        <div>
            <form>
            filter <input onChange={filterChange}/>
            </form>
        </div>
   )
}

export default Filter