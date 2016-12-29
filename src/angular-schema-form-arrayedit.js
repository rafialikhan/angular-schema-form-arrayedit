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
