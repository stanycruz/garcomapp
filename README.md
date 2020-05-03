# Garçom App

[![Cordova](https://i.ibb.co/rxn28r3/cordova-logo.png)](https://i.ibb.co/rxn28r3/cordova-logo.png)

App de pedidos para Garçons e Garçonetes.

### Tecnologia

O Garçom App usa vários projetos de código aberto para funcionar corretamente:

* [Cordova](https://cordova.apache.org/) - Mobile apps with HTML, CSS & JS.
* [Materialize](https://materializecss.com/) - A modern responsive front-end framework based on Material Design.
* [jQuery](https://jquery.com/) - jQuery is a fast, small, and feature-rich JavaScript library.
* [node.js](https://nodejs.org/) - evented I/O for the backend

### Instalação

O Garçom App requer o [Node.js](https://nodejs.org/) para executar.

Instale as dependências e inicie o servidor.

```sh
$ cd garcomapp
$ cordova platform add android
$ cordova platform add ios
```

Rodando no Android.

```sh
$ cordova run android
```

Rodando no iOS.

```sh
$ sudo npm install -g ios-sim ios-deploy
$ cordova run ios
```

### Plugins

Atualmente, o Garçom APP está estendido com os seguintes plugins.

| Plugin | README |
| ------ | ------ |
| cordova-plugin-cleartext | [plugins/cordova-plugin-cleartext][PlCl] |
| cordova-plugin-splashscreen | [plugins/cordova-plugin-splashscreen][PlSs] |
| cordova-plugin-statusbar | [plugins/cordova-plugin-statusbar][PlSb] |



   [PlCl]: <https://www.npmjs.com/package/cordova-plugin-cleartext>
   [PlSs]: <https://www.npmjs.com/package/cordova-plugin-splashscreen>
   [PlSb]: <https://www.npmjs.com/package/cordova-plugin-statusbar>
