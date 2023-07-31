import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/about" replace />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blogs',
        element: <Blog />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
