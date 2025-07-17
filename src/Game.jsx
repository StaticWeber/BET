import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
let countInt;


function Game(){
  const [score, setScore] = useState(0);
  const [response, setResponse] = useState('');
  const [isdisabled, setIsdisabled] = useState(false);
  const [color, setColor] = useState('lime');
  const [displayComponent1, setDisplayComponent1] = useState('none');
  const [displayComponent2, setDisplayComponent2] = useState('none');
  const [displayComponent3, setDisplayComponent3] = useState('none');
  const [displayComponent4, setDisplayComponent4] = useState('none');
  const [displayComponent5, setDisplayComponent5] = useState('none');
  const [displayComponent6, setDisplayComponent6] = useState('none');
  const [displayComponent7, setDisplayComponent7] = useState('none');
  const [displayComponent8, setDisplayComponent8] = useState('none');
  const [displayComponent9, setDisplayComponent9] = useState('none');
  const [displayComponent10, setDisplayComponent10] = useState('none');
  const [displayComponent11, setDisplayComponent11] = useState('none');
  const [displayComponent12, setDisplayComponent12] = useState('none');


  let [value, setValue] = useState(0);
  let [counter, setCounter] = useState(0);

   useEffect(() => {
    localStorage.clear();
   }, []);
  
  function userStatus(){
    if(localStorage.getItem('novice', 'user')){

      localStorage.removeItem('amature');
      localStorage.removeItem('master');
       setTimeout(() => {
        //  window.alert('User status: Novice');
       }, 7000);
       
    } else if(localStorage.getItem('amature', 'friend')){

      localStorage.removeItem('novice');
      localStorage.removeItem('master');
      setTimeout(() => {
        // windows.alert('User status: Amature')
      }, 7000);
      
    } else if(localStorage.getItem('master', 'lord')){

      localStorage.removeItem('novice');
      localStorage.removeItem('amature');
      setTimeout(() => {
        // windows.alert('User status: Master')
      }, 7000);

    } else{
      localStorage.setItem('novice', 'user');
      localStorage.removeItem('amature');
      localStorage.removeItem('master');
      setTimeout(() => {
        //  window.alert('User status: Novice');
       }, 7000);
    }
     
  }

  userStatus();

  useEffect(() => {
    if(localStorage.getItem('cash-displayed')){
          setDisplayComponent6('none');

    } if(localStorage.getItem('reward-displayed')){
          setDisplayComponent6('none');

    } if(localStorage.getItem('random-displayed')){
          setDisplayComponent6('none');

    } if(localStorage.getItem('bet-over')){
       setDisplayComponent6('inline');
    }

  });

  function DisplayCashPlay(){
    if(localStorage.getItem('master')){

      localStorage.setItem('cash-displayed', 'forCash');
      localStorage.removeItem('reward-displayed');
      localStorage.removeItem('random-displayed');
      localStorage.removeItem('bet-over');

      setDisplayComponent8('inline');
      setDisplayComponent6('none');

    } else{
      setDisplayComponent9('inline');
      localStorage.removeItem('bet-over');
      setDisplayComponent6('none');

      setTimeout(() => {
        setDisplayComponent6('inline');
        setDisplayComponent9('none');
        localStorage.removeItem('bet-over');
      }, 6000);

    } 
    
  }

  function DisplayRewardPlay(){
    if(localStorage.getItem('master')){

      localStorage.setItem('reward-displayed', 'forReward');
      localStorage.removeItem('cash-displayed');
      localStorage.removeItem('random-displayed');
      localStorage.removeItem('bet-over');

      setDisplayComponent7('inline');
      setDisplayComponent6('none');

    } else{
      setDisplayComponent9('inline');
      localStorage.removeItem('bet-over');
      setDisplayComponent6('none');
      
      setTimeout(() => {
      setDisplayComponent6('inline');
      setDisplayComponent9('none');
      localStorage.removeItem('bet-over');
      }, 6000);

    } 
    
  }

  function DisplayRandomPlay(){

    localStorage.setItem('random-displayed', 'randomPlayer');
    localStorage.removeItem('reward-displayed');
    localStorage.removeItem('cash-displayed');
    localStorage.removeItem('bet-over')
    setDisplayComponent4('inline');
    setDisplayComponent6('none');
  }



  function Cashplay(){
    localStorage.setItem('hard-key', 'Hard');
    localStorage.removeItem('medium-key');

    localStorage.setItem('cash-mode', 'cashPlay');
    localStorage.removeItem('reward-mode');

    localStorage.setItem('bet-begin', 'betStart');
    localStorage.removeItem('bet-over');

    setTimeout(() => {
       setDisplayComponent10('inline');
       setDisplayComponent8('none');
    }, 1000);

    setTimeout(() => {
       setDisplayComponent10('none');
    }, 5000);

    setTimeout(() => {
      setDisplayComponent5('inline')
    }, 5000);

    setTimeout(() => {
       setDisplayComponent5('none');
       setScore(0);
       setCounter(0);
       localStorage.setItem('bet-over', 'betEnded');
       localStorage.removeItem('bet-begin');
       localStorage.removeItem('cash-displayed');
    }, 47000);
   
  }
  

  function RewardPlay(){
    localStorage.setItem('medium-key', 'Medium');
    localStorage.removeItem('hard-key');

    localStorage.setItem('reward-mode', 'RewardPlay');
    localStorage.removeItem('cash-mode');

    localStorage.setItem('bet-begin', 'betStart');
    localStorage.removeItem('bet-over');

     setTimeout(() => {
       setDisplayComponent10('inline');
       setDisplayComponent7('none');
    }, 1000);

    setTimeout(() => {
       setDisplayComponent10('none');
    }, 5000);

    setTimeout(() => {
       setDisplayComponent5('inline');
    }, 5000);

    setTimeout(() => {
       setDisplayComponent5('none');
       setScore(0);
       setCounter(0);
       localStorage.setItem('bet-over', 'betEnded');
       localStorage.removeItem('bet-begin');
       localStorage.removeItem('reward-displayed');
    }, 65000);

  }

  useEffect(() => {

    if(localStorage.getItem('hard-key') && localStorage.getItem('cash-mode') &&
       localStorage.getItem('master') && localStorage.getItem('cash-displayed') 
    
       && localStorage.getItem('bet-over')){
         setDisplayComponent6('none');
       }

    if(localStorage.getItem('hard-key') && localStorage.getItem('cash-mode') &&
       localStorage.getItem('master') && localStorage.getItem('due')){

        setTimeout(() => {
        localStorage.removeItem('bet-over');
        setDisplayComponent11('inline');
        setDisplayComponent6('none');
     }, 1800)
       


        setTimeout(() => {
         localStorage.removeItem('due');
         window.location.href = '/#game';
        }, 20000);

        setTimeout(() => {
   if(localStorage.getItem('hard-key') && localStorage.getItem('cash-mode') &&
      localStorage.getItem('master') && localStorage.getItem('bet-over')){

       setDisplayComponent11('none');
       setDisplayComponent6('inline');
       }

      }, 30000);
      

      } if(localStorage.getItem('medium-key') && localStorage.getItem('reward-mode') && 
         localStorage.getItem('master') && localStorage.getItem('reward-displayed') 
         && localStorage.getItem('bet-over')){

         setDisplayComponent6('none');

      
    } if(localStorage.getItem('medium-key') && localStorage.getItem('reward-mode') 
      && localStorage.getItem('master') && localStorage.getItem('qualify')){

         setTimeout(() => {
          localStorage.removeItem('bet-over');
          setDisplayComponent11('inline');
          setDisplayComponent6('none');
         }, 1800)
        

      setTimeout(() => {
         localStorage.removeItem('qualify');
         window.location.href = '/#game';
        }, 20000);

      setTimeout(() => {
   if(localStorage.getItem('medium-key') && localStorage.getItem('reward-mode') &&
      localStorage.getItem('master') && localStorage.getItem('bet-over')){

       setDisplayComponent12('none');
       setDisplayComponent6('inline');
       }

      }, 30000);
    }
    
    

  });
  


  useEffect(() => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }, []);

    useEffect(() => {

     let startup = setTimeout(() => {
        setDisplayComponent2('inline');
      }, 3000);
   
      setTimeout(() => {
        clearTimeout(startup)
        setDisplayComponent2('none')
      }, 9000);

      setTimeout(() => {
        setDisplayComponent6('inline');
      }, 10000);

      setTimeout(() => {
        setDisplayComponent3('inline');
      }, 9000);


    }, [])


   function startFunction(){

    setInterval(() => {
        setValue(value += 1);
      }, 1000);
      
     if(value >= 3 && value < 4  || value >= 13 && value < 14 || value >= 20 && value < 21){
           document.body.style.backgroundColor = ('red')
         }  else{

         if(value % 2 === 1){
         document.body.style.backgroundColor = ('black');
          
         
         } else if(value % 3 === 0){
           document.body.style.backgroundColor = ('green');

         } else if(value % 2 === 0){
           document.body.style.backgroundColor = ('yellow');

         } 

         }

         
   }

 
   function Easy(){

    localStorage.setItem('easy-key', 'Easy');
    setDisplayComponent5('inline');
    setDisplayComponent4('none');
    localStorage.removeItem('medium-key');
    localStorage.removeItem('hard-key');

   }

   function Medium(){

   localStorage.setItem('medium-key', 'Medium');
    setDisplayComponent5('inline');
    setDisplayComponent4('none');
    localStorage.removeItem('easy-key');
    localStorage.removeItem('hard-key');

   }

   function Hard(){

   localStorage.setItem('hard-key', 'Hard');
   setDisplayComponent5('inline');
   setDisplayComponent4('none');
   localStorage.removeItem('easy-key');
   localStorage.removeItem('medium-key');

  }

  function Anonymous(){

    if(localStorage.getItem('easy-key')){
       countInt = setInterval(() =>{
            setCounter(counter += 1)
         }, 1000);

         setDisplayComponent1('inline');
         setDisplayComponent3('none');
         setDisplayComponent4('none');

         setTimeout(() => {
         setIsdisabled(false);
         setColor('lime');
         setDisplayComponent1('none');
         setDisplayComponent3('inline');
         setDisplayComponent6('inline');
         localStorage.removeItem('random-displayed');
      
      }, 91000);

      setTimeout(() => {
         setDisplayComponent5('none');
         setScore(0);
         setCounter(0);
      }, 96000);

    } else if(localStorage.getItem('medium-key')){
         countInt = setInterval(() =>{
            setCounter(counter += 1)
         }, 600);

         setDisplayComponent1('inline');
         setDisplayComponent3('none');
         setDisplayComponent4('none');
         
        setTimeout(() => {
        setIsdisabled(false);
        setColor('lime');
        setDisplayComponent1('none');
        setDisplayComponent3('inline');
        setDisplayComponent6('inline');
        localStorage.removeItem('random-displayed');
      
      }, 55000);

      setTimeout(() => {
         setDisplayComponent5('none');
         setScore(0);
         setCounter(0);
      }, 60000);

    } else if(localStorage.getItem('hard-key')){
          countInt = setInterval(() =>{
            setCounter(counter += 1)
         }, 400);

         setDisplayComponent1('inline');
         setDisplayComponent3('none');
         setDisplayComponent4('none');

        setTimeout(() => {
        setIsdisabled(false);
        setColor('lime');
        setDisplayComponent1('none');
        setDisplayComponent3('inline');
        setDisplayComponent6('inline');
        localStorage.removeItem('random-displayed');
        
      }, 37000);

      setTimeout(() => {
         setDisplayComponent5('none');
         setScore(0);
         setCounter(0);
      }, 42000);

    } else{
      
       countInt = setInterval(() =>{
            setCounter(counter += 1)
         }, 1000);

         setDisplayComponent1('inline');
         setDisplayComponent3('none');
         setDisplayComponent4('none');

         setTimeout(() => {
         setIsdisabled(false);
         setColor('lime');
         setDisplayComponent1('none');
         setDisplayComponent3('inline');
         setDisplayComponent6('inline');
         localStorage.removeItem('random-displayed');
         
      }, 91000);

      setTimeout(() => {
         setDisplayComponent5('none');
         setScore(0);
         setCounter(0);
      }, 96000);
      
    }
      
        setScore(0);
        setIsdisabled(true)
        setColor('red');

        setDisplayComponent1('flex')

  }

    
    function Redfunction(){

        if(value >= 3 && value < 4  || value >= 13 && value < 14 || value >= 20 && value < 21){
           document.body.style.backgroundColor = ('blue')
           setResponse('Bad guess👎')

         }  else{

         if(value % 2 === 1){
          document.body.style.backgroundColor = ('yellow');
          setResponse('Bad guess👎')
         
         } else if(value % 3 === 1){
           document.body.style.backgroundColor = ('red');
           setScore(score + 5);
           setResponse('Good guess👍');

         } else if(value % 2 === 0){
           document.body.style.backgroundColor = ('green');
           setResponse('Bad guess👎')

         } 

         }
         
}


    function Bluefunction(){

        if(value >= 3 && value < 4  || value >= 13 && value < 14 || value >= 20 && value < 21){
           document.body.style.backgroundColor = ('red')
           setResponse('Bad guess👎')

         }  else{

         if(value % 2 === 1){
          document.body.style.backgroundColor = ('blue');
           setScore(score + 5);
          setResponse('Good guess👍')
         
         } else if(value % 3 === 0){
           document.body.style.backgroundColor = ('green');
           setResponse('Bad guess👎');

         } else if(value % 2 === 0){
           document.body.style.backgroundColor = ('yellow');
           setResponse('Bad guess👎')

         } 

         }
         
}

    function Greenfunction(){

        if(value >= 3 && value < 4  || value >= 13 && value < 14 || value >= 20 && value < 21){
           document.body.style.backgroundColor = ('yellow')
           setResponse('Bad guess👎')

         }  else{

         if(value % 2 === 1){
          document.body.style.backgroundColor = ('red');
          setResponse('Bad guess👎')
         
         } else if(value % 3 === 0){
           document.body.style.backgroundColor = ('blue');
           setResponse('Bad guess👎')

         } else if(value % 2 === 0){
           document.body.style.backgroundColor = ('green');
            setScore(score + 5);
            setResponse('Good guess👍');

         } 

         }
         
}



    function Yellowfunction(){

        if(value >= 3 && value < 4  || value >= 13 && value < 14 || value >= 20 && value < 21){
           document.body.style.backgroundColor = ('green')
           setResponse('Bad guess👎')

         }  else{

         if(value % 2 === 0){
          document.body.style.backgroundColor = ('green');
          setResponse('Bad guess👎')
         
         } else if(value % 3 === 1){
           document.body.style.backgroundColor = ('yellow');
            setScore(score + 5);
            setResponse('Good guess👍')

         } else if(value % 2 === 1){
           document.body.style.backgroundColor = ('green');
           setResponse('Bad guess👎')

         } 

         }
         
}


      useEffect(() => {

        if(counter === 1){
           const rounder = document.getElementById('round-Id');
           rounder.textContent = 'Round one';

        } else if(counter === 30){
          const rounder = document.getElementById('round-Id');

          setTimeout(() => {
            rounder.textContent = 'Round two';
            
          }, 1000);

        } else if(counter === 60){
           const rounder = document.getElementById('round-Id');
           
          setTimeout(() => {
            rounder.textContent = 'Round three';
            
          }, 1000);

        } else if(counter === 90){
           const rounder = document.getElementById('round-Id');
           clearInterval(countInt);

           setTimeout(() => {
            document.body.style.backgroundColor = 'white';
            rounder.textContent = 'Round over';
            setCounter(0);
            setValue(0);
          }, 1000);

          
          
        }
      });


      useEffect(() => {
        const total = document.getElementById('total');
        if(counter === 90 && score > 150 && score < 200 ){
          localStorage.setItem('novice', 'user');
          localStorage.removeItem('amature', 'friend');
          localStorage.removeItem('master', 'lord');

          setTimeout(() => {
           total.textContent = `Your score ${score}: Poor`;
          }, 2000)
           
        } else if(counter === 90 && score > 200 && score < 300){
          localStorage.setItem('amature', 'friend');
          localStorage.removeItem('novice', 'user');
          localStorage.removeItem('master', 'lord');
          
          setTimeout(() => {
           total.textContent = `Your score ${score}: Good`;
          }, 2000)
           
        } else if(counter === 90 && score > 350 && score < 400){
          localStorage.setItem('master', 'lord');
          localStorage.removeItem('novice', 'user');
          localStorage.removeItem('amature', 'friend');
          
          setTimeout(() => {
            total.textContent = `Your score ${score}: Excellent`;
          }, 2000)
        
        } else if(counter === 90 && score >= 450 && score < 550){
          localStorage.setItem('due', 'cash-out');

        } else if(counter === 90 && score >= 550 && score < 650){
          localStorage.setItem('qualify', 'card');

        } else if(score === 0){
          total.textContent = '';
        }
        
        
      });

     

      function OpenWhatsapp(){
      
        if(localStorage.getItem('due')){
          window.open("https://wa.me/9161857413");

        } else if(localStorage.getItem('qualify')){
          window.open("https://wa.me/9161857413");
        }
        
        else{
         window.alert('You are not allowed');
         window.location.href = '/#game'
      }
      
      } 


    return(

      <>
      <div id="game-container">

      <div id="level-container" style={{ display: displayComponent4 }}>

        <p id="easy-Id" className="levels" onClick={Easy}>Easy</p>
        <p id="medium-Id" className="levels" onClick={Medium}>Med..</p>
        <p id="hard-Id" className="levels" onClick={Hard}>Hard</p>
        

      </div>

        <div id="responsive-container" style={{ display: displayComponent3 }}>
            <h1 id="game-logo">GUESS GAME</h1>

            <nav className="nav-bar">

            <ul>
                <li id="home"><Link to="/">Home</Link></li>
                <li id="historia"><Link to="/historia">Historia</Link></li>
        
            </ul>
             
            </nav>

            </div>

            <div className="intro-container" style={{ display: displayComponent2 }}>
            <h2>Color Guessing Game 😍</h2>
            <h5>Game loading...</h5>
            </div>

            <div id="output-container">
                <div className="box-container" style={{ display: displayComponent1 }}>
                  <h4 id="guide">Quick guide:<br/>Guess the next color.
                  <br/> Avoid tapping one color box repeatedly.
                  <br/> How good can you guess? 😍
                  </h4>
                  <h4 className="box" id="red" onClick={Redfunction}></h4>
                  <h4 className="box" id="blue" onClick={Bluefunction}></h4>
                  <h4 className="box" id="green" onClick={Greenfunction}></h4>
                  <h4 className="box" id="yellow" onClick={Yellowfunction}></h4>
                  <h3 id="total"></h3>
                </div>

                </div>

                <div id="start-container" style={{ display: displayComponent5 }}>
                <button style={{ backgroundColor: color, color: 'black'}} disabled={isdisabled} onClick={() => {

                  startFunction();
                  Anonymous();
                  // handleDisable();
                  // handleColor();

                }} id="start-button">Start</button>
                <div id="info">
                 <h4 id="round-Id"></h4>
                <p>Score:{score}</p>
                <p>{response}</p>
                <p>Counter:{counter}</p>

                </div>

                </div>

                <div id="bet-container" style={{ display: displayComponent6 }}>
                  <button id="cash-play" className="bet-button" onClick={DisplayCashPlay}>Cash Play</button>
                  <button id="reward-play" className="bet-button" onClick={DisplayRewardPlay}>Reward Play</button>
                  <button id="random-play" className="bet-button" onClick={DisplayRandomPlay}>Random Play</button>

                </div>

                <div id="cash-subcontainer" style={{ display: displayComponent8 }} onClick={Cashplay} className="bet-displays">
                  <p>Make a transfer to the Admin: 9161857413 Palmpay. A minimum of #500 or a maximum of #2000 
                    <br/> Screenshot your transaction, play the game. <br/><br/>
                     Get a score of 450 or higher to double your cash.
                     Click to start</p>
                </div>

                 <div id="reward-subcontainer" style={{ display: displayComponent7 }} onClick={RewardPlay} className="bet-displays">
                  <p>Get a score of 550 and above to win recharge cards of any network <br/> Click to start</p>
                 </div>

                <div id="eligible-container" style={{ display: displayComponent9 }} className="bet-displays">
                  <p>You must be a master to be eligible. <br/> Get a score of 350 or above at random gameplay to qualify.</p>
                </div>

                <div id="continue-container" style={{ display: displayComponent10 }} className="bet-displays">
                  <p>Press the start button to continue</p>
                </div>

                <div id="congrants-container" style={{ display: displayComponent11 }} className="bet-displays">
                  <p>Congratulations.🤝 <br/> Please take a
                  screenshot of your screen and send it together with the screenshot
                  of your transaction to the admin, then await your reward.</p> <br/>
                  <p>Proceed to admin below</p>
                  <button onClick={OpenWhatsapp}>Admin🤑</button>
                </div>

                {/* <div id="admin-container" style={{ display: displayComponent12 }} className="bet-displays">
                  
                </div> */}

                 <div id="congrats2-container" style={{ display: displayComponent12 }} className="bet-displays">
                  <p>Congratulations.🤝 <br/> Please take a
                  screenshot of your screen and send it to the admin, then await your reward.</p> <br/>
                  <p>Proceed to admin below</p>
                  <button onClick={OpenWhatsapp}>Admin🤑</button>
                </div>
                
        </div>

        </>
    )
}



export default Game;