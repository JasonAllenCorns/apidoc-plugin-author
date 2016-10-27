# apidoc-plugin-author
Generates an [apiDoc](https://github.com/apidoc/apidoc) plugin for listing endpoint author.

## How to install
As an extension of [apiDoc](https://github.com/apidoc/apidoc), first install at least [apiDoc-core](https://github.com/apidoc/apidoc-core).

This plugin, as with all apiDoc plugins named as `apidoc-plugin-*`, can be installed locally or globally alongside the `apidoc-core`. Run either `npm install apidoc-plugin-author` or `npm install -g apidoc-plugin-author`.

## Getting started
As the author of API endpoints, looking for a way to start documentation and actually maintain it, [apiDoc](https://github.com/apidoc/apidoc) is a great way to go.  Those who are new to the syntax of apiDoc should thoroughly read the associated [documentation](http://apidocjs.com/).  Once familiar with the general syntax, add something similar to the following, to include the `author` field then the generated documentation.
```js
/**
* @apiAuthor Jason Corns <JasonAllenCorns@users.noreply.github.com>
**/
```

The generated `api_data.json` should now include a block like
``` json
{
    "author": "Jason Corns <JasonAllenCorns@users.noreply.github.com>"
}
```

### Wait, that didn't show up!
[apiDoc](https://github.com/apidoc/apidoc) has a dependency on [apiDoc-core](https://github.com/apidoc/apidoc-core) to generate documentation sites.  `apiDoc` is the visual wrapper and includes the template for the generated doc site.  In order to add the `author` field - or any other custom plugin field - the template must be updated to include references to the new field.

For example, fork the [apiDoc](https://github.com/apidoc/apidoc) and modify the [`template-article`](https://github.com/apidoc/apidoc/blob/7382ed049b805201e8253cbb03810065f301dbd8/template/index.html#L99-L104) block to add something like the following:
``` handlebars
{{#if article.author}}<h4 class="muted">Authored by: {{article.author}}</h4>{{/if}}
```

With this modification, and after updating the root project's dependency on apiDoc to the modified fork, a new line will appear below the article title, like
``` html
<h4 class="muted">Authored by: Jason Corns &lt;JasonAllenCorns@users.noreply.github.com&gt;</h4>
```

## Notes and known limitations

 - The `author` field, like all `api___` fields, are passed the lines containing the `@apiAuthor` mark and all lines thereafter up to either another `api_____` mark or the end of the content block.  The content includes the newline mark(s) as a consolidated string.  Issue #4 will cover this case.
 - The `author` field is, for now, a singular field.  Multiple `author` listings will show only a single value, as a "last-in-wins" value.