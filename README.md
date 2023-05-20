# prueba-node

## Instalación 

- Clonar repositorio: 
    git clone https://github.com/Monky021/prueba-node.git
- Entrara a la carpeta:
    cd prueba-node
- Instalar dependencias:
    npm install

## Configurar base de datos con docker

**nota**: se asume que docker ya esta instalado y ejecutándose 
- Abrir terminal en la ruta del proyecto "prueba-node"

- Correr servicio de docker para la base de datos:
    windows: docker-compose up -d postgres
    ubuntu: sudo docker-compose up -d postgres

- Correr servicio del gestor de la base de datos:
    windows: docker-compose up -d pgadmin
    ubuntu: sudo docker-compose up -d pgadmin


## Ejecución del proyecto

- Abrir terminal en la carpeta del proyecto 

- Ejecutar compilador de typescript:
    npm run build

- Ejecutar proyecto en modo desarrollo:
    npm run dev

- Ejecutar proyecto en modo producción:
    npm start


## Documentación 

- Documentación api: https://documenter.getpostman.com/view/17847129/2s93m1b56u
- URL Producción: https://prueba-node-render.onrender.com

