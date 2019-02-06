$(document).ready(function() {

	 $("form").submit(function(e)
	 {
		 e.preventDefault();
		 var num1=$('#num1').val();
         var num2=$('#num2').val();
    	 var operation = $('#operation').val();
		 
		 
		$(".error").remove();
         
		  if (num1.length < 1) {
			$('#num1').after('<span class="error">This field is required</span>');
			} 
		  if (num2.length < 1) {
			$('#num2').after('<span class="error">This field is required</span>');
			} 
		 
         if(operation=="addition")
         {
        	var result = num1 + num2;
        	$('#result').val(result).toFixed(2);
         }
         
         if(operation=="substraction")
         {
        	var result = num1 - num2;
         	$('#result').val(result);
         }
         
         if(operation=="multiplication")
         {
        	var result = num1 * num2;
         	$('#result').val(result);
         }
         
         if(operation=="division")
         {
        	var result = num1 / num2;
         	$('#result').val(result);
         }
         
         if(operation=="modulus")
         {
        	var result = num1 % num2;
         	$('#result').val(result);
         }
        
         
    	});
});