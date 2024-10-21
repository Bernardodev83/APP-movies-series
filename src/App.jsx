import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


import {Home } from './components/Home/Home'
import { TrailersSeriesTV } from './components/TrailesSeriesTV/TrailerSeriesTV'
import {TrailersMovies} from './components/TrailerMovies/TrailerMovies'

function App() {
  

   return (
      <>
         <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/movies" element={<TrailersMovies></TrailersMovies>} ></Route>
            <Route path="/series" element={<TrailersSeriesTV></TrailersSeriesTV>} ></Route>
        </Routes> 
      </BrowserRouter>
    </>
  )

}

export default App
