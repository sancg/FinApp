import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';

function App() {
  const [_count, _setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [{ path: '/', element: <Home /> }]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
