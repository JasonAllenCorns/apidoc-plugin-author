var app = {};

module.exports = {

  init: function (_app) {
    app = _app;
    // app.addHook('parser-find-elements', parserAuthorElements);
    app.parsers.apiauthor = {
      parse: parse,
      path: 'local',
      method: 'insert'
    };
  }

};

/**
 * Strip whitespace from the beginning and end of a string
 *
 * @param str string
 * @returns string
 */
var trim = function trim(str) {
  return str.replace(/^\s*|\s*$/g, '');
};

function parse(content, src) {
  content = trim(content);

  if (content.length === 0)
    return null;

  return {
    author: content
  }
}