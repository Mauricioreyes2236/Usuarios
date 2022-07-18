$(function () {
    
    var mayus  = new RegExp("^(?=.*[A-Z])");
    var lower  = new RegExp("^(?=.*[a-z])"); 
    var simbol = new RegExp("^(?=.*[._$%#*])");
    var number = new RegExp("^(?=.*[0-9])");
    var len    = new RegExp("^(?=.{10,})");

    var regExp    = [mayus,lower,simbol,number,len];
    var elementos = [$("#mayus"),$("#lower"),$("#simbol"),$("#number"),$("#len")];

    $("#password").on("keyup", function(){
      var pass = $("#password").val();
      var check = 0;

      for(var i=0; i<5; i++){
        if(regExp[i].test(pass)){
          elementos[i].hide();
          check++;
        }else{
          elementos[i].show();
        }
      }

      if (check >= 0 && check<=2){
          $("#mensaje").text("Contraseña Muy insegura").css("color", "red");
      }else if (check>=3 && check<=4){
        $("#mensaje").text("Constraseña Poco segura").css("color", "orange");
      }else if(check == 5){
        $("#mensaje").text("Contraseña segura").css("color", "green");
      }

    });

  });