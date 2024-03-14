import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs'
import Bookmark from './Component/Bookmarks/Bookmark'

function App() {
 const [bookmarks,setbookmarks]=useState([])
 const [readingTime,setReadingTime]=useState(0)
 const handleAddBookmark= blog =>{
  const newBookmark=[...bookmarks,blog];
  setbookmarks(newBookmark)
 }

  const handleMarkAsRead=time =>{
    setReadingTime(time+readingTime);
  }

 
  return (
    <>
      
      <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleMarkAsRead={handleMarkAsRead} handleAddBookmark={handleAddBookmark}></Blogs>
     <Bookmark bookmarks={bookmarks} readingTime={readingTime}></Bookmark>
     </div>
      
    </>
  )
}

export default App
