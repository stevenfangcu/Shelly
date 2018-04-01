function updateTime(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds();
    var filler;
    var checkBox = document.getElementById("myCheck");
      if(checkBox.checked == true){
        if (minutes < 10){
            minutes = "0" + minutes
        }
        if(seconds < 10){
          seconds = "0" + seconds;
        }
        if(hours > 13){
          hours = hours - 12;
        }
        var t_str = hours + ":" + minutes + ":" + seconds + " ";
        if(hours > 11){
            t_str += "PM";
        } else {
            t_str += "AM";
        }
      }else{
        if (minutes < 10){
            minutes = "0" + minutes
        }
        if(seconds < 10){
          seconds = "0" + seconds;
        }
        var t_str = hours + ":" + minutes + ":" + seconds + " ";
        if(hours > 11){
            t_str += "PM";
        } else {
            t_str += "AM";
        }
    }
    document.getElementById('time').innerHTML = t_str;
}
setInterval(updateTime, 1000);