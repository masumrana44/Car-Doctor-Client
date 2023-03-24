import { RouterProvider } from 'react-router-dom';
import "./App.css"
import router from './Route/Route';

function App() {
  return (
   <div className='app' data-theme="cupcake">
     <RouterProvider router={router}/>
   </div>
  );
}

export default App;
