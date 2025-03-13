import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectPage from "./pages/SelectPage";
import ReadingPage from "./pages/ReadingPage";
import WritingPage from "./pages/WritingPage";
import { PostProvider } from "./context/ContextFile";

function App() {
  return (
    <PostProvider>
    <Router>
      <Routes>
        <Route path="/" element={<SelectPage />} />
        <Route path="/read" element={<ReadingPage />} />
        <Route path="/write" element={<WritingPage />} />
      </Routes>
    </Router>
    </PostProvider>
  );
}

export default App;