import './App.css';
import Starter from './components/Starter';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Game from './components/Game';


const router = createBrowserRouter([
  {path: '/', element: <Starter/>},
  {path: '/game', element: <Game/>}
])
function App() {
   
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
