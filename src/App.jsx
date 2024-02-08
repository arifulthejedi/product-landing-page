import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Front from './components/front'
import Category from './components/category'
import Page from './components/page'


function App() {
  

  return (
    <>
      <Header />
      <div className='main'>
        <div className="container">
          <Front />
          <Category/>
          <Page />
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
