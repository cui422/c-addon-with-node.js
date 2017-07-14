# c++ addon with node.js

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the c++ addon with node.js.


## Deploying to Heroku. https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
Make sure you have a free Heroku account, Node.js and npm installed locally.


$ heroku login

$ git clone https://github.com/cui422/c-addon-with-node.js.git # or clone your own fork

$ cd c-addon-with-node.js

$ heroku create

$ git push heroku master

$ heroku ps:scale web=1

$ heroku open


or


[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)


## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [C++ Addons](https://nodejs.org/api/addons.html)