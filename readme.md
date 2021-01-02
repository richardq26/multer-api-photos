# Api de notas

## Installs
npm i typescript
npx tsc --init Este es para iniciar la configuracion de typescript
Descomentar "moduleResolution": "node",   
"outDir": "./dist/",    La carpeta que va a generar                    
"rootDir": "./src/", 


Para indicar los tipos que usaremos
npm i @types/express -D
porque los tipos solo son para desarrollo

Crear carpeta nodemon.json
npm i ts-node para poder poder ejecutar nodemon con archivos ts
# Algunos módulos nuevos usados
Módulo rimraf para eliminar.
Módulo uuid genera strings aleatorios.
Módulo fs-extra permite trabajar con archivos y soporta promesas.
       fs no soporta promesas