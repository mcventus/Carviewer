import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from '../home/Home'
import Data from '../cardata/CarData'

export default function Main() {
  return (
    <div className='main'>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/data" element={<Data/>}></Route>
        </Routes>
    </div>
  )
}
