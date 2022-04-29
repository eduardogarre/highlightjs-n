/*
Language: Ñ
Author: Eduardo Garre <eduardo.garre@gmail.com>
Description: Lenguaje de programación Ñ
*/

module.exports = function (hljs) {
  const RESERVADAS = {
    keyword: 'vuelve|10 devuelve|10 para|10 var externo|10 público|10 privado|10 si|10 sino|10 mientras|10 no',
    literal: 'cierto|10 falso|10 nulo|10',
    built_in: 'bool ent ent8|10 ent16|10 ent32|10 ent64|10 nat nat8|10 nat16|10 nat32|10 nat64|10 real real16|10 real32|10 real64|10 txt'
  };

  const REGEX_SEQ_ESCAPE = '\\\\([\'"\\?\\\\nrt\'\"0])';
  const decimal_integer_re = '(0|[1-9][\\d_]*)';
  const decimal_integer_nosus_re = '(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)';
  const binary_integer_re = '0[bB][01_]+';

  const decimal_exponent_re = '([eE][+-]?' + decimal_integer_nosus_re + ')';
  const decimal_float_re = '(' + decimal_integer_nosus_re + '(\\.\\d*|' + decimal_exponent_re + ')|'
    + '\\d+\\.' + decimal_integer_nosus_re + '|'
    + '\\.' + decimal_integer_re + decimal_exponent_re + '?'
    + ')';

  const integer_re = '('
    + decimal_integer_re + '|'
    + binary_integer_re
    + ')';

  const float_re = '('
    + decimal_float_re
    + ')';

  const SEQ_ESCAPE = {
    begin: REGEX_SEQ_ESCAPE,
    relevance: 0
  };

  const TEXTO = {
    className: 'string',
    begin: '"',
    contains: [SEQ_ESCAPE],
    end: '"[cwd]?'
  };


  const ENTERO = {
    className: 'number',
    begin: '\\b' + integer_re + '(L|u|U|Lu|LU|uL|UL)?',
    relevance: 0
  };

  const REAL = {
    className: 'number',
    begin: '\\b('
      + float_re + '([fF]|L|i|[fF]i|Li)?|'
      + integer_re + '(i|[fF]i|Li)'
      + ')',
    relevance: 0
  };

  return {
    name: "Ñ",
    aliases: ['ñ', 'lenguaje ñ', 'lenguaje Ñ', 'Lenguaje Ñ', 'lenguaje-ñ', 'lenguaje_ñ'],
    keywords: RESERVADAS,
    contains: [
      /*{
        scope: 'string',
        begin: '"', end: '"'
      }*/
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      TEXTO,
      ENTERO,
      REAL,
      hljs.COMMENT(
        '/\\*', // begin
        '\\*/', // end
        {
          contains: [
            {
              scope: 'doc', begin: '@\\w+'
            }
          ]
        }
      )
    ],
    illegal: '</'
  }
}


