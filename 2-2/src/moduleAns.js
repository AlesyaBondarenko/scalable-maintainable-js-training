var APP = APP || {};

define('moduleAns',function(){
	
	return function moduleAns(element, options){
		
		var points = options.points;
		
		this.print = function (){
			$(element).html("You have "+ options.points+" points");            
		};
	}
	
});