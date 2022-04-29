# Ñ - reglas de coloreado de sintaxis usando highlight.js

![license](https://badgen.net/badge/license/MIT/blue)

## Uso

Sólo tienes que incluir la biblioteca `Highlight.js` en tu página o en tu programa Node, y después añádir este módulo.

### Para páginas estáticas o cosas sencillas

Añade este módulo después de cargar `Highlight.js`. Usa la versión reducida dentro de la carpeta `dist`.

```html
<script type="text/javascript" src="/carpeta/de/highlight.min.js"></script>
<script type="text/javascript" src="/carpeta/de/ñ.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

### Para programas Node o algunos sistemas de construcción

Si usas `Node`, `Webpack`, `Rollup`, `Browserify`..., sólo tienes que requerir el módulo principal de `highlight.js`, después requiere el módulo del lenguaje, `highlightjs-n`, y finalmente registra el lenguaje en `Highlight.js`

```javascript
var hljs = require('highlight.js');
var hljsÑ = require('highlightjs-n');

hljs.registerLanguage("ñ", hljsÑ);
hljs.highlightAll();
```

## Licencia

Highlightjs-Ñ se publica bajo la licencia MIT. Consulta el archivo [LICENSE][1] para obtener más detalles.



## Enlaces

- La página oficial de la biblioteca Highlight.js es <https://highlightjs.org/>.
- El proyecto Highlight.js en GitHub: <https://github.com/highlightjs/highlight.js>
- Conoce el lenguaje Ñ: <http://lenguajeñ.com>

[1]: https://github.com/eduardogarre/highlightjs-n/blob/master/LICENSE
