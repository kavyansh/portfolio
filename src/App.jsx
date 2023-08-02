import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/Blog/BlogPost';

export const routes = [
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
      {
        path: '/blogs/:blogId',
        element: <BlogPost />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
