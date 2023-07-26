import { Routes, Route } from "react-router-dom";

// import { useState } from 'react'
import { MainPage } from "./pages/MainPage/MainPage";
import { CommentsPage } from "./pages/CommentsPage/CommentsPage";
import { GlobalStyles } from "./GlobalStyles";

export const App = () => {

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/posts" element={<MainPage />} />
        <Route path="/comments/:postId" element={<CommentsPage />} />
      </Routes>
    </>
  )
}


