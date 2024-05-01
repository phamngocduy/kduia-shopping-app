import React, {createContext, useReducer} from 'react'

// The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let newExpenses = []
    switch (action.type) {
        case 'ADD_QUANTITY':
            let updatedQuantity = false;
            state.expenses.map(expense => {
                if (expense.name === action.payload.name) {
                    expense.quantity += action.payload.quantity
                    updatedQuantity = true
                }
                newExpenses.push(expense)
            })
            state.expenses = newExpenses
            action.type = 'DONE'
            return {...state}

        case 'RED_QUANTITY':
            state.expenses.map(expense => {
                if (expense.name === action.payload.name) {
                    expense.quantity -= action.payload.quantity
                }
                expense.quantity = expense.quantity < 0 ? 0 : expense.quantity
                newExpenses.push(expense)
            })
            state.expense = newExpenses
            action.type = 'DONE'
            return {...state}
        
        case 'DELETE_ITEM':
            state.expenses.map(expense => {
                if (expense.name === action.payload.name) {
                    expense.quantity = 0
                }
                newExpenses.push(expense)
            })
            state.expenses = newExpenses
            action.type = 'DONE'
            return {...state}
        
        case 'CHG_LOCATION':
            action.type = 'DONE'
            state.Location = action.payload
            return {...state}
        
        default: return state
    }
}

// Sets the initial state when the app loads
const initialState = {
    expenses: [
        {name: 'Shirt', quantity: 0, unitPrice: 500},
        {name: 'Jeans', quantity: 0, unitPrice: 300},
        {name: 'Dress', quantity: 0, unitPrice: 400},
        {name: 'Dinner set', quantity: 0, unitPrice: 600},
        {name: 'Bags', quantity: 0, unitPrice: 200}
    ],
    Location: '£'
}

// Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext()

// Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested (wrapped) components
export const AppProvider = (props) => {
    // Sets up the app state, takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const totalExpenses = state.expenses.reduce((total, item) =>
        total + item.unitPrice * item.quantity, 0)
    state.CartValue = totalExpenses

    return (
        <AppContext.Provider value={{
            expenses: state.expenses,
            CartValue: state.CartValue,
            dispatch,
            Location: state.Location
        }}>{props.children}</AppContext.Provider>
    )
}