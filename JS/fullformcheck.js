
function Validate1() {
    var nam = document.forms["VacayForm"]["name"];
    var dom = document.forms["VacayForm"]["domestic"];
    var int = document.forms["VacayForm"]["international"];
    var sel = document.forms["VacayForm"]["select"];
    var agree = document.forms["VacayForm"]["agree"];
  

    if (nam.value == "") {
      alert("Please provide your name!");
     
      return false;
    }
  
    if (domestic.value == "")
    {
       window.alert("Please select domestic preference to proceed.");
       
       return false;
    }
    else if(international.value == "") {
      window.alert("Please select international preference to proceed.");
     
      return false;
    }
  
    if (select.selectedIndex < 1) {
      alert("Please select where you prefer to visit");
      
      return false;
    }
  
    return true;
  }
