  import { Routes, Route } from "react-router-dom";
  import routes from './Components/routes';
  import Navbar from './Components/Navbar';

  import './App.css'

  function App() {
    return (
      <>
        <Navbar />
        <div>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </>
    )
  }

  export default App
