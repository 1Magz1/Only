import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {MainPage} from "pages/MainPage";

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
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default AppRouter;
