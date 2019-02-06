$(document).ready(function() {

	 $("form").submit(function(e)
	 {
		 e.preventDefault();
		 var num1=parseFloat($('#num1').val());
         var num2=parseFloat($('#num2').val());
    	 var operation = $('#operation').val();
         
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