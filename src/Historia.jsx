import { useEffect  } from 'react';
import pic1 from './assets/historia1.jpg';
import pic2 from './assets/historia2.jpg';
import pic3 from './assets/historia3.jpg';
const url1 = 'https://www.google.com/amp/s/www.gw2ru.com/basic-facts/231562-why-is-russia-so-big/amp';
const url2 = 'https://www.britannica.com/topic/American-colonies';
const url3 = 'https://cartomission.com/2021/08/12/Christianity-islam-nigeria';
import { Link } from 'react-router-dom';

import './Historia.css'

function Historia(){
   
     useEffect(() => {
             setTimeout(() => {
                window.alert('Discover historical knowledge on this page');
             }, 10000)
           
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
          }, []);

    return(
          <div id="historia-container">
         <h1 id="page-logo">Historia Page</h1>
          <div id="head-div">
            <nav className="nav-bar">
            <ul>

                <li id="home"><Link to="/">Home</Link></li>
                <li id="game"><Link to="/game">Game</Link></li>
            
            </ul>
            </nav>

            </div>

            <div id="main-div">
            
               <a href={url1} target='_blank' rel='noreferrer'><img src={pic1} className="images"></img></a>
                   <p>
                     Do you know Russia is the largest country in the world in terms of land mass?
                   </p>
            
                  <a href={url2} target='_blank' rel='noreferrer'><img src={pic2} className="images"></img></a> 
                     <p>
                     Do you know America was colonized by britain?
                    </p>
            
                    <a href={url3} target='_blank' rel='noreferrer'><img src={pic3} className="images"></img></a>
                     <p>
                     Do you know Nigeria is home to the largest christain and muslim population in Africa?
                     </p>
            
            
                </div>
     </div>
    )
}



export default Historia;