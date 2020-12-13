## Notre projet - partie backend

  # Titre

    Technologie Web - Projet Dash-board ING4, partie front.

  # Description du projet (but et description légèrement détaillée)

    Ce projet est un dash-board visant à donner un maximum d'informations quant à la crise sanitaire actuelle : la Covid-19. 
    Il s'agit de la partie front de notre projet.

    Il y a une toolbar et plusieurs widgets.
    Ces widgets donnent des informations et certains permettent une intéraction avec l'utilisateur. 
   
    Les widgets donnant des informations : le widget graphique qui donne le nombre de personnes détectées en tant que cas Covid-19 par test ("Confirmés"), le nombre de celles s'étant rétablis ("Rétablis") et celles étant mortes ("Mortes") depuis le début de la pandémie; les widgets Comparaison donnent l'évolution en pourcentage des Confirmés par jour, par rapport à une date ultérieure (ex : augmentation de 10% des morts/jour comparés au 20/11/20); les widgets Moteurs montrant les chiffres du graphique mais en pourcentage (ex : nombre de Confirmés en % = 100*nombre de Confirmés/nombre de personnes sur terre).
   
    Les widegts avec intéractions : le widget Articles permet de changer d'article en cliquant sur un bouton; le widget Questionnaire permet de donner des recommendations sur les comportements à avoir en focntion de l'âge et des symptômes de l'utilisateur; le widget Attestation permet de télécharger une attestation de sortie.
  # La base de données:
  MangoDB 
  # Lancer la partie backend:

    Dans la console (cmd sur le navigateur) : 

    //forké le lien du projet
    //copier adresse pc où l'utilisateur souhaite enregistrer le projet, et coller dans cmd :
    
    cd *adresse pc*
    
    //copier lien forké
    
    git clone *lien forké*
    cd *adresse pc*\PROJET_WEB_OCRES\backend
    il faut d'abord installer toutes les Depencies 
    npm install
    npm install express cors mongoose dotenv
    npm install -g nodemon
    npm install axios --save
    créer un ficher .env avec l'atlas url pour la connexion la base de données Mongodb qu'on va pas donner ici pour une question de sécurité
    
    pour lancer le serveur : nodemon server 
  
  # Comment intérargir avec l'interface ? 

    
    -la page admin permet d'ajouter/supprimer/modifier un article qui sera dans le widgets article.



  # Contributeurs

    Membres du groupe : Akram SAHRAOUI & Mathilde SAILLY - ING4 TD04A.
