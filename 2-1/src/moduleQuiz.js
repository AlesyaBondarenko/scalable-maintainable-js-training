var APP = APP || {};

APP.moduleQuiz = (function(APP, $, undefined){

	
	return function (element, options) {
		
		var element = element;
        var fileName = options.fileName;
        var index = 0;
        var questions = [];
        var totalPoints = 0;
		
		this.init = function(){
			var request = new XMLHttpRequest();
    		request.open("GET", fileName, false);
    		request.send(null);
    		var returallTextnValue = request.responseText;

			var obj = $.parseJSON(returallTextnValue);
                        
            for (var i=0;i<obj.length;i++) {
            	questions.push(obj[i]);                                                	
            }
            printQuestion();
		}
		
		var printQuestion = function(){
			var html = "<h4>"+(index +1) +" "+questions[index].question+"</h4>";
        	for (var i=0;i<questions[index].answers.length;i++) {
        		html += "<li class='answers'><input type='radio' name='answer' value='"+questions[index].points[i]+"'>"+questions[index].answers[i]+"<br/></li>";
        	}
        	html += "";
        	var self = this;
        	var questionMaxNumber = questions.length;
        	$(element).html(html);
        	$(element).one('click.pluginQuestions','li.answers',function(){
        		totalPoints += $(this).find('input:radio').val()-0;
        		console.log(self._index);
        		if (index == (questionMaxNumber-1)) {
        			//self.settings.callback(totalPoints);
        			APP.EventBus.trigger("finish",element, {points: totalPoints});
        			destroy();
        		}
        		else {
        			nextQuestion();
        		}           		
        	})
		};
		
		var nextQuestion = function(){
			index += 1;
        	printQuestion();
		};
		
		var destroy = function () {
        	$(element).off('click.pluginQuestions');
        };
	}
})(APP, jQuery);