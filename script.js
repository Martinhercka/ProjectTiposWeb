$(document).ready(function() {
	$("#error").hide();

	   $("#usr").keyup(function(){
            var username = $("#usr").val();
            if(username.trim().length<2){
                $("#errorusr").show();
            }
            else if(username.trim().length>2)
            	$("#errorusr").hide();
        });
        $("#pwd").keyup(function(){
            var password = $("#pwd").val();
            if(password.trim().length<2){
                $("#errorpwd").show();

            }
             else if (password.trim().length>2)
                	$("#errorpwd").hide();

	  });

  $("#button").click(function(){
  	    var username=$("#usr").val();
  	    var password=$("#pwd").val();
    if(username.trim().length<2 || password.trim().length<2 ){
    $("#error").show();
    
    }

    else
    {
$("#error").hide();






    }
    });
  $("#button").click(function(){
    var login=$("#usr").val();
    var password=$("#pwd").val();
  $.ajax({
    
    url:"http://localhost:8083/auth/login",
    type: 'POST',
    contentType:'application/json',
    data: JSON.stringify({"login":login,"password":password}),
    success: function(data){
        if(data.token!=undefined)
              window.location.href='secondpage.html';
          else
            $("#error").show();
    },
    error: function(){
        

    

    }







  });
});


  $("#register").click(function(){
   window.location.href='register.html';


 
});


   $("#registerbtn").click(function(){
   var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
     var email = $("#email").val();
      var login = $("#login").val();
       var password = $("#password").val();

       console.log(firstname+""+lastname+""+email+""+login+""+password);


        $.ajax({
    
    url:"http://localhost:8083/auth/registration",
    type: 'POST',
    contentType:'application/json',
    data: JSON.stringify({"firstname":firstname,"lastname":lastname,"email":email,"login":login,"password":password}),
    success: function(data){
        if(firstname!="" && lastname!="" &&email!=""&&login!=""&& password!=""){
            window.location.href='index.html';
        
        alert("You are successfully registred!");
    }
        else
            alert("You cannot do registration");
    }
  







  });

 
});


   $("#loginpage").click(function(){
   window.location.href='index.html';


 
});
      


});

 