import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import User from './content/user'
import Users from './content/Users'
import About from './content/About'
import Home from './content/Home'
import Option from './content/option'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Web from './Web'
import { createContext, useState } from "react";
export const TextColor = createContext(null)
export const BorderColor = createContext(null)
export default function App() {
    const [tColor, setTColor] = useState("black")
    const [bColor, setBColor] = useState("black")
    return (

        <>
            <TextColor.Provider value={setTColor}>
                <BorderColor.Provider value={setBColor}>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Web styleText={tColor} styleBorder={bColor}></Web>}>
                                <Route path='/' element={<Home></Home>}></Route>
                                <Route path='/About' element={<About></About>}></Route>
                                <Route path='/User' element={<User></User>}></Route>
                                <Route path='/User/:username' element={<Users></Users>}></Route>
                                <Route path='/options' element={<Option></Option>}></Route>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </BorderColor.Provider>
            </TextColor.Provider>


        </>







    )
}

