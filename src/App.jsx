import Home from "./Home";
import Game from "./Game";
import Historia from "./Historia";
import { HashRouter, Routes, Route} from 'react-router-dom';
import Game2 from "./GAME2";

function App(){

    return(
      <>

      <HashRouter>

        <Routes>
          <Route path="/angry" element={<Game2/>}/>
         <Route path="/" element={ <Home/>}/>
        <Route path="/game" element={ <Game/>}/>
        <Route path="/historia" element={<Historia/>}/>

       
        </Routes>

      </HashRouter>
      </>
      
    )
    
}


export default App;