import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
    const {expenses} = useContext(AppContext)

    return (
        <table className='table'>
            <thead className='thead-light'>
                <tr>
                    <th scope="col">Items</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Items Price</th>
                    <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
            { expenses.map(expense => (
                <ExpenseItem key={expense.name} name={expense.name} quantity={expense.quantity} unitPrice={expense.unitPrice}/>
            ))}
            </tbody>
        </table>
    )
}

export default ExpenseList