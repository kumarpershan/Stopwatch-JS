var jsmin = 0
var jsSec = 0
var jsMsec = 0

var min =document.getElementById('min')
var sec =document.getElementById('sec')
var Msec =document.getElementById('Msec')
var interval;



function start(){

   interval = setInterval(function(){
      jsMsec++
      Msec.innerHTML = jsMsec
     if(jsMsec >= 100) {
        jsSec++
        sec.innerHTML = jsSec
        jsMsec = 0 
     }

      else if( jsSec >= 59){
         jsmin++
       min.innerHTML = jsmin 
        jsSec = 0
      }


},10)
document.getElementById('btn').disabled = true
}


function  pause(){
    clearInterval(interval)
document.getElementById('btn').disabled = false

}


function Reset(){
    jsmin = 0
    jsSec = 0
    jsMsec = 0
    Msec.innerHTML = jsMsec
    sec.innerHTML = jsSec
    min.innerHTML = jsmin 
    document.getElementById('btn').disabled = false



}