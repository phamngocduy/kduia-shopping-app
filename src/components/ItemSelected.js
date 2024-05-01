import React, {useContext, useState} from 'react'
import {AppContext} from '../context/AppContext'

const ItemSelected = (props) => {
    const {dispatch, expenses} = useContext(AppContext)
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [action, setAction] = useState('')

    const submitEvent = () => {
        dispatch({
            type: action === 'Reduce' ? 'RED_QUANTITY' : 'ADD_QUANTITY',
            payload: {
                name: name,
                quantity: parseInt(quantity)
            }
        })
    }

    return (
        <div>
            <div className='row'>
                <div className='input-group mb-3' style={{marginLeft:'2rem'}}>
                    <div className='input-group-prepend'>
                        <label className='input-group-text' htmlFor='inputGroupSelect01'>Items</label>
                    </div>
                    <select className='custom-select' id="inputGroupSelect01" onChange={event => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        { expenses.map(expense => (
                            <option key={expense.name} value={expense.name}>{expense.name}</option>
                        ))}
                    </select>
                    <div className='input-group-prepend' style={{marginLeft:'2rem'}}>
                        <label className='input-group-text' htmlFor='inputGroupSelect02'>Quantity</label>
                    </div>
                    <select className='custom-select' id='inputGroupSelect02' onChange={event => setAction(event.target.value)}>
                        <option defaultValue value='Add'>Add</option>
                        <option value='Reduce'>Reduce</option>
                    </select>
                    <span className='eco' style={{marginLeft:'2rem',marginRight:'8px'}}></span>
                    <input required type='number' value={quantity} style={{size:10}} onChange={event => setQuantity(event.target.value)}/>
                    <button className='btn btn-primary' onClick={submitEvent}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default ItemSelected