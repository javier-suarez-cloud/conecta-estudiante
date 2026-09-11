# Conecta Estudiante

Proyecto del electivo de Angular. Es un portal donde los estudiantes pueden ver las actividades y talleres del semestre, revisar los datos de contacto y enviar una solicitud de inscripción.

La aplicación es una SPA: la cabecera y el menú quedan siempre visibles y solo cambia el contenido del centro según la opción que se elija en el menú.

## Versión

Angular 22.1.7, con componentes standalone y CSS.

## Como ejecutar el proyecto

Instalar las dependencias:

```
npm install
```

Levantar el servidor:

```
ng serve
```

Y entrar a http://localhost:4200/

Para compilar se usa `ng build`.

## Componentes

En `components/` están los dos que se mantienen fijos:

- **Cabecera**: el título y subtítulo del portal.
- **Menu**: la barra de navegación, hecha con routerLink y routerLinkActive para marcar la opción activa.

En `pages/` están las cuatro vistas:

- **Inicio**: mensaje de bienvenida.
- **Actividades**: las cuatro actividades. Están guardadas en un arreglo en el archivo .ts y se muestran en el HTML con @for e interpolación.
- **Contacto**: correo, teléfono y horario de atención.
- **Inscripcion**: el formulario reactivo.

El componente App es el que junta todo: llama a la cabecera, al menú y deja el router-outlet donde se cargan las vistas.

## Rutas

Están en `src/app/app.routes.ts` y se registran con provideRouter(routes) en `app.config.ts`.

| Ruta | Componente |
|---|---|
| `/` | redirige a inicio |
| `/inicio` | Inicio |
| `/actividades` | Actividades |
| `/contacto` | Contacto |
| `/inscripcion` | Inscripcion |
| `**` | redirige a inicio |

La última es para que cualquier dirección que no exista vuelva al inicio en vez de quedar en blanco.

## El formulario

Está hecho con ReactiveFormsModule, FormGroup, FormControl y Validators. Son siete campos:

- nombre y apellido: obligatorios y con mínimo 3 caracteres
- correo: obligatorio y con formato de correo
- carrera, actividad y jornada: obligatorios, son listas desplegables
- comentario: es el único opcional

Cuando el formulario es válido muestra un aviso de que la inscripción se registró, imprime los datos en la consola con console.log() y limpia los campos con reset(). Si está incompleto muestra otro aviso y ejecuta markAllAsTouched(), que hace que aparezcan los mensajes rojos debajo de cada campo que falta.

## Etapas

**Etapa 1 - estructura inicial.** Creé el proyecto con ng new y generé los componentes de la cabecera, el menú y las cuatro vistas.

**Etapa 2 - rutas y navegación.** Configuré las rutas, puse el router-outlet en el componente principal y armé el menú con routerLink y routerLinkActive.

**Etapa 3 - formulario de inscripción.** Hice el formulario reactivo con sus validaciones y los mensajes de error, y el listado de actividades con @for.

**Etapa 4 - estilos y readme.** Apliqué el CSS de cada componente, revisé que la navegación funcionara bien, compilé con ng build y escribí esta documentación.
