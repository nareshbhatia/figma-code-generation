import { AppHeader } from './components/AppHeader';
import { HomePage } from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <main className="flex h-screen flex-col gap-1">
      <AppHeader />
      <Routes>
        <Route element={<HomePage />} path="/" />
      </Routes>
    </main>
  );
}
