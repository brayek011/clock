

//--------------------------------
function update() 

    {
        var date = new Date();

        var set_time = document.getElementById("set_time");
        var set_time2 = document.getElementById("xx");
        var set_date = document.getElementById("set_date");
        var x = 0;
        var xx = 0;
        var xxx = 0;

        if( date.getMinutes() < 10 )
            { x = "0" + date.getMinutes().toString(); }
        else  { x = date.getMinutes(); }


         if( date.getSeconds() < 10 )
         { xx = "0" + date.getSeconds().toString(); }
         else  { xx = date.getSeconds(); }

        if( parseInt( date.getMonth() +1 ) < 10 )
        { xxx = "0" + parseInt( date.getMonth() +1 ).toString(); }
        else  { xxx = parseInt( date.getMonth() +1 ); }


        

        set_time.innerHTML = date.getHours() + ":" + x + ":" ;
        
         set_time2.innerHTML = xx ;
         set_time2.style.fontSize = "30px" ;

        
        set_date.innerHTML = date.getDate() + "-" + xxx + "-" + date.getFullYear();


    }





onload = update() ;
setInterval(update, 120); 



function get_col() 
    {
        var get_col = document.getElementById("set_color").value;
        localStorage.setItem("color", get_col);
        document.getElementById("time").style.background = localStorage.getItem("color");
        document.getElementById("body").style.background = localStorage.getItem("color");



    }



    function set_col(){
        document.getElementById("set_color").value = localStorage.getItem("Color");
        document.getElementById("time").style.background =localStorage.getItem("Color");
        document.getElementById("body").style.background = localStorage.getItem("Color");
        }
        
//setInterval(set_col,2000);







