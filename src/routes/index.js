import React from 'react'
import { Route, Routes, Redirect } from 'react-router-dom';
import Home from '../pages/Home';

export default function AppRoutes() {
  return (
    <div>
        <Routes>
            <Route exact path={"/home"} element={<Home/>}  />
        </Routes>
    </div>
  )
}
