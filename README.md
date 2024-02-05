# Meli Products Finder

#### Notas del desarrollador:

Debido a que este proyecto se basa en un challenge técnico, se omitieron algunas buenas prácticas de desarrollo por temas de practicidad, tiempo de entrega vs tiempo disponible del dev, etc:

- Versionado en ramas, pull request y code review.
- Testing.
- CD/CI

### Approach

Para llevar a cabo este challenge front-end y según los requerimientos del doc (Mobile, SEO, SSR, performance, etc). Se ha decidio usar ReactJS con un framework SSR por defecto y orientado al SEO que es Next v14. Tambien para testear algo mas moderno usando el App Router. El maquetado se ha realizado mobile-first usando Sass.

Para algunos detalles se hizo ingenieria inversa al sitio de MercadoLibre y asi poder obtener:

- Colores (parte del doc, parte de la web).
- Fuente Proxima Nova.
- Estrategias de CSS y maquetado.

### Uso modo dev

`git clone`

`npm i`

Crear un archivo `.env.local` o configurar las siguientes variables de entorno:

```
SEARCH_API = "http://localhost:3001/api"
```

`npm run dev`
