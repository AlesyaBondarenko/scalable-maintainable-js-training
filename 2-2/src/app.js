define('app',function(){
	console.log('in app');
	
	APP.EventBus.bind("finish",function(element, points){
		require(['moduleAns'], function(moduleAns){
			var ans = new moduleAns(element, points);
			ans.print();
		});
	});
	
	require(['moduleQuiz'], function(moduleQuiz){
		var quiz = new moduleQuiz($("#questions1"),{fileName: "questions.json"});
		quiz.init();
	});
	
});