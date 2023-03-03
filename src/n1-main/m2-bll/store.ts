import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {authReducer} from "./auth-reducer";


const rootReducer = combineReducers({
    auth: authReducer,

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
