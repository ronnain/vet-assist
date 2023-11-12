# Start

npm i

(changer le path de la db dans .env)
npm run db:prisma-update:landing-pages-api

créer des sous domains pou l'api et le dashboard qui finissent par le nom de domain propre pour les passer en https

npm run generate:prisma-and-zod-schemas

Se connecter à l'hébergeur en ssh et faire npm i comme ça
ssh pseudo@domain

vérifier la variable env de node:
if [ -n "$DATABASE_URL_PROSPECT" ]; then
    echo "La variable d'environnement existe : $DATABASE_URL_PROSPECT"
else
    echo "La variable d'environnement n'existe pas."
fi

(essayer de créer un fichier .env et installer le package associé)
https://github.com/prisma/prisma/issues/2660#issuecomment-1096866912
prisma en prod:
mysql://user:mdp@localhost:3306/database

init prisma:
npx prisma init --url mysql://user:mdp@localhost:3306/database

cela va générer le schéma prisma / regarder sur le serveur directement et le mettre à jour
!! Créer une SHADOW_DATABASE_URL_PROSPECT à la main et lancer la variable d'env
export SHADOW_DATABASE_URL_PROSPECT="mysql://USER:MDP@localhost:3306/DB"


retour spartan
pourquoi mettre les var dans styles.scss et tailwind ?