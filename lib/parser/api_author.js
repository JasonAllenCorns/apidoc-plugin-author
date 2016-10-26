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
