
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Allresumes from './Pages/Allresumes'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Resumesteps from './Pages/Resumesteps'
import Userform from './Pages/Userform'
import Downloads from './Pages/Downloads'
import View from './Pages/View'
import Png from './Pages/Png'
import { ToastContainer } from 'react-toastify';




function App() {
 

  return (
    <>
 <Header/>
 <Routes>
  <Route path='' element={<Home/>}/>
   <Route path='/steps' element={<Resumesteps/>}/>
    <Route path='/form' element={<Userform/>}/>
     <Route path='/download' element={<Downloads/>}/>
      <Route path='/all-resumes' element={<Allresumes/>}/>
       <Route path='/view/:id' element={<View/>}/>
       {/* requesting invalid url redirect to png */}
        <Route path='/*' element={<Png/>}/>
 </Routes>
 
  <Footer/>
  {/* to set alert */}
  <ToastContainer
position="top-right"
autoClose={5000}
theme="colored"
/>


    </>
  )
}

export default App
