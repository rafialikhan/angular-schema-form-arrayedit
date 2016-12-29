angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/arrayedit/angular-schema-form-arrayedit.html","<div  class=\"schema-form-array {{form.htmlClass}}\"\n      sf-field-model=\"sf-new-array\"\n      sf-new-array>\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{ form.title }}</label>\n  <ol class=\"list-group\" sf-field-model ui-sortable=\"form.sortOptions\">\n    <li class=\"list-group-item {{form.fieldHtmlClass}}\"\n        schema-form-array-items\n        sf-field-model=\"ng-repeat\"\n        ng-repeat=\"item in $$value$$ track by $index\">\n      <button ng-hide=\"form.readonly || form.remove === null\"\n              ng-click=\"deleteFromArray($index)\"\n              ng-disabled=\"form.schema.minItems >= modelArray.length\"\n              style=\"position: relative; z-index: 20;\"\n              type=\"button\" class=\"close pull-right\">\n              <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n      </button>\n    </li>\n  </ol>\n  <div class=\"clearfix\" style=\"padding: 15px;\" ng-model=\"modelArray\" schema-validate=\"form\">\n    <div class=\"help-block\"\n         ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\n         ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n\n    <button ng-hide=\"form.readonly || form.add === null\"\n            ng-click=\"appendToArray()\"\n            ng-disabled=\"form.schema.maxItems <= modelArray.length\"\n            type=\"button\"\n            class=\"btn {{ form.style.add || \'btn-default\' }} pull-right\">\n      <i class=\"glyphicon glyphicon-plus\"></i>\n      {{ form.add || \'Add\'}}\n    </button>\n  </div>\n</div>");}]);
angular.module('schemaForm').config(
    ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
        function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

          var arrayedit = function(name, schema, options) {
            if (schema.type === 'array' && schema.format === 'arrayedit') {
              var f = schemaFormProvider.stdFormObj(name, schema, options);
              f.key  = options.path;
              f.type = 'arrayedit';
              options.lookup[sfPathProvider.stringify(options.path)] = f;
              return f;
            }
          };

          schemaFormProvider.defaults.string.unshift(arrayedit);
          //Add to the bootstrap directive
          schemaFormDecoratorsProvider.addMapping(
              'bootstrapDecorator',
              'arrayedit',
              'directives/decorators/bootstrap/arrayedit/angular-schema-form-arrayedit.html'
          );
          schemaFormDecoratorsProvider.createDirective(
              'arrayedit',
              'directives/decorators/bootstrap/arrayedit/angular-schema-form-arrayedit.html'
          );
        }
    ])
