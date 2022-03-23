start docker: docker-compose up
rebuild image: docker-compose build

website: http://localhost:8101/

phpMyAdmin http://localhost:8102/

use following to scalfold docker and symfony
https://www.bornfight.com/blog/blog-lamp-docker-setup-with-php-8-and-mariadb-for-symfony-projects/


creating apis
https://digitalfortress.tech/tutorial/rest-api-with-symfony-and-api-platform/
php ./bin/console doctrine:database:create
php bin/console doctrine:schema:update --dump-sql
php bin/console doctrine:schema:update --force

to generate jwt keypair
php bin/console lexik:jwt:generate-keypair

to generate user provider
php bin/console make:user

https://api-platform.com/docs/core/jwt/

