import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home/Home'
import Homepage from './component/Register/Homepage'
import About from './component/About/About'
import News from './component/News/News'
import Contact from './component/Contact/Contact'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import NotFound from './component/Register/NotFound'

export default function App() {
  return (
    <div>
      React Router DOM 
      {/*
      là 1 thư viện
      tạo ra bộ định tuyến của web tức là nó sẽ cho phép react element đc hiển thị qua các đường dẫn URL
      cách dùng: npm react-router-dom
      dùng component browserRouter để cung cấp bộ định tuyến cho component app.tsx
      */}
      <Routes>
        <Route path="" element={<Home></Home>}>
          <Route index element={<Homepage></Homepage>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/News' element={<News></News>}></Route>
          <Route path='/Contact' element={<Contact></Contact>}></Route>
        </Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  )
}
