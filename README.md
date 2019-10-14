# mojosaas-core

```
git submodule add -b master https://github.com/yongfook/mojosaas-core.git
git submodule init
git submodule update --remote
cd mojosaas-core
git checkout master
```

In `app/assets/javascripts/application.js`

```
//= require_tree ../../../mojosaas-core/javascripts/
//= require_tree ../../../mojosaas-core/vendor/javascripts/
```

In `app/assets/stylesheets/application.scss`

```
 *= require_tree ../../../vendor/assets/stylesheets/
 *= require_tree ../../../vendor/assets/vendor/stylesheets/
```
