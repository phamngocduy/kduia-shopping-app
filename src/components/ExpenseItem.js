import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'
import {FaTimesCircle} from 'react-icons/fa'

const ExpenseItem = (props) => {
    const {dispatch, Location} = useContext(AppContext)

    const handleDeleteItem = () => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: {
                name: props.name
            }
        })
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.quantity}</td>
            <td>{Location}{parseInt(props.unitPrice)}</td>
            <td>{Location}{parseInt(props.unitPrice) * parseInt(props.quantity)}</td>
            <td><FaTimesCircle size='2.2em' color='red' onClick={handleDeleteItem}/></td>
        </tr>
    )
}

export default ExpenseItem