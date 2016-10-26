// var trim = require('trim');

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

  // @apiSchema {jsonschema=relative_path} additional_argument
  // var parseRegExp = /^\{(.+?)=(.+?)\}\s*(?:\s+(.+?))?$/g;
  // var matches = parseRegExp.exec(content);

  // if ( ! matches)
  //   return null;
  //
  // return {
  //   schema : matches[1],
  //   path : matches[2],
  //   element : matches[3] || 'apiParam'
  // };
  return {
    author: content
  }
}

/**
 * Exports
 */
module.exports = {
  parse        : parse,
  path         : 'local',
  method       : 'insert'
};
