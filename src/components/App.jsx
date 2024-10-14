import HomePage from "../pages/HomePage/HomePage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
    </Routes>
  );
}

export default App;
