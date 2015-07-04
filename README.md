# Angular UI Sortable Loader

Asynchronously loads jQuery and jQuery UI for use with [Angular UI Sortable](https://github.com/angular-ui/ui-sortable). jQuery and jQueryUI are only loaded once, when a `ui-sortable` directive is encountered.

Please note that this module is intended to work with `ui.sortable` and it probably won't work with any other script that depends on jQuery.

## [Demo](http://crisbeto.github.io/angular-ui-sortable-loader/)

## Install

Include Angular, [Angular UI Sortable](https://github.com/angular-ui/ui-sortable) and [ui-sortable-loader.min.js](https://raw.githubusercontent.com/crisbeto/angular-svg-round-progressbar/master/build/ui-sortable-loader.min.js) or [ui-sortable-loader.js](https://raw.githubusercontent.com/crisbeto/angular-svg-round-progressbar/master/build/ui-sortable-loader.js) in your page. You can use bower, or a script-tag:

`bower install angular-ui-sortable-loader`

or

`<script src="http://crisbeto.github.io/angular-ui-sortable-loader/ui-sortable-loader.min.js"></script>`


Afterwards you need to specify your `jQueryPath` and `jQueryUiPath` in the `uiSortableConfig` object, inside a **run** block in your app. Note that you need to have declared `ui.sortable` as a dependency:

```javascript
angular.module('someModule', ['ui.sortable']).run(['uiSortableConfig', function(uiSortableConfig){
    uiSortableConfig.jQueryPath = 'https://code.jquery.com/jquery-1.11.3.min.js';
    uiSortableConfig.jQueryUiPath = 'https://code.jquery.com/ui/1.11.4/jquery-ui.js';
}])
```

## Development

*  `npm install` to install development dependencies
*  `grunt` to build minified demo in build/
*  `grunt deploy` to build minified demo and push it to gh-pages branch


## Credits

* The awesome [ui-sortable](https://github.com/angular-ui/ui-sortable) project.
