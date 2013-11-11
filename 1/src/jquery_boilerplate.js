(function ( $, window, document, undefined ) {

                // undefined is used here as the undefined global variable in ECMAScript 3 is
                // mutable (ie. it can be changed by someone else). undefined isn't really being
                // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
                // can no longer be modified.

                // window and document are passed through as local variable rather than global
                // as this (slightly) quickens the resolution process and can be more efficiently
                // minified (especially when both are regularly referenced in your plugin).

                // Create the defaults once
                var pluginName = "defaultPluginName1",
                	fileName = "questions.json",
                    defaults = {
                		propertyName: "initValue"
                	},
                	questions = new Object(),
                	index = 0;

                // The actual plugin constructor
                function Plugin ( element, options ) {
                                this.element = element;
                                // jQuery has an extend method which merges the contents of two or
                                // more objects, storing the result in the first object. The first object
                                // is generally empty as we don't want to alter the default options for
                                // future instances of the plugin
                                this.settings = $.extend( {}, defaults, options );
                                this._defaults = defaults;
                                this._name = pluginName;
                                this._fileName = fileName;
                                this.init();
                }

                Plugin.prototype = {
                                init: function () {
                                                // Place initialization logic here
                                                // You already have access to the DOM element and
                                                // the options via the instance, e.g. this.element
                                                // and this.settings
                                                // you can add more functions like the one below and
                                                // call them like so: this.yourOtherFunction(this.element, this.settings).
                                               
                                                console.log("xD");
                                                var allText = readTextFile(this._fileName);
                                                var obj = $.parseJSON(allText);
                                                
                                                for (var i=0;i<obj.length;i++) {
                                                	questions[i] = obj[i];                                                	
                                                }
                                                
                                },
                                
                                yourOtherFunction: function () {
                                                // some logic
                                	console.log("xDD "+questions[index].question);
                                	var text = "<div>"+(index+1)+" "+questions[index].question+"</div><div>";
                                	for (var i=0;i<questions[index].answers.length;i++) {
                                		text += "<input type='radio' name='answer' value='"+questions[index].points[i]+"'>"+questions[index].answers[i]+"<br/>";
                                	}
                                	text += "</div>";
                                	$(this.element).html(text);
                                	index++;
                                }

                };
                
                function readTextFile(file)
                {
                	var request = new XMLHttpRequest();
            		request.open("GET", file, false);
            		request.send(null);
            		var returnValue = request.responseText;

            		return returnValue;
                }

                // A really lightweight plugin wrapper around the constructor,
                // preventing against multiple instantiations
                $.fn[ pluginName ] = function ( options ) {
                                return this.each(function() {                                	
                                	if (typeof options === "string") {
                                        var args = Array.prototype.slice.call(arguments, 1),
                                            plugin = $.data(this, 'plugin_' + pluginName);
                                        plugin[options].apply(plugin, args);
                                    } else if ( !$.data( this, "plugin_" + pluginName ) ) {
                                    	$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
                                    }
                                });
                };

})( jQuery, window, document );