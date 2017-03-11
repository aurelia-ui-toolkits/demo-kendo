/* */ 
(function(process) {
  showdown.subParser('encodeBackslashEscapes', function(text, options, globals) {
    'use strict';
    text = globals.converter._dispatch('encodeBackslashEscapes.before', text, options, globals);
    text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
    text = text.replace(/\\([`*_{}\[\]()>#+.!~=-])/g, showdown.helper.escapeCharactersCallback);
    text = globals.converter._dispatch('encodeBackslashEscapes.after', text, options, globals);
    return text;
  });
})(require('process'));
