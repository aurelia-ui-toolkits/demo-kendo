/* */ 
(function(process) {
  showdown.subParser('makeMarkdown.node', function(node, globals, spansOnly) {
    'use strict';
    spansOnly = spansOnly || false;
    var txt = '';
    if (node.nodeType === 3) {
      return showdown.subParser('makeMarkdown.txt')(node, globals);
    }
    if (node.nodeType === 8) {
      return '<!--' + node.data + '-->\n\n';
    }
    if (node.nodeType !== 1) {
      return '';
    }
    var tagName = node.tagName.toLowerCase();
    switch (tagName) {
      case 'h1':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.header')(node, globals, 1) + '\n\n';
        }
        break;
      case 'h2':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.header')(node, globals, 2) + '\n\n';
        }
        break;
      case 'h3':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.header')(node, globals, 3) + '\n\n';
        }
        break;
      case 'h4':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.header')(node, globals, 4) + '\n\n';
        }
        break;
      case 'h5':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.header')(node, globals, 5) + '\n\n';
        }
        break;
      case 'h6':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.header')(node, globals, 6) + '\n\n';
        }
        break;
      case 'p':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.paragraph')(node, globals) + '\n\n';
        }
        break;
      case 'blockquote':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.blockquote')(node, globals) + '\n\n';
        }
        break;
      case 'hr':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.hr')(node, globals) + '\n\n';
        }
        break;
      case 'ol':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.list')(node, globals, 'ol') + '\n\n';
        }
        break;
      case 'ul':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.list')(node, globals, 'ul') + '\n\n';
        }
        break;
      case 'precode':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.codeBlock')(node, globals) + '\n\n';
        }
        break;
      case 'pre':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.pre')(node, globals) + '\n\n';
        }
        break;
      case 'table':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.table')(node, globals) + '\n\n';
        }
        break;
      case 'code':
        txt = showdown.subParser('makeMarkdown.codeSpan')(node, globals);
        break;
      case 'em':
      case 'i':
        txt = showdown.subParser('makeMarkdown.emphasis')(node, globals);
        break;
      case 'strong':
      case 'b':
        txt = showdown.subParser('makeMarkdown.strong')(node, globals);
        break;
      case 'del':
        txt = showdown.subParser('makeMarkdown.strikethrough')(node, globals);
        break;
      case 'a':
        txt = showdown.subParser('makeMarkdown.links')(node, globals);
        break;
      case 'img':
        txt = showdown.subParser('makeMarkdown.image')(node, globals);
        break;
      default:
        txt = node.outerHTML + '\n\n';
    }
    return txt;
  });
})(require('process'));
