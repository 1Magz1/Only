import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {MainPageAsync} from "pages/MainPage/MainPage.async";

function AppRouter() {
  return (
    <div className="page-content">
      <Suspense fallback={(
        <div style={{ height: '100vw' }}>
          ...
        </div>
      )}
      >
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default AppRouter;
