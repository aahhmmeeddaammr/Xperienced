<<<<<<< HEAD
if(!localStorage.getItem("done")){
     window.onload=()=>{
          setTimeout(()=>{
               
               document.querySelector(".loading").style=`display:none;`
               localStorage.setItem("done",1)
          },1000)
     }
}else{
     document.querySelector(".loading").style=`display:none;`

}
=======

window.onload=()=>{
     setTimeout(()=>{

          document.querySelector(".loading").style=`display:none;`
     },1000)
}
>>>>>>> d20d7606bd7fc5c5827da935037a88f9d637513c
