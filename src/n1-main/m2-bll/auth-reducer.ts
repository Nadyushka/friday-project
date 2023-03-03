const initialState = {
    auth: false
} as const

type initialStateType = typeof initialState

export const authReducer = (state: initialStateType = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

// actions const


// actions creators


// actions creators type


// thunk creators


// authReducer action type