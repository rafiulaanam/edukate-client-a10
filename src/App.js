import { RouterProvider } from 'react-router';
import './App.css';
import { router } from './Routers/Routers';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthProvider';


function App() {
  const {theme} =useContext(AuthContext)
  return (
    <div data-theme={theme=== true ? "light" : "dark"} >
      
    <RouterProvider router={router}></RouterProvider>
    <Toaster />
    </div>
  );
}

export default App;
