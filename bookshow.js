  function myFunction(x) {
    x.classList.toggle("change");
  }
  function showHide(){
    if(document.getElementById("myDiv").style.visibility == "hidden"){
        document.getElementById("myDiv").style.visibility = "visible";
    }else{
        document.getElementById("myDiv").style.visibility = "hidden";
    }
   }

   function showH(){
    if(document.getElementById("myBox").style.visibility == "hidden"){
        document.getElementById("myBox").style.visibility = "visible";
    }
   }
   
   function backTo(){
    if(document.getElementById("myBox").style.visibility == "visible"){
        document.getElementById("myBox").style.visibility = "hidden";
    }
   }

   function popupOfcity(){
    if(document.getElementById("myPop").style.visibility == "hidden"){
        document.getElementById("myPop").style.visibility = "visible";
    }
   }
   function backToBack(){
    if(document.getElementById("myPop").style.visibility == "visible"){
        document.getElementById("myPop").style.visibility = "hidden";
    }
   }