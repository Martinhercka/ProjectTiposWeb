$(document).ready(function() {


    var login;
    var password;
    var bet1;
    var bet2;
    var bet3;
    var bet4;
    var bet5;
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
login=$("#usr").val();
password=$("#pwd").val();
  $.ajax({
    
    url:"http://localhost:8083/auth/login",
    type: 'POST',
    contentType:'application/json',
    data: JSON.stringify({"login":login,"password":password}),
    success: function(data){
        var token=data.token;
        var login = data.login;
       
        if(data.token!=undefined)
        {
               $("#loginform").css("display","none");
                 $("#betform").css("display","block");
                     $("#loginfo").text("You are logged as: "+login);


            
                  $("#betbtn").click(function(){

                    bet1= $("#bet1").val();
                    bet2= $("#bet2").val();
                    bet3= $("#bet3").val();
                    bet4= $("#bet4").val();
                    bet5= $("#bet5").val();
if(bet1 != "" && bet2!= "" && bet3 != "" && bet4 != "" && bet5 != "" && bet1 <=35 && bet2 <=35 && bet3  <=35 && bet4  <=35 && bet5  <=35) {
                       $.ajax({
    
    url:"http://localhost:8083/bets/new",
    type: 'POST',
    contentType:'application/json',
    data: JSON.stringify({"login":login,"token":token,"bet1":bet1,"bet2":bet2,"bet3":bet3,"bet4":bet4,"bet5":bet5}),
    success: function(data){
    


    alert("DONE");
    }
  







  });
                   }
else
{

alert("Empty input or higher number than 35");

}






 });




          }
          else{
            $("#error").show();}


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

