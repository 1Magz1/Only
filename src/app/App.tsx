import './styles/index.scss';
import { Suspense } from 'react';
import AppRouter from 'app/providers/Router/AppRouter';

function App() {
  return (
    <div className="app" id="app">
      <Suspense fallback={(
        <div style={{ height: '100vw' }}>
          ...
        </div>
      )}
      >
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;
