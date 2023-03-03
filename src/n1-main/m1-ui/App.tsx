import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import SuperComponentsDemo from "./common/superComponents/superComponentsDemo";

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    SET_PASSWORD: '/setPassword',
    UPDATE_PASSWORD: '/updatePassword',
    SHOW_SUPER_COMPONENTS: '/showSuperComponents',
    ERROR_404: '/error404',
}

function App() {
    return (
        <div className="App">
            <Routes>

                <Route path={'/'} element={<Navigate to={PATH.SHOW_SUPER_COMPONENTS}/>}/>

                <Route path={PATH.LOGIN} element={<div>Login</div>}></Route>
                <Route path={PATH.REGISTRATION} element={<div>Registration</div>}></Route>
                <Route path={PATH.PROFILE} element={<div>Profile</div>}></Route>
                <Route path={PATH.SET_PASSWORD} element={<div>SetPassword</div>}></Route>
                <Route path={PATH.UPDATE_PASSWORD} element={<div>UpdatePassword</div>}></Route>
                <Route path={PATH.SHOW_SUPER_COMPONENTS} element={<SuperComponentsDemo/>}></Route>
                <Route path={PATH.ERROR_404} element={<div>Error404</div>}></Route>

            </Routes>
        </div>
    );
}

export default App;
