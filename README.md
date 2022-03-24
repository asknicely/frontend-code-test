
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
#### Install composer libs: `docker-compose exec server composer install`
#### Setup tables: `docker-compose exec server php bin/console doctrine:schema:update --force`
#### Generate JWT key pairs: `docker-compose exec server php bin/console lexik:jwt:generate-keypair`
#### Register your user: `http://localhost:8101/register`
#### Using the REST API:
* View REST API docs: `http://localhost:8101/api/docs`
* Generate a sample token by clicking the try it out section
of Token resource, provided with the user credentials you just registered.
<img width="1680" alt="Screen Shot 2022-03-24 at 1 45 31 PM" src="https://user-images.githubusercontent.com/6070516/159821422-5075e623-11d7-41f5-9398-b39ba329b1aa.png">

* Once you get a token, scroll to top of page and click on authorise
button to authorise the API, content will be `bearer YOUR_TOKEN_STRING`
<img width="1680" alt="Screen Shot 2022-03-24 at 1 43 38 PM" src="https://user-images.githubusercontent.com/6070516/159821433-2a6bb76a-efe8-4925-a84e-df539aa74a4b.png">

* Then you should be able to try out the rest of APIs on the page.


## Other useful things:
**rebuild image**: `docker-compose build`

**website**: http://localhost:8101/

**phpMyAdmin** http://localhost:8102/


## References:
[Scaffold docker and symfony](https://www.bornfight.com/blog/blog-lamp-docker-setup-with-php-8-and-mariadb-for-symfony-projects/)

[Rest API with Symforny and api-platform](https://digitalfortress.tech/tutorial/rest-api-with-symfony-and-api-platform/)

[api-platform using JWT](https://api-platform.com/docs/core/jwt/)

[JWT authentication with Symfony](https://digitalfortress.tech/php/jwt-authentication-with-symfony/)

[Auto set current User](https://symfonycasts.com/screencast/api-platform-security/entity-listener)

[Filter results for current User with Extensions](https://api-platform.com/docs/core/extensions/)

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

