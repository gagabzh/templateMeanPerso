# 

## Overview

Construction d'un projet utilisant Mongo, Express, Angular et Node (Mean)

### Features

Ce projet utilise les quatres élément de la mean stack et pose les premières brique d'une utilisation sans faire
appel à la cli mean.

## Quickstart

Les adresses suivante sont routées :

- localhost:3000/ : page index

- localhost:3000/mongo : vision de la base de données, construit coté serveur (ejs)
- localhost:3000/mongo/init : ajout de deux élément dans la base données
- localhost:3000/mongo/modifiy : modifie les pseudo toto en titi
- localhost:3000/supressAll/pseudo/toto : suprime les postes réaliser par toto.

- localhost:3000/angularREST : vision de la base de donnée construit coté front (angular), basé sur un appel à un point
d'entré REST

La base de données est défini dans service DB (url et nom). ce service permet les conexions

Le shema de commentaire Article est le suivant

{

 pseudo : { type : String, match: /^[a-zA-Z0-9-_]+$/ },
 
 
 contenu : String,
 
 date : { type : Date, default : Date.now 
 
 }
 