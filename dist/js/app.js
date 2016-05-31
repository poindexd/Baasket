function unique(e,a,n){return e?n.indexOf(e)===a:void 0}function combine(e,a){return e.concat(a)}function p(e){return function(e,a){return a?a[e]:void 0}.bind(null,e)}var baasket=angular.module("baasket",["checklist-model"]);baasket.controller("controller",["$scope","$filter",function(e,a){e.showDetail=function(a){e.selectedProduct=a,$("#detail").openModal()},e.grab=function(a,n){e.ref.child(a).on("value",function(t){e[a]=[],e.$apply(function(){angular.forEach(t.val(),function(n,t){e[a].push(n)}),console.log(e[a]),n&&n(e[a])})})},e.init=function(){e.grab("products",function(a){angular.forEach(a,function(e){e.languages&&(e.languages=e.languages.map(function(e){return e.value?e.label:void 0}).filter(unique)),e.features&&(e.features=e.features.map(p("name")))}),e.companies=e.products.map(p("company")).filter(unique).sort(),e.languages=e.products.map(p("languages")).reduce(combine).filter(unique).sort(),e.features=e.products.map(p("features")).reduce(combine).filter(unique).sort(),e.checklist=e.languages.concat(e.companies).concat(e.features),e.loaded=!0})},e.ref=new Firebase("https://webhook.firebaseio.com/buckets/baasket/01f0e387-f9ef-41f4-a29b-913ee1d576ab/dev/data"),e.loaded=!1,e.init(),e.searchFor=function(a){$(".modal-close").click(),e.search=a,$("#search input").focus()},e.values={},e.gigabyte=Math.pow(2,30),e.filters={db_storage:{text:"Database GB stored",min:"0",max:"100"}},e.cost=function(a){return a.plans?e.planCost(a.plans[0]):null},e.planCost=function(a){var n=a.cost||0;return angular.forEach(e.filters,function(t,r){null!=a[r]&&(n+=a[r+"_over"]*Math.max(e.values[r]-a[r],0))}),n},e.$watchGroup(["products","compareA","compareB"],function(){$("select").material_select()})}]),baasket.directive("slider",function(){return{restrict:"E",template:'<input type="range">',replace:!0,transclude:!0,link:function(e,a,n){a.attr("max",n.max)}}}),baasket.filter("bytes",function(){return function(e,a){if(isNaN(parseFloat(e))||!isFinite(e)||0==e)return"-";"undefined"==typeof a&&(a=1);var n=["bytes","kB","MB","GB","TB","PB"],t=Math.floor(Math.log(e)/Math.log(1024));return(e/Math.pow(1024,Math.floor(t))).toFixed(a)+" "+n[t]}}),baasket.filter("checklistFilter",function(){return function(e,a){var n=[];return angular.forEach(e,function(e){e.included=!1,angular.forEach(a,function(a){!e.included&&(e.languages&&-1!=e.languages.indexOf(a)||e.company&&-1!=e.company.indexOf(a)||e.features&&-1!=e.features.indexOf(a))&&(n.push(e),e.included=!0)})}),n}});