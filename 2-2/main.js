requirejs.config({
    paths: {
    	jquery: 'lib/jquery'
    }
});

require(['jquery'], function ($) {
	require(['app']);

});