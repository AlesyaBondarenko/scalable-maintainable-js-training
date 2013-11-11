//Plugin questions

(function($){
	
	var pluginName = "pluginQuestinos",
	question = {
			questionText: "value"
	};
	defaults = {
            propertyName: "value"
	};
	
	function Plugin( element, options ) {
        this.element = element;
        
        this.options = $.extend( {}, defaults, options) ;
        
        this._name = pluginName;
        
        this.init();
    }
 
    Plugin.prototype.init = function () {
    	question.questionText = "some test text";
    };
    
    Plugin.prototype.printQuestion = function(questionNumber) {
        $(this.element).html("Text "+ questionNumber+ ": "+question.questionText);
    };
    
    Plugin.prototype.processAnswer= function(questionNumber, points) {
    	questionNumber += 1;
    	$.fn.pluginQuestinos("printQuestion",questionNumber);
    };
    
	
	$.fn[pluginName] = function(oprions) {
		return this.each(function () {
            if ( !$.data(this, "plugin_" + pluginName )) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ));
            }
		});
	};
})(jQuery);