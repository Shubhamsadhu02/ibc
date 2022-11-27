import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import './Styles/global.css'
import './Styles/responsive.css'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
