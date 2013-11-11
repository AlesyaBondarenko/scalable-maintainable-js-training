var APP = APP || {};

APP.moduleAns = (function(APP, $, undefined){
	
	return function(element, options){
		
		var points = options.points;
		
		this.print = function (){
			$(element).html("You have "+ options.points+" points");            
		};
	}
	
})(APP, jQuery);