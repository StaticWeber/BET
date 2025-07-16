import Home from "./Home";
import Game from "./Game";
// import Historia from "./Historia";
import { HashRouter, Routes, Route} from 'react-router-dom';

 import './Game.css'

function App(){

    return(
      <>

      <HashRouter>

        <Routes>
          
         <Route path="/" element={ <Home/>}/>
        <Route path="/game" element={ <Game/>}/>
       {/* <Route path="/historia" element={<Historia/>}/> */}

       
        </Routes>

      </HashRouter>
      </>
      
    )
    
}


export default App;