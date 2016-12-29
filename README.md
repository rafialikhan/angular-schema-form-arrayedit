# angular-schema-form-arrayedit
An [angular schema form](https://github.com/json-schema-form/angular-schema-form) - [plugin](https://github.com/json-schema-form/angular-schema-form/blob/development/docs/extending.md) to display array data with Editable text.

Installation
------------

The easiest way is to install is with bower, this will also include dependencies:
```bash
bower install angular-schema-form-arrayedit
```

The arrayedit add-on adds a new form type, `arrayedit`.

|   Form Type    |       Becomes       |
|:---------------|:-------------------:|
|   arrayedit     |  Editable Array   |

| Schema             |   Default Form type  |
|:-------------------|:------------:|
| "type": "string" and "format": "arrayedit"   |   arrayedit   |

Example
-----------------
Below is an example. It's written in javascript instead of pure schema and form so the use of the arrayedit object is supported.

```javascript
scope.schema = {
  "type": "object",
  "title": "Comment",
  "required": [
    "comments"
  ],
  "properties": {
    "comments": {
      "type": "array",
      "maxItems": 2,
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "title": "Name",
            "type": "string"
          },
          "email": {
            "title": "Email",
            "type": "string",
            "pattern": "^\\S+@\\S+$",
            "description": "Email will be used for evil."
          },
          "spam": {
            "title": "Spam",
            "type": "boolean",
            "default": true
          },
          "comment": {
            "title": "Comment",
            "type": "string",
            "maxLength": 20,
            "validationMessage": "Don't be greedy!"
          }
        },
        "required": [
          "name",
          "comment"
        ]
      }
    }
  }
}
```
The schema should be able to render the form on its own, but if you want to modify or add a button using the form, then the structure is below.

```
scope.form = [
  {
    "key": "comments",
    "add": "New",
    "style": {
      "add": "btn-success"
    },
    "items": [
      "comments[].name",
      "comments[].email",
      {
        "key": "comments[].spam",
        "type": "checkbox",
        "title": "Yes I want spam.",
        "condition": "model.comments[arrayIndex].email"
      },
      {
        "key": "comments[].comment",
        "type": "textarea"
      }
    ]
  }
]
```
