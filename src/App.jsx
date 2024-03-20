import { useState } from 'react'
import Header from './components/header/header'
import Main from './pages/main/mainPage'
import Catalog from './pages/catalog/catalog'
import {Routes,Route} from 'react-router-dom'
import './assets/css/style.css'
import CardPage from './pages/CardPage/CardPage'
import AboutUs from './components/AboutUs/AboutUs'
import UsersPage from './pages/UsersPage/UsersPage'
import CreatePage from './pages/CreatePage/CreatePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element = {<Main/>} />
        <Route path="/about" element = {<AboutUs/>} />
        <Route path="/catalog" element = {<Catalog/>} />
        <Route path="/catalog/:id" element = {<CardPage />} />
        <Route path="/UsersPage" element = {<UsersPage />} />
        <Route path="/CreatePage" element = {<CreatePage />} />
      </Routes>
    </>
  )
}

export default App