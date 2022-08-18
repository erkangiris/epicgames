import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Help from "./pages/Help";
import GameDetail from "./pages/GameDetail";
import UnrealEngine from "./pages/UnrealEngine";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./layouts/Layout";
import Cart from "./pages/Cart";


function App() {


  return (


    
        <Router>
          <Layout>
                <Routes>
                  <Route path="/" exact element={<Home />}></Route>
                  <Route path="/faq" element={<Faq />}></Route>
                  <Route path="/help" element={<Help />}></Route>
                  <Route path="/cart" element={<Cart />}></Route>
                  <Route path="/games/:id" element={<GameDetail />}></Route>
                  <Route path="/unrealengine" element={<UnrealEngine />}></Route>
                </Routes>
          </Layout>
      </Router>



  );
}

export default App;
