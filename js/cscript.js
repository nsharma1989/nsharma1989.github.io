// Form Validation
jQuery(function($) {
    
	var validation_holder;
	
	$("form#form1 input[name='Submit']").click(function(e) {
	
	var validation_holder = 0;
	
		var name 			= $("form#form1 input[name='name']").val();
		var name_regex		= /^[A-z ]+$/; // reg ex phone check
		var email 			= $("form#form1 input[name='email']").val();
		var email_regex 	= /^[\w%_\-.\d]+@[\w.\-]+.[A-Za-z]{2,6}$/;
		var phone 			= $("form#form1 input[name='phone']").val();
		var phone_regex		= /^\d{10}$/; // reg ex phone check	
		var message 		= $("form#form1 input[name='text']").val();
        	var msg_from 		= $("form#form1 input[name='msg_from']").val();
			
		/* validation start */	
		
		if(name == "") {
			$("span.val_fname").html("* Please Enter your name.").addClass('validate');
			validation_holder = 1;
		} else {
			if(!name_regex.test(name)){ // if invalid email
				$("span.val_fname").html("* Invalid name.").addClass('validate');
			validation_holder = 1;
			} else {
			$("span.val_fname").html("");
			}
		}
	 	if(email == "") {
			$("span.val_email").html("* Please Enter email").addClass('validate');
			validation_holder = 1;
		} else {
			if(!email_regex.test(email)){ // if invalid email
				$("span.val_email").html("* Invalid Email!").addClass('validate');
				validation_holder = 1;
			} else {
				$("span.val_email").html("");
			}
		}
        	if(message == "") {
			$("span.val_msg").html("* Please Enter your message").addClass('validate');
			validation_holder = 1;
		}
	
        	if(phone == "") {
			$("span.val_phone").html("* Please Enter contact details").addClass('validate');
			validation_holder = 1;
		} else {
			if(!phone_regex.test(phone)){ // if invalid email
				$("span.val_phone").html("* Invalid contact!").addClass('validate');
				validation_holder = 1;
			} else {
				$("span.val_phone").html("");
			}
		}
		if(validation_holder == 1) { // if have a field is blank, return false
			$("p.validate_msg").slideDown("fast");
			return false;
		}  
        else
            { 
            validation_holder = 0; 
            }// else return true
		/* validation end */
         e.preventDefault();
         submitForm();
                    
                function submitForm(){
                $.ajax({
                    type: "POST",
                    url: "email.php",
                    data: "name=" + name + "&email=" + email + "&message=" + message + "&phone=" + phone + "&msg_from=" + msg_from ,
                    success : function(data){
                        //alert(data);
                        if(data == "success")
                            {
                                $('#form1').fadeTo( "slow", 0.15, function() {
                                $(this).find(':input').attr('disabled', 'disabled');
                                $(this).find('label').css('cursor','default');
                                $('#msgSubmit').removeClass('hidden');
                            });
                        }
                        else{
                            $('#form1').fadeTo( "slow", 0.15, function() {
                            $('#error').removeClass('hidden');
                            });
            
                            }                       
                    }
                });
            }
            });
//*********************************************    
// Apply Now Form Validation
//*********************************************    
    $("form#form2 input[name='Submit']").click(function(e) {
	
	var validation_holder = 0;
        
        
	
		var name 			= $("form#form2 input[name='name']").val();
		var name_regex		= /^[A-z ]+$/; // reg ex phone check
		var email 			= $("form#form2 input[name='email']").val();
		var email_regex 	= /^[\w%_\-.\d]+@[\w.\-]+.[A-Za-z]{2,6}$/;
		var phone 			= $("form#form2 input[name='phone']").val();
		var phone_regex		= /^\d{10}$/; // reg ex phone check	
		var address 		= $("form#form2 textarea[name='text']").val();
	 	var msg_from 		= $("form#form2 input[name='msg_from']").val();
        	var model 		    = $("form#form2 select[name='model']").val();
        	var country 		= $("form#form2 input[name='country']").val();
        
         	console.log($(this).closest('form').serialize());
			
		/* validation start */	
		
		if(name == "") {
			$("span.name_val").html("* Please Enter your name.").addClass('validate');
			validation_holder = 1;
		} else {
			if(!name_regex.test(name)){ // if invalid email
				$("span.name_val").html("* Invalid name.").addClass('validate');
			validation_holder = 1;
			} else {
			$("span.name_val").html("");
			}
		}
	 	if(email == "") {
			$("span.email_val").html("* Please Enter email").addClass('validate');
			validation_holder = 1;
		} else {
			if(!email_regex.test(email)){ // if invalid email
				$("span.email_val").html("* Invalid Email!").addClass('validate');
				validation_holder = 1;
			} else {
				$("span.email_val").html("");
			}
		}
        	if(address == "") {
			$("span.msg_val").html("* Please Enter your address").addClass('validate');
			validation_holder = 1;
		}
        	else{ $("span.msg_val").html("");}
        
        	if(model == "") {
			$("span.model_val").html("* Please Select your Phone Model").addClass('validate');
			validation_holder = 1;
		}
        	else{ $("span.model_val").html("");}
        
        	if(country == "") {
			$("span.con_val").html("* Please enter your country").addClass('validate');
			validation_holder = 1;
		}
        	else{ $("span.con_val").html("");}
	
        	if(phone == "") {
			$("span.phone_val").html("* Please Enter contact details").addClass('validate');
			validation_holder = 1;
		} else {
			if(!phone_regex.test(phone)){ // if invalid email
				$("span.phone_val").html("* Invalid contact!").addClass('validate');
				validation_holder = 1;
			} else {
				$("span.phone_val").html("");
			}
		}
		if(validation_holder == 1) { // if have a field is blank, return false
			$("p.validate_msg").slideDown("fast");
			return false;
		}  
        else
            { 
            validation_holder = 0;
              
            }// else return true
		/* validation end */
         e.preventDefault();
         submitForm();
                    
                function submitForm(){
                $.ajax({
                    type: "POST",
                    url: "email.php",
                    data: "name=" + name + "&email=" + email + "&address=" + address + "&phone=" + phone + "&msg_from=" + msg_from + "&model=" + model + "&country=" + country,
                    success : function(data){
                        //alert(data);
                        if(data == "success")
                            {
                                $('#form2').fadeTo( "slow", 0.15, function() {
                                $(this).find(':input').attr('disabled', 'disabled');
                                $(this).find('label').css('cursor','default');
                                $('#success').removeClass('hidden');
                            });
                        }
                        else{
                            $('#form2').fadeTo( "slow", 0.15, function() {
                            $('#fail').removeClass('hidden');
                            });
            
                            }                       
                    }
                });
            }
            });
    
}); // jQuery End
