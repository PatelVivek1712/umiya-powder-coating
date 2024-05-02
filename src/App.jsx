import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import UserProfile from "./components/UserProfile";
import AboutUs from "./components/AboutUs";
import ColorPicker from "./components/ColorPicker";
import Glossy from "./components/Glossy";
import SemiGlossy from "./components/SemiGlossy";
import PurePolyester from "./components/PurePolyester";
import Matt from "./components/Matt";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/homepage/*" element={<HomePage />} />
        <Route path="/UserProfile" element={<UserProfile/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/ColorPicker" element={<ColorPicker/>}/>
        <Route path="/Glossy" element={<Glossy/>}/>
        <Route path="/SemiGlossy" element={<SemiGlossy/>}/>
        <Route path="/PurePolyester" element={<PurePolyester/>}/>
        <Route path="/Matt" element={<Matt/>}/>
      </Routes>
    </Router>
  );
}

export default App;
