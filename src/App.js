import ClassComp from "./ClassComp";
import ClassState from "./components/ClassState/ClassState";
import Formhandle from "./components/FormHandle/Formhandle";
import InlineCss from "./components/InlineCss";
import Navbar from "./components/Navbar";
import PropsClass from "./components/PropsClass";
import PropsExample from "./components/PropsExample";
import Controller from "./conditionalRender/Controller";
import Event from "./eventHandler/Event";
import Hoc from "./hoc/Hoc";
import Loader from "./Loader";
import {
  BrowserRouter as Router, Routes,
  Route
} from "react-router-dom"
import Home from "./Routerss/Layouts/Home";
import About from "./Routerss/Layouts/About";
import Menu from "./Routerss/Layouts/menu/Menu";
import UseStateTast from "./components/hookTask/UseStateTast";
import FetchApi from "./components/fetchApi/FetchApi";

function App() {
  return (

    <>

      {/* <InlineCss/>
      <Loader/> */}
      {/* <PropsExample name="Gourav" class="12th" email="g@gmail.com" phone="78966213"/> */}
      {/* <PropsClass name="Gourav" class="12th" email="g@gmail.com" phone="78966213"/> */}
      {/* <Event/> */}
      {/* <Navbar home="Home" about="About" menu="Menu" /> */}
      {/* <Controller/> */}
      {/* <Hoc/> */}
      {/* <ClassState city="Kolkata"/> */}
      {/* <Formhandle/> */}
      <Router>
        <Navbar home="Home" about="About" menu="Menu" />
        
        <Routes>
          <Route path="/" element={<FetchApi/>} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
