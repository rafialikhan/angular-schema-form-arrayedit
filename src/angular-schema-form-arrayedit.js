angular.module('schemaForm').config(
    ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider', 'sfBuilderProvider',
        function(schemaFormProvider, schemaFormDecoratorsProvider,
         sfPathProvider, sfBuilderProvider) {
          //Add Mapping
          schemaFormDecoratorsProvider.addMapping(
            'bootstrapDecorator',
            'array',
            'directives/decorators/bootstrap/arrayedit/angular-schema-form-arrayedit.html'
          );
        }
    ]);
