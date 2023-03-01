
import './App.css';

import Header from './components/header/Header'
import Main from './components/main/Main'
import MyCarViewer from './components/mycarviewer/MyCarViewer'
import CarData from './components/cardata/CarData'
import { useState } from 'react'
import { CarDataContext } from './CarDataContext'
import { BASE_URL_DATA } from "./globals"


function App() {
  return (
    <div className="App">
        <Main />
    </div>
  );
}

export default App;