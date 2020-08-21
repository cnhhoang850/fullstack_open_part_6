import React, {useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {filterA} from '../reducers/filterReducer'
import {connect} from 'react-redux'

const Filter = (props) => {
   const filterChange = e => {
       e.preventDefault()
       const filter = e.target.value
       props.filterA(filter)

   }

   return (
        <div>
            <form>
            filter <input onChange={filterChange}/>
            </form>
        </div>
   )
}



export default connect(null, {filterA})(Filter)