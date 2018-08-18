# Mundipack Proyect

PHP & Vue based application.

## Install

### Requirements

-   PHP 7.1
-   MySQL 5.7 with JSON support

1. `git clone https://github.com/tacticstudios/mundipack.git`
2. `git submodule init`
3. `git submodule update`
4. Set database and environment variables from **.env.example** `cp .env.example .env`
5. Give permissions for storage and bootstrap/cache `sudo chgrp -R www-data storage bootstrap/cache` then `sudo chmod -R ug+rwx storage bootstrap/cache`
6. Launch follow commands :

### For Local/Development

```shell
composer install
php artisan key:generate
php artisan storage:link
php artisan migrate [--seed]
```

### For Production

```shell
# Running this on development environment will throw error so run below command only on production
composer install --no-dev --optimize-autoloader
php artisan key:generate
php artisan storage:link
php artisan migrate --force
```

### Initialize search index for posts

```shell
php artisan scout:import "App\Models\Post"
```

Laravel Scout takes care of updating posts index on CUD operations.

### Backend access

The first user to register will be automatically super admin with no restriction and will cannot be deletable.
Both frontend and backend have dedicated login pages.

## Development notes

### Compiling assets with Webpack

1. Install dependencies with `yarn`
2. Launch `yarn dev` for compiling assets and start dev-server with HMR enabled (preferred way for fast admin building)

> N1 : Use DEV_SERVER_PORT variable to configure local port of Webpack Dev Server,  
> N2 : Use DEV_SERVER_URL to configure HTTP access to Webpack Dev Server from your host, especially useful if you work on homestead/docker),  
> N3 : Use `yarn watch` if you prefer old school watcher,  
> N4 : If assets modified, don't forget to launch `yarn prod` before deploy on production environment.

### Code styling

PHP-CS-Fixer & ESLint are used for strong style guidelines for both server and client side code.

PHP is pre-configured for official Laravel styling, just launch `./vendor/bin/php-cs-fixer fix` for global project auto-formatting.

JS use [JavaScript Standard Style](https://standardjs.com/) & eslint-loader is used within webpack for dynamic code styling recommendations.  
Moreover, [Official ESLint plugin for Vue.js](https://github.com/vuejs/eslint-plugin-vue) is included for heavy consistent code through all components vue files.

## License

This project is open-sourced software licensed under the [MIT license](https://adr1enbe4udou1n.mit-license.org).
