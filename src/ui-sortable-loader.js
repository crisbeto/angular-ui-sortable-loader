'use strict';

angular.module('ui.sortable').config(['$provide', function($provide){
    $provide.decorator('uiSortableDirective', ['$delegate', '$window', '$q', '$log', 'uiSortableConfig', 'loadDependency', function($delegate, $window, $q, $log, uiSortableConfig, loadDependency){

        var config = uiSortableConfig;

        if(!config.jQueryPath && !$window.jQuery){
            $log.error('Please specify the jQueryPath in uiSortableConfig');
        }else if(!config.jQueryUiPath){
            $log.error('Please specify the jQueryUiPath in uiSortableConfig');
        }else{
            var directive = $delegate[0];
            var link = directive.link;

            directive.compile = function(){
                return function(){
                    var args = arguments;
                    var _this = this;
                    var jqPromise = $window.jQuery ? $q.when() : loadDependency(config.jQueryPath);

                    jqPromise.then(function(){
                        loadDependency(config.jQueryUiPath).then(function(){
                            angular.element.fn = angular.element.fn || $window.jQuery.fn;
                            angular.element.fn.jquery = angular.element.fn.jquery || $window.jQuery;

                            // 0 is the scope, 1 is the element
                            args[1] = $(args[1]);
                            link.apply(_this, args);
                        });
                    });
                };
            };
        }

        return $delegate;
    }]);
}]);
