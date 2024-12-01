// src/components/App.jsx

import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./Layout/Layout.jsx";
import Loader from "./Loader/Loader.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const CamperIdPage = lazy(() =>
  import("../pages/CamperIdPage/CamperIdPage.jsx")
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:camperId" element={<CamperIdPage />} />
          {/* <Route path="/catalog/:*" element={<NotFoundPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
