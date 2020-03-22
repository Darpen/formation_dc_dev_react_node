<p align="center">
    <img width="200" src="react_src\src\images\moon.png">
</p>

<h1 align="center">° To Do List de l'Espace °</h1>

<div align="center">

Projet réalisé par Benjamin Peyrat et Adrien Vaccaro - DC DEV 2 - 2020.


[![](react_src\src\images\lkd-ben.png)](https://www.linkedin.com/in/benjamin-peyrat-4731a3174/)
[![](react_src\src\images\lkd-ad.png)](https://www.linkedin.com/in/adrien-vaccaro/)

</div>

[![](react_src\src\images\vue-readme.png)](/)


## ✨ Objectifs

L'objectif était de créer une application mobile utilisant la technologie MERN from scratch.
Le sujet de l'appli est la To do List, elle permettra à un chef de projet de gerer les tâches journalieres.

Nous avons mis en place:

- 🌈 Une connection utilisateur => /login.
- 📦 Une inscription => /register.
- 🛡 Une page principale qui affiche toute les taches. => /todolist.
- ⚙️ Une page description de la tache => /pastille/id.
- 🌍 Une page création de tache par l'admin => /admin.
- 🎨 Un logout qui ramene sur la page login => /logout.

## 🖥 Contenu

- Le formulaire d'administration de la To do List contient:

  - un champ titre   => text
  - un champ label    => select
  - un champ Description  => textarea
  - date de début et fin => date
  - ajout de fichier => file
  - ajout de plusieurs étapes possible => text
  - affichage de tous les collaborateurs inscrits => checkbox



## 📦 Instructions d'installation

#Windows

1. Installer NodeJS
2. Installer GitKraken
    1. Se rendre sur github.com
        1. Se connecter
        2. Fork le projet `Dylfaen/formation_dc_dev_react_node`
    1. Se connecter avec Github
    2. Cloner le projet forké sur votre compte depuis github
3. lancer la commande `npm install` dans le répertoire du projet dans `node_src/` et dans `react_src/`
4. Installer mongoDB https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
5. Lancer la commande en mode administrateur `"C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"`
6. Lancer MongoDB compass et se connecter au server mongoDB avec `mongodb://127.0.0.1:27017/?compressors=zlib&gssapiServiceName=mongodb`
7. Créer un ficher dans `node_src` nommé `config.js` contenant le code suivant 
```
module.exports = {
    mongodb: {
        url: "mongodb://127.0.0.1:27017",
    },
    port: "3001"
}
```
9. lancer `npm start` dans `react_src/` et dans `node_src/`


#Linux et MacOS
1. Installer docker et docker-compose
2. Se rendre sur github.com
    1. Se connecter
    2. Fork le projet `Dylfaen/formation_dc_dev_react_node`
3. Installer git
4. Cloner votre projet
5. Créer un ficher dans `node_src` nommé `config.js` contenant le code suivant 
```
module.exports = {
    mongodb: {
        url: "mongodb://mongo:27017",
    },
    port: "3001"
}
````

## ⌨️ Design

Nous avons utilisé Adobe Xd pour réaliser l'ensemble du Design.

<p align="left">
<a href="https://xd.adobe.com/view/5d6f2e10-05d9-4215-66e2-18bb4af23700-2b5e/?fullscreen">
    <img width="50" src="https://cdn.freebiesupply.com/logos/large/2x/adobe-xd-logo-png-transparent.png">
</a>
</p>


## 🔗 Links

- [AdVac](https://advac.fr/)


## 🤝 Remerciements

Merci à notre coach [César](https://www.linkedin.com/in/cesarfraisseix/) pour sa pédagogie et ses bons conseils.

Ben & Ad