/* */ 
(function(process) {
  showdown.subParser('lists', function(text, options, globals) {
    'use strict';
    text = globals.converter._dispatch('lists.before', text, options, globals);
    function processListItems(listStr, trimTrailing) {
      globals.gListLevel++;
      listStr = listStr.replace(/\n{2,}$/, '\n');
      listStr += '¨0';
      var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
          isParagraphed = (/\n[ \t]*\n(?!¨0)/.test(listStr));
      if (options.disableForced4SpacesIndentedSublists) {
        rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
      }
      listStr = listStr.replace(rgx, function(wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
        checked = (checked && checked.trim() !== '');
        var item = showdown.subParser('outdent')(m4, options, globals),
            bulletStyle = '';
        if (taskbtn && options.tasklists) {
          bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
          item = item.replace(/^[ \t]*\[(x|X| )?]/m, function() {
            var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
            if (checked) {
              otp += ' checked';
            }
            otp += '>';
            return otp;
          });
        }
        item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(wm2) {
          return '¨A' + wm2;
        });
        if (m1 || (item.search(/\n{2,}/) > -1)) {
          item = showdown.subParser('githubCodeBlocks')(item, options, globals);
          item = showdown.subParser('blockGamut')(item, options, globals);
        } else {
          item = showdown.subParser('lists')(item, options, globals);
          item = item.replace(/\n$/, '');
          item = showdown.subParser('hashHTMLBlocks')(item, options, globals);
          item = item.replace(/\n\n+/g, '\n\n');
          item = item.replace(/\n\n/g, '¨B');
          if (isParagraphed) {
            item = showdown.subParser('paragraphs')(item, options, globals);
          } else {
            item = showdown.subParser('spanGamut')(item, options, globals);
          }
          item = item.replace(/¨B/g, '\n\n');
        }
        item = item.replace('¨A', '');
        item = '<li' + bulletStyle + '>' + item + '</li>\n';
        return item;
      });
      listStr = listStr.replace(/¨0/g, '');
      globals.gListLevel--;
      if (trimTrailing) {
        listStr = listStr.replace(/\s+$/, '');
      }
      return listStr;
    }
    function parseConsecutiveLists(list, listType, trimTrailing) {
      var olRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
          ulRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
          counterRxg = (listType === 'ul') ? olRgx : ulRgx,
          result = '';
      if (list.search(counterRxg) !== -1) {
        (function parseCL(txt) {
          var pos = txt.search(counterRxg);
          if (pos !== -1) {
            result += '\n<' + listType + '>\n' + processListItems(txt.slice(0, pos), !!trimTrailing) + '</' + listType + '>\n';
            listType = (listType === 'ul') ? 'ol' : 'ul';
            counterRxg = (listType === 'ul') ? olRgx : ulRgx;
            parseCL(txt.slice(pos));
          } else {
            result += '\n<' + listType + '>\n' + processListItems(txt, !!trimTrailing) + '</' + listType + '>\n';
          }
        })(list);
      } else {
        result = '\n<' + listType + '>\n' + processListItems(list, !!trimTrailing) + '</' + listType + '>\n';
      }
      return result;
    }
    text += '¨0';
    if (globals.gListLevel) {
      text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(wholeMatch, list, m2) {
        var listType = (m2.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
        return parseConsecutiveLists(list, listType, true);
      });
    } else {
      text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(wholeMatch, m1, list, m3) {
        var listType = (m3.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
        return parseConsecutiveLists(list, listType, false);
      });
    }
    text = text.replace(/¨0/, '');
    text = globals.converter._dispatch('lists.after', text, options, globals);
    return text;
  });
})(require('process'));
