'use strict';

angular.module('ui.sortable').service('loadDependency', ['$q', function($q){
    var loadedDependencies = [];

    return function(src) {
        if(!src) throw 'Please supply a valid source url';

        for(var i = 0; i < loadedDependencies.length; i++){
            if(loadedDependencies[i].src === src){
                return loadedDependencies[i].promise;
            }
        }

        var deferred = $q.defer();
        var element;
        var loadCallback = function(){
            deferred.resolve();
            angular.element(element).unbind('load', loadCallback);
        };

        loadedDependencies.push({
            src: src,
            promise: deferred.promise
        });

        element = document.createElement('script');
        element.setAttribute('src', src);

        angular.element(element).bind('load', loadCallback);
        document.getElementsByTagName('head')[0].appendChild(element);

        return deferred.promise;
    };
}]);
