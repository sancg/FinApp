import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import ErrorHandler from './components/ErrorHandler';
import { ThemeProvider } from './hooks/ThemeContext';

function App() {
  const [_count, _setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorHandler />,
      children: [
        { path: '/', element: <Home /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ]);
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
