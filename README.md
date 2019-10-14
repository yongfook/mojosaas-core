# Mojosaas Core

A package of css / js that I'm reusing across different projects. Made this public because Heroku doens't allow me to push private repo submodules! Plus it's just some static assets which are "publicly viewable" anyway ;)

```
git submodule add -b master https://github.com/yongfook/mojosaas-core.git
git submodule init
git submodule update --remote
cd mojosaas-core
git checkout master
```

In `app/assets/javascripts/application.js`

```
//= require_tree ../../../mojosaas-core/vendor/javascripts/
//= require_tree ../../../mojosaas-core/javascripts/
```

In `app/assets/stylesheets/application.scss`

```
 *= require_tree ../../../mojosaas-core/vendor/stylesheets/
 *= require_tree ../../../mojosaas-core/stylesheets/
```

In `config/application.rb`

```
config.assets.paths << Rails.root.join("mojosaas-core", "javascripts")
config.assets.paths << Rails.root.join("mojosaas-core", "stylesheets")
config.assets.paths << Rails.root.join("mojosaas-core", "vendor", "javascripts")
config.assets.paths << Rails.root.join("mojosaas-core", "vendor", "stylesheets")
```
