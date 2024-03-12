import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs'
import Bookmark from './Component/Bookmarks/Bookmark'

function App() {

  return (
    <>
      
      <Header></Header>
     <div className='md:flex'>
     <Blogs></Blogs>
     <Bookmark></Bookmark>
     </div>
      
    </>
  )
}

export default App
