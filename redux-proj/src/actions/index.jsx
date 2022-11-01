
export const increment = (number) => {
    return {
        type: "increment", 
        payload: number
    }
}

export const decrement = (number) => {
    return {
        type: "decrement", 
        payload: number
    }
}

export const signIn = () => {
    return {
        type: "SIGN_IN"
    }
}
