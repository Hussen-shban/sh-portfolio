"use client"
import confetti from "canvas-confetti";
import { createContext, useContext, useReducer } from "react";

const EasterEggContext = createContext()

export const useEasterEgg = () => useContext(EasterEggContext)



const easterEggReducer = (state, action) => {

    switch (action.type) {

        case "FOUND":

            if (state.foundIds.includes(action.payload)) {
                return state
            }

            if (state.foundIds.length < 4) {
                const update = [...state.foundIds, action.payload]
                return { ...state, foundIds: update, count: update.length }
            }
            return state

        default:

            return state
    }
}


export const EasterEggProvider = ({ children }) => {

    const [state, dispatch] = useReducer(easterEggReducer,
        {
            foundIds: [],
            count: 0

        }

    )

    const foundEgg = (id) => {

        const isNew = !state.foundIds.includes(id);

        dispatch({ type: "FOUND", payload: id })

        if (isNew) {
            confetti({
                particleCount: 200,
                spread: 80,
                origin: { y: 0.6 },
            });
        }
    }



    return (
        <EasterEggContext.Provider value={{ count: state.count, foundEgg }}>
            {children}
        </EasterEggContext.Provider>
    )
}