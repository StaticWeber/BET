import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import pic1 from './assets/media1.jpg';
import pic2 from './assets/media2.jpg';
import pic3 from './assets/media3.jpg';
import pic4 from './assets/media4.jpg';

import './Home.css'

function Home(){
  let [reactor1, setReactor1] = useState (1);
  let [reactor2, setReactor2] = useState (1);
  let [reactor3, setReactor3] = useState (1);
  let [reactor4, setReactor4] = useState (1);
  const [react1, setReact1] = useState('');
  const [react2, setReact2] = useState('');
  const [react3, setReact3] = useState('');
  const [react4, setReact4] = useState('');

    useEffect(() => {
      
        setTimeout(() => {
        window.alert('Discover inspirational quotes and images on this page');
      }, 10000);

        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
      }, []);

    useEffect(() => {
      const reaction1 = document.getElementById('reaction1')
      if(localStorage.getItem('heart1')){
        reaction1.textContent = '❤️';

      } else if(localStorage.getItem('thumbs1')){
        reaction1.textContent = '👍';

      } else if(localStorage.getItem('boo1')){
        reaction1.textContent = '👎';
      }
        

    });
    useEffect(() => {
      const reaction2 = document.getElementById('reaction2')
      if(localStorage.getItem('heart2')){
        reaction2.textContent = '❤️';

      } else if(localStorage.getItem('thumbs2')){
        reaction2.textContent = '👍';

      } else if(localStorage.getItem('boo2')){
        reaction2.textContent = '👎';
      }
        

    });
    useEffect(() => {
      const reaction3 = document.getElementById('reaction3')
      if(localStorage.getItem('heart3')){
        reaction3.textContent = '❤️';

      } else if(localStorage.getItem('thumbs3')){
        reaction3.textContent = '👍';

      } else if(localStorage.getItem('boo3')){
        reaction3.textContent = '👎';
      }
        

    });

    useEffect(() => {
      const reaction4 = document.getElementById('reaction4')
      if(localStorage.getItem('heart4')){
        reaction4.textContent = '❤️';

      } else if(localStorage.getItem('thumbs4')){
        reaction4.textContent = '👍';

      } else if(localStorage.getItem('boo4')){
        reaction4.textContent = '👎';
      }
        

    });
     
      function Reactor1(){
        setReactor1(reactor1 + 1)
        console.log(reactor1)

        if(reactor1 === 1){
          setReact1('❤️');
          localStorage.setItem('heart1', '❤️');

        } else if(reactor1 === 2){
          setReact1('👍');
           localStorage.removeItem('heart1');
           localStorage.setItem('thumbs1', '👍');

        } else if(reactor1 === 3){
          setReact1('👎');
           localStorage.removeItem('thumbs1');
           localStorage.setItem('boo1', '👎');

        } else{
          setReact1('');
          setReactor1(1);
          localStorage.removeItem('boo1');
        }

        
      }


      function Reactor2(){
        setReactor2(reactor2 + 1)
        console.log(reactor2)

        if(reactor2 === 1){
          setReact2('❤️');
          localStorage.setItem('heart2', '❤️');

        } else if(reactor2 === 2){
          setReact2('👍');
           localStorage.removeItem('heart2');
           localStorage.setItem('thumbs2', '👍');

        } else if(reactor2 === 3){
          setReact2('👎');
          localStorage.removeItem('thumbs2');
          localStorage.setItem('boo2', '👎');

        } else{
          setReact2('');
          setReactor2(1);
          localStorage.removeItem('boo2');
        }

        
      }


      function Reactor3(){
        setReactor3(reactor3 + 1)
        console.log(reactor3)

        if(reactor3 === 1){
          setReact3('❤️');
          localStorage.setItem('heart3', '❤️');

        } else if(reactor3 === 2){
          setReact3('👍');
           localStorage.removeItem('heart3');
           localStorage.setItem('thumbs3', '👍');

        } else if(reactor3 === 3){
          setReact3('👎');
          localStorage.removeItem('thumbs3');
          localStorage.setItem('boo3', '👎');

        } else{
          setReact3('');
          setReactor3(1);
          localStorage.removeItem('boo3');
        }

        
      }


      function Reactor4(){
        setReactor4(reactor4 + 1)
        console.log(reactor4)

        if(reactor4 === 1){
          setReact4('❤️');
          localStorage.setItem('heart4', '❤️');

        } else if(reactor4 === 2){
          setReact4('👍');
           localStorage.removeItem('heart4');
           localStorage.setItem('thumbs4', '👍');

        } else if(reactor4 === 3){
          setReact4('👎');
            localStorage.removeItem('thumbs4');
          localStorage.setItem('boo4', '👎');

        } else{
          setReact4('');
          setReactor4(1);
          localStorage.removeItem('boo4');
        }

        
      }
      
    return(
        <>
        <div id="home-container">

        <h1 id="page-logo">Home Page</h1>
        
        <div id="head-div">
            <nav className="nav-bar">
            <ul>
                <li id="game"><Link to="/game">Game</Link></li>
                <li id="historia"><Link to="/historia">Historia</Link></li>

            </ul>
            </nav>
           
            </div>

            <div id="main-div">

              <img src={pic4} className="images" onClick={Reactor1}></img>
              <p className='reaction1' id="reaction1">{react1}</p>
            <p>
              Children are gifts from God.❤️❤️
            </p>

            <img src={pic3} className="images" onClick={Reactor2}></img>
            <p className='reaction2' id="reaction2">{react2}</p>
            <p>
              Man best friend <br/> they say.❤️❤️
            </p>

            <img src={pic2} className="images" onClick={Reactor3}></img>
            <p className='reaction2' id="reaction3">{react3}</p>
            <p>
                Inner beauty radiates <br/> the outward.❤️❤️
            </p>

            <img src={pic1} className="images" onClick={Reactor4}></img>
            <p className='reaction2' id="reaction4">{react4}</p>
            <p>
               Black is always beautiful.❤️❤️
            </p>


             </div>
            
            </div>

            </>

    )
}


export default Home;