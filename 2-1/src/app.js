//init APP
var APP = APP || {};

var element1 = $("#questions1");
var element2 = $("#questions2");

APP.init = function() {
	
	APP.EventBus.bind("finish",function(element, points){
		var result = new APP.moduleAns(element,points);
		result.print();
	}, this);
	
	var quiz = new APP.moduleQuiz(element1, {fileName:"questions.json"});
	quiz.init();
	
	var quiz2 = new APP.moduleQuiz(element2, {fileName:"questions.json"});
	quiz2.init();
};
		