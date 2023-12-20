import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import CategoryDetail from "./pages/category-detail/CategoryDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category-detail/:name/:id" element={<CategoryDetail />} />
      </Routes>
    </>
  );
}

export default App;
