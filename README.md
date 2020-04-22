# Blockchain CLI

CLI (Command Line Interface) para realizar peticiones HTTP a los nodos de una red descentralizada (blockchain).

## Índice

1. [Estructura del proyecto](#estructura-del-proyecto)
2. [Comandos](#comandos)
    - [`btc blockchain`](#btc-blockchain)
    - [`btc transaction`](#btc-transaction)
    - [`btc mine`](#btc-mine)
    - [`btc search`](#btc-search)
        - [`transaction`](#transaction)
        - [`address`](#address)
        - [`block`](#block)
3. [Librerías utilizadas](#librerías-utilizadas)

## Estructura del proyecto

    .
    ├── node_modules                        # código de las librerías descargadas
    ├── bin                                 # 
    │   ├── btc-blockchain.js               # controlador del comando blockchain
    │   ├── btc-search.js                   # controlador del comando search
    |   ├── btc-transaction.js              # controlador del comando transaction
    │   └── btc.js                          # controlador del comando principal
    ├── commmands                           # 
    │   ├── blockchain.js                   # lógica del comando blockchain
    │   ├── mine.js                         # lógica del comando mine
    |   ├── search.js                       # lógica del comando search
    │   └── transaction.js                  # lógica del comando transacción
    ├── lib                                 
    │   ├── transaction.model.js            # modelo de transacción 
    │   └── utils.js                        # funciones de utilidad general
    └── package.json                        # archivo de configuración

## Comandos


- ## `btc blockchain`

    Nos permite obtener el estado actual de la cadena de bloques, pudiendo observar los bloques que se han ido añadiendo y sus transacciones. Además, se podrán observar las transacciones que están a la espera de ser introducidas en el siguuiente bloque, la recompensa actual por minado y la dificultad establecida para dicha tarea.

- ## `btc transaction`

    Nos permite realizar una transacción en la cadena de bloques. Se require la dirección pública de emisor y receptor, así como la cantidad de monedas a enviar y la firma del autor.


- ## `btc mine`

    Permite comunicar a uno de los nodos de la blockchain que ejecute la función de minado que permitirá la creación de un nuevo bloque dando lugar a la introducción de las transacciones pendientes en dicho bloque.

- ## `btc search`

    - ### `transaction`
        Busca transacciones en la blockchain mediante el identificador de la transacción. Cuando la encuentra la muestra en la consola, de lo contrario, nos dirá que no se ha encontrado.

    - ### `address`
        Muestra el saldo de la dirección que se ha especificado.

    - ### `block`
        Muestra el bloque con el hash que hemos especificado. Si no existe, se mostrará un mensaje de error. 

## Librerías utilizadas

- ## **axios**
  - Descripción: Cliente HTTP basado en promesas para el navegador y node.js
  - Características:
    - Hacer XMLHttpRequests desde el navegador
    - Hacer solicitudes http desde node.js
    - Admite la API Promise
    - Solicitud de intercepción y respuesta
    - Transformar datos de solicitud y respuesta
    - Cancelar solicitudes
    - Transformaciones automáticas para datos JSON
    - Soporte del lado del cliente para proteger contra XSRF
  - Instalación: `npm install --save axios`
  - Página principal: https://github.com/axios/axios

- ## **sha256**
  - Descripción: Componente JavaScript para calcular el SHA256 de cadenas de texto o bytes.
  - Instalación: `npm install --save sha256`
  - Página principal: https://github.com/cryptocoinjs/sha256

- ## **elliptic**
  - Descripción: Criptografía rápida de curva elíptica en una implementación simple de javascript.
  - Instalación: `npm install --save elliptic`
  - Página principal: https://github.com/indutny/elliptic

- ## **uuid**
  - Descripción: Para la creación de RFC4122 UUID
  - Instalación: `npm install --save uuid`
  - Página principal: https://github.com/uuidjs/uuid

- ## **chalk**
  - Descripción: Da estilo a cadenas de texto en el terminal
  - Instalación: `npm install --save chalk`
  - Página principal: https://github.com/chalk/chalk

- ## **commander**
  - Descripción: La solución completa para las interfaces de línea de comandos de node.js
  - Instalación: `npm install --save commander`
  - Página principal: https://github.com/tj/commander.js

- ## **figlet**
  - Descripción: Crea arte ASCII a partir del texto 
  - Instalación: `npm install --save figlet`
  - Página principal: https://github.com/patorjk/figlet.js

- ## **inquirer**
  - Descripción: Una colección de interfaces de usuario de línea de comandos interactivos comunes
  - Instalación: `npm install --save inquirer`
  - Página principal: https://github.com/SBoudrias/Inquirer.js

- ## **opn**
  - Descripción: 
  - Instalación: 
  - Página principal:

- ## **update-notifier**
  - Descripción: Notifica de las actualizaciones de la aplicación CLI
  - Instalación: `npm install --save update-notifier`
  - Página principal: https://github.com/yeoman/update-notifier

## Setup del proyecto

### Requisitos: tener instalado Node.js y git.

1. Clonar el repositorio: 

    ```git clone https://github.com/miguelleonmarti/bitcoin-cli.git```

2. Instalar las dependecias: 

    ```npm install```

