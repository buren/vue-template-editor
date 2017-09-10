# Example Template Editor

Example template editor written with in Vue.js.

## Template format

The template
```
Hi {username}. You've logged in {login_count} times.
```

with the data
```js
{
  username: 'buren',
  login_count: 3
}
```

yields

```
Hi buren. You've logged in 3 times.
```

:warning: For some reason the anything enclosed in `<>` will be ignored in the template.

__Screenshot__

![Form Screenshot](/screenshot.png)

## Getting started

```
$ git clone https://github.com/buren/vue-template-editor.git
$ cd vue-template-editor
$ ruby -run -e httpd . -p 8000 # Run the server
```

then open `http://localhost:8000`.
