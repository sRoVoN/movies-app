import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound.jsx'
import Movie from './components/Movie.jsx'
import { MoviesProvider } from './context/MoviesContext.jsx'
 
const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <NotFound />

  },
  {
    path:"/:MovieId",
    element: <Movie />,
    errorElement: <NotFound />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoviesProvider>
    <RouterProvider router={router}/>
    </MoviesProvider>
  </StrictMode>,
)
