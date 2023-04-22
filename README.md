# Configuracion de Aplicacion React con vite usando npm

# Aqui las configuraciones estaran mas simplificadas 

## Empezaremos iniciando y configurando la aplicacion

**Nos colocamos en la carpeta en la que crearemos la aplicacion y ejecutaremos el comando**

    npm create vite

*Realizamos la configuracion segun nuestras necesidades, en este caso seleccionamos la opciones de react y vite javascript*

**Ahora instalamos las dependencias del proyecto**

    npm install

**Para ejecutar la aplicacion usaremos**

    npm run dev


1. **Instalaciones**


~~~
npm install prop-types 

npm install --save-dev jest babel-jest @babel/core @babel/preset-env

npm install -D @babel/preset-react @types/jest jest-environment-jsdom 

npm install --save-dev react-test-renderer

~~~ 

2. **Opcional. Si usamos Fetch API en el proyecto**

    npm install -D whatwg-fetch

3. Actualizar los scripts del **package.json**

~~~
{
  "scripts": {
    "test": "jest --watchAll"
  }
}
~~~

4. Crear la configuración de babel **babel.config.cjs**

~~~
module.exports = {
    presets: [
      ['@babel/preset-env', {targets: { esmodules: true}}],
      ['@babel/preset-react', {runtime: 'automatic'}],
    ],
  };
~~~

5. Crear la configuracion de jest config y setup  

**jest.config.cjs**

~~~
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
~~~

**jest.setup.js**

~~~
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- npm install whatwg-fetch
~~~





