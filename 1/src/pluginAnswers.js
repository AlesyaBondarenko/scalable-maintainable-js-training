//Plugin answers

(function($){
	
	var pluginName = "pluginAnswers";
	
	function Plugin( element, options ) {
        this.element = element;
        
        this.options = $.extend( {}, defaults, options) ;
        
        this._name = pluginName;
        
        this.init();
    }
 
    Plugin.prototype.init = function () {
        // ...
    };
    
    Plugin.prototype.printAnswers = function(answersSumm) {
        $(this.element).html("the summ is " + answersSumm);
    };
	
	$.fn["pluginAnswers"] = function(oprions) {
		return this.each(function () {
            if ( !$.data(this, "plugin_" + pluginName )) {
                $.data( this, "plugin_" + pluginName, 
                new Plugin( this, options ));
            }
		});
	};
})(jQuery);