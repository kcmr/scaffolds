# Scaffold de componente con Polymer 3, sass, eslint y live reload

## Comandos en package.json

- `npm start`: arranca server con BrowserSync para el *live reload* usando `polymer serve` como proxy. `polymer serve` hace las transformaciones necesarias en las rutas de los módulos (*named imports*) para que funcionen en un navegador. El nombre del componente y la ruta se leen del package.json de los campos `main` y `name` respectivamente.
- `npm test`: construye la versión dist y ejecuta wct. El `wct.conf.js` del proyecto está configurado para que se use istanbul como plugin (*coverage*).
- `npm run lint:javascript`: hace linteo y arregla los errores arreglables automáticamente con el flag `--fix`.

### Tareas que se ejecutan al servir el componente con `npm start` de forma continua (*watch*)

- Compilado de scss.
- Conversión de px a rem.
- Autoprefixer.
- Eslint.
- **Inline de estilos**: los estilos importados mediante `<link rel="stylesheet" href="estilos.css" inline>` se transforman en una etiqueta `<style>` en la versión dist. Se puede usar en la etiqueta `<link>` un atributo `include` con el ID del style module a incluir o se pueden incluir etiquetas `<link>` adicionales antes o después de los estilos principales del componente para incluir otros estilos compartidos. La ventaja de tener los estilos en una etiqueta `<style>` dentro del componente es que se hace una petición menos.
- *Live reload*.

### Personalización de build config

La configuración de build se puede personalizar en el archivo `buildconfig.js`. Por ejemplo, si fuera necesario hacer watch de carpetas adicionales, se podrían especificar dentro de `watch.dist`:

```js
watch: {
  dist: [
    'some-extra-folder',
  ],
},
```

## Cosas "raras"

Se incluye el archivo de configuración del *workspace* de VS Code con un `configFile` para eslint vacío simplemente para forzar a que se use el `.eslintrc.json` del proyecto en lugar de cualquier otro que se tenga establecido globalmente.
