
$(document).ready(function load (){
	
	if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent);  
    	$("#apple").css({"display":"block"});
  	 	$("#android").css({"display":"none"});
	}else{
		$("#apple").css({"display":"none"});
  	 	$("#android").css({"display":"block"});
	}

});