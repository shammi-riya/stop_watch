window.onload = function(){
    var seconod = 00;
    var minits = 00 ;
    var interval;

   let minit = document.getElementById("minit");
   let second = document.getElementById("second");
   let startBtn = document.getElementById("start_btn");
   let stopBtn = document.getElementById("stop_btn")
   let resetBtn = document.getElementById("reset_btn")
    console.log(resetBtn);

//    start button
    startBtn.onclick = function(){
        clearInterval( interval)
        interval = setInterval(()=>{
          startTimer()
        } , 100)
          
    }


    // stop button
   
    stopBtn.onclick = function(){
        clearInterval( interval)
      }
    
    

    //   reset button
      resetBtn.onclick= function(){
        clearInterval( interval)
        seconod=0;
        minits = 0;
    
        minit.innerHTML = minits+ "0";
        second.innerHTML = seconod + "0";
         
      }
       
      

//   set time
   function startTimer(){
    seconod  ++
    if( seconod <= 9){
        second.innerHTML = "0" + seconod 
    } 
     if( seconod > 9){   
        second.innerHTML = seconod 
     } 
   



     if(seconod > 60){
       minits ++
       minit.innerHTML = "0" + minits;
       seconod = 0
       second.innerHTML = "0" + 0    
     }
     if( minits > 9){
       minit.innerHTML = minits;
     }
   }
} 
    
