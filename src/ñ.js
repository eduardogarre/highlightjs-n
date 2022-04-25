/*
Language: Ñ
Author: eduardo.garre@gmail.com
Description: Lenguaje Ñ
Website: http://lenguajeñ.com
*/

export default function (hljs) {
    return {
        name: "Ñ",
        keywords: {
          reservadas: 'vuelve devuelve para var externo público privado si sino mientras no',
          literales: 'cierto falso nulo',
          tipos: 'bool ent ent8 ent16 ent32 ent64 nat nat8 nat16 nat32 nat64 real real16 real32 real64 txt'
        },
        
        contains: [
            {
                scope: 'string',
                begin: '"', end: '"'
            },
            hljs.NUMBER_MODE,
            hljs.C_LINE_COMMENT,
            hljs.C_BLOCK_COMMENT_MODE
        ]
    }
}