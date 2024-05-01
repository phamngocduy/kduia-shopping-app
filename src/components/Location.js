import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'

function Location() {
    const {dispatch} = useContext(AppContext)

    function changeLocation(value) {
        dispatch({
            type: 'CHG_LOCATION',
            payload: value
        })
    }

    return (
        <div className='alert alert-secondary'>
            <span>Location</span>
            <select onChange={event => changeLocation(event.target.value)}>
                <option value="£">Uk(£)</option>
                <option value="₹">India(₹)</option>
                <option value="€">Europe(€)</option>
                <option value="AUD">Australia(AUD)</option>
            </select>
        </div>
    )
}

export default Location