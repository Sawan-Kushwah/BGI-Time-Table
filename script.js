let days = document.getElementsByClassName("days");
var now = new Date();
for (var i = 0; i<days.length;i++){
     if(i==now.getDay()-1){
        days[i].style.background="#02bd91";
        days[i].style.color= "#000000" 
     }
}