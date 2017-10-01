$( document ).ready(function() {
	$(".square").click(function(){
		redirectToPage('');		
	});
	
	$(".circle").click(function(){
		$(".container").css("background-color","pink");

		setTimeout(function(){ 
			$(".container").css("background-color","grey");
			alert('Właśnie zostało zmienione tło');
			$(".container").append("<h1>Hahahahaha</h1>");
		}, 5000);
	});	

	function redirectToPage (param) {
		if (typeof param == 'string' && param !== '') {
			window.location.replace(param); 
		} else {
			console.log("Wartość parametru: " + param + " " + typeof param);
		}
	}
   
});