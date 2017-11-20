angular.module('schemaForm').config(
    ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
        function(schemaFormProvider, schemaFormDecoratorsProvider, sfPathProvider) {
          //Add Mapping
          schemaFormDecoratorsProvider.addMapping(
            'bootstrapDecorator',
            'array',
            'directives/decorators/bootstrap/arrayedit/angular-schema-form-arrayedit.html'
          );
        }
    ]);
