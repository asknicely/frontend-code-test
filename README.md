
## Intro
This repo provides a very basic REST API backend for our Todo list app, 
using [Symfony](https://symfony.com/) and [api-platform](https://api-platform.com/).
Authentication is done via [JWT](https://jwt.io/). Docker is used to provide a 
consistent dev experience.

Tasks: 
* Please read following steps to get the REST API up and running.
* Implement the frontend for the Todo list app
  * Being able to see a list of todos
  * Being able to add a todo
  * Being able to mark a todo as done
  * Being able to delete a todo
* Add pagination as you see fit
* Style the pages as you see fit
* Use **Vue** or **React** to implement the frontend. Feel free to serve the frontend
files via Symfony or Vue cli service, etc.
* Provide a PR for your work.

Note: we value PR description and commit messages a lot, so please provide meaningful 
commit messages and PR descriptions as well as testing instructions.

## Steps to get REST API ready
#### Start docker: `docker-compose up`
#### Setup tables: `docker-compose exec server php bin/console doctrine:schema:update --force`
#### Register your user: `http://localhost:8101/register`
#### View REST API docs: `http://localhost:8101/api/docs`


## Other useful things:
**rebuild image**: `docker-compose build`

**website**: http://localhost:8101/

**phpMyAdmin** http://localhost:8102/


## References:
[Scaffold docker and symfony](https://www.bornfight.com/blog/blog-lamp-docker-setup-with-php-8-and-mariadb-for-symfony-projects/)

[Rest API with Symforny and api-platform](https://digitalfortress.tech/tutorial/rest-api-with-symfony-and-api-platform/)

[api-platform using JWT](https://api-platform.com/docs/core/jwt/)

[JWT authentication with Symfony](https://digitalfortress.tech/php/jwt-authentication-with-symfony/)

**Update table schema with Doctrine**:
```
php bin/console doctrine:schema:update --dump-sql
php bin/console doctrine:schema:update --force
```

**To generate jwt keypair**:
`php bin/console lexik:jwt:generate-keypair`

**To generate user provider**:
`php bin/console make:user`

**Create migration for db changes**:
```
php bin/console make:migration
php bin/console doctrine:migrations:migrate
```

**To generate registration form**:
`php bin/console make:registration-form`

**To sync metadata storage**:
`php bin/console doctrine:migrations:sync-metadata-storage`

