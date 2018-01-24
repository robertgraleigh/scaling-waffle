// initialize.js
/* jshint esversion: 6 */

/*
  import brunch package npm dependencies below
  use either the import or require syntax
  import 'package folder name in node_modules';
  require(package folder name in node_modules'');
*/
import 'jquery';
import 'semantic-ui-sass';

//
$(function () {
  document.addEventListener('DOMContentLoaded', function() {
    // do your setup here
    console.log('Initialized brunch app');
  });
}());
