var optionsFilters=angular.module("optionsFilters",[]);optionsFilters.filter("alphaPercent",function(){return function(input){return 100*input+"%"}});