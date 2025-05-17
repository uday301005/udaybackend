// import "./App.css";
import "./App.css"; 
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom"
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Success from "./Pages/Success";


const App = () => {
  return ( <>
  <Toaster />
   <Router>
      <Routes> 
        {/* <h1>Home Page</h1>  */}
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
   </Router>
   </>
  )
}

export default App;
