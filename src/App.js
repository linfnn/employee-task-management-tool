
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
import routes from "./routes"
import AlertModal from './components/modals/alertModal';
import ScrollButton from './components/buttons/ScrollButton';
function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          >
          </Route>
        ))}
      </Routes>
      <ScrollButton/>
      {/* <AlertModal/> */}
    </div>
  );
}

export default App;
