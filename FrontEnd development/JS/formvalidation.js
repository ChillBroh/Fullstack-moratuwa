$(function(){
    $("form[name='registration']").validate({
        rules:{
            name:"required",
            email:{
                required:true,
                email:true
            },
            pass:{
                required:true,
                minlength:5
            },
            cpass:{
                required:true,
                minlength:5,
                equalTo:"#pass"
            },

            messages:{
                name:"PLease Enter your Name",

                email:{
                    required : "Please enter your email address",
                    email : "please enter a valid email address "
                },

                pass: {
                    required : "Please provide a password",
                    minlength : "Your passsword must be consist of at least 5 characters"
                },
                cpass:{
                    required : "Please re- enter your password",
                    minlength : "Your passsword must be consist of at least 5 characters",
                    equalTo : "Your password must be same as the password you provided"
                }
            }
        }
    })
})