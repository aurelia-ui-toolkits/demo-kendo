/* */ 
(function(process) {
  showdown.subParser('encodeAmpsAndAngles', function(text, options, globals) {
    'use strict';
    text = globals.converter._dispatch('encodeAmpsAndAngles.before', text, options, globals);
    text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, '&amp;');
    text = text.replace(/<(?![a-z\/?$!])/gi, '&lt;');
    text = text.replace(/</g, '&lt;');
    text = text.replace(/>/g, '&gt;');
    text = globals.converter._dispatch('encodeAmpsAndAngles.after', text, options, globals);
    return text;
  });
})(require('process'));
