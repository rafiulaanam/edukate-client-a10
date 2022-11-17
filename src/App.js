import { RouterProvider } from 'react-router';
import './App.css';
import { router } from './Routers/Routers';

function App() {
  return (
    <div >
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
