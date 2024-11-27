import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutUs from "./pages/AboutUs.jsx"
import Blog from './pages/Blog.jsx'
import DefaultLayout from "./pages/DefaultLayout.jsx"
import PostDetail from './pages/PostDetail.jsx'
import { PostsProvider } from "./contexts/PostContext";
import PostPage from './pages/PostPage.jsx'

function App() {
  return (
    <PostsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<PostPage />} />
            <Route path="/blog/:id" element={<PostDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsProvider>
  );
}

export default App;

