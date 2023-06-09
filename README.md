# Purina Proyecto 1 web
Proyecto 1 Sistemas y Tecnologias web

Este proyecto web utiliza una combinación de tecnologías populares para crear una interfaz de usuario atractiva y optimizada. A continuación, se detallan las tecnologías principales utilizadas y cómo se integran en el proyecto.

## Tecnologías utilizadas

- *Material-UI*: Material-UI es una biblioteca de componentes de interfaz de usuario de React basada en Material Design. Proporciona una amplia gama de componentes y estilos predefinidos que permiten crear una interfaz coherente y moderna. Para utilizar Material-UI, puedes instalarlo a través de npm y luego importar y utilizar los componentes necesarios en tu proyecto.

- *React*: React es una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y reutilizables. Proporciona una forma eficiente de actualizar y renderizar componentes en función de los cambios en los datos. React es ampliamente utilizado en el desarrollo de aplicaciones web modernas. Puedes instalar React a través de npm y comenzar a crear componentes y estructurar tu aplicación utilizando su enfoque basado en componentes.

- *npm*: npm (Node Package Manager) es el gestor de paquetes predeterminado para Node.js. Permite instalar, actualizar y administrar las dependencias del proyecto de manera sencilla. Puedes utilizar npm para instalar y administrar paquetes de terceros necesarios para tu proyecto, como Material-UI y React.

- *Vite*: Vite es un entorno de desarrollo ultrarrápido para aplicaciones web modernas. Proporciona una experiencia de desarrollo en tiempo real con tiempos de compilación rápidos y un servidor de desarrollo integrado. Vite también admite la carga de módulos rápidos (ESM) para un tiempo de carga más rápido en el navegador. Puedes configurar tu proyecto para utilizar Vite como el entorno de desarrollo y aprovechar sus características de desarrollo rápido.

- *Storybook*: Es una herramienta de código abierto que permite a los desarrolladores de interfaces de usuario (UI) crear, probar y documentar componentes de manera aislada en un entorno visualmente atractivo y fácil de usar. Con Storybook, los desarrolladores pueden crear una biblioteca de componentes reutilizables para su aplicación y ver cómo funcionan en diferentes contextos y casos de uso.

- *Eslint*: Es una herramienta de análisis de código estática que ayuda a identificar y corregir problemas de estilo y errores en el código JavaScript. ESLint es altamente personalizable y se puede configurar para cumplir con los estándares de codificación específicos de un equipo o proyecto.

## Configuración del proyecto

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias necesarias: npm install
4. Ejecuta el siguiente comando para correr la aplicacion: npm run dev

## Configuración de storybook
1. Primero, asegúrate de tener Node.js y npm instalados en tu sistema. Si no los tienes, puedes descargar Node.js desde su sitio web oficial y npm se instalará automáticamente junto con Node.js.
2. Abre la terminal y ejecuta el comando npm install --save-dev @storybook/react
3. Crea un archivo .storybook/main.js en la raíz de tu proyecto
4. Para correr el test de storybook de este proyecto ejecuta el comando npm run storybook

## Como correr eslint del proyecto
1. Abre la terminal y ubicate en la carpeta del archivo del proyecto
2. ejecuta el comando npm run lint con este comando se ejecutará eslint con las reglas propuestas.


## Jerarquía de documentos

En este repositorio, encontrarás la siguiente jerarquía de documentos:

- `index.html`: Página de inicio del proyecto.
- `css/`: Archivos que contienen los archivos de estilos CSS.
- `jsx/`: Archivos que contienen los archivos de JavaScript.
- `src/`: Carpeta que contiene los archivos fuente.
- `package.json`: Archivo de configuración de Node.js que contiene las dependencias y los scripts del proyecto.
