/**
 * Routes for express app
 */
import passport from 'passport';
import unsupportedMessage from '../db/unsupportedMessage';
import { controllers, passport as passportConfig } from '../db';

const usersController = controllers && controllers.users;
const topicsController = controllers && controllers.topics;
const user_groupsController = controllers && controllers.user_groups;
const productsController = controllers && controllers.products;
const productCategoryController = controllers && controllers.product_category;
const orderController = controllers && controllers.orders;
const order_activeController = controllers && controllers.orders_active;
const moduleController = controllers && controllers.modules;
const module_worktimeController = controllers && controllers.module_worktime;
const clientController = controllers && controllers.clients;

export default (app) => {
    // app.all('/api/*', passport.authenticate('bearer', { session: false }));
  // user routes
  if (usersController) {
    app.post('/login', controllers.oauth);
    app.post('/signup', usersController.signUp);
    app.post('/logout', usersController.logout);
    app.delete('/api/user/remove', usersController.remove);
    app.put('/api/user/update', usersController.update);
    app.get('/api/user/all', usersController.all);
  } else { 
    console.warn(unsupportedMessage('users routes'));
  }

  if (user_groupsController) {
    app.post('/api/user_groups/add', user_groupsController.add);
    app.delete('/api/user_groups/remove', user_groupsController.remove);
    app.put('/api/user_groups/update', user_groupsController.update);
    app.get('/api/user_groups/all', user_groupsController.all);
  } else { 
    console.warn(unsupportedMessage('user_groups routes'));
  }

  if (productsController) { 
    app.post('/api/products/add', productsController.add);
    app.delete('/api/products/remove', productsController.remove);
    app.put('/api/products/update', productsController.update);
    app.get('/api/products/all', productsController.all);
  } else { 
    console.warn(unsupportedMessage('product routes'));
  }

  if (productCategoryController) {
    app.post('/api/product_category/add', productCategoryController.add);
    app.delete('/api/product_category/remove', productCategoryController.remove);
    app.put('/api/product_category/update', productCategoryController.update);
    app.get('/api/product_category/all', productCategoryController.all);
  } else {  
    console.warn(unsupportedMessage('product category routes'));
  }

  if (orderController) {
    app.post('/api/orders/add', orderController.add);
    app.delete('/api/orders/remove', orderController.remove);
    app.put('/api/orders/update', orderController.update);
    app.get('/api/orders/all', orderController.all);
  } else { 
    console.warn(unsupportedMessage('order routes'));
  }

  if (order_activeController) {
    app.post('/api/orders_active/add', order_activeController.add);
    app.post('/api/orders_active/complited', order_activeController.complited);
    app.delete('/api/orders_active/remove', order_activeController.remove);
    app.put('/api/orders_active/update', order_activeController.update);
    app.get('/api/orders_active/all', order_activeController.all);
  } else { 
    console.warn(unsupportedMessage('order active routes')); 
  }

  if (moduleController) {
    app.post('/api/modules/add', moduleController.add);
    app.delete('/api/modules/remove', moduleController.remove);
    app.put('/api/modules/update', moduleController.update);
    app.get('/api/modules/all', moduleController.all);
  } else { 
    console.warn(unsupportedMessage('modules routes')); 
  }

  if (module_worktimeController) {
    app.post('/api/module_worktime/add', module_worktimeController.add);
    app.delete('/api/module_worktime/remove', module_worktimeController.remove);
    app.put('/api/module_worktime/update', module_worktimeController.update);
    app.get('/api/module_worktime/all', module_worktimeController.all);
  } else { 
    console.warn(unsupportedMessage('module worktime routes')); 
  }

  if (clientController) {
    app.post('/api/clients/add', clientController.add);
    app.delete('/api/clients/remove', clientController.remove);
    app.put('/api/clients/update', clientController.update);
    app.get('/api/clients/all', clientController.all);
  } else { 
    console.warn(unsupportedMessage('clients routes'));  
  }

  // if (passportConfig && passportConfig.google) {
  //   // google auth
  //   // Redirect the user to Google for authentication. When complete, Google
  //   // will redirect the user back to the application at
  //   // /auth/google/return
  //   // Authentication with google requires an additional scope param, for more info go
  //   // here https://developers.google.com/identity/protocols/OpenIDConnect#scope-param
  //   app.get('/auth/google', passport.authenticate('google', {
  //     scope: [
  //       'https://www.googleapis.com/auth/userinfo.profile',
  //       'https://www.googleapis.com/auth/userinfo.email'
  //     ]
  //   }));

  //   // Google will redirect the user to this URL after authentication. Finish the
  //   // process by verifying the assertion. If valid, the user will be logged in.
  //   // Otherwise, the authentication has failed.
  //   app.get('/auth/google/callback',
  //     passport.authenticate('google', {
  //       successRedirect: '/',
  //       failureRedirect: '/login'
  //     })
  //   );
  // }

  // topic routes
  if (topicsController) {

    app.get('/api/topic', topicsController.all);
    app.post('/api/topic/:id', topicsController.add);
    app.put('/api/topic/:id', topicsController.update);
    app.delete('/api/topic/:id', topicsController.remove);
  } else {
    console.warn(unsupportedMessage('topics routes'));
  }
};

/**
 * Routes for express app

import passport from 'passport';
import unsupportedMessage from '../db/unsupportedMessage';
import { controllers, passport as passportConfig } from '../db';

const usersController = controllers && controllers.users;
const topicsController = controllers && controllers.topics;

export default (app) => {
  // user routes
  if (usersController) {
    app.post('/login', usersController.login);
    app.post('/signup', usersController.signUp);
    app.post('/logout', usersController.logout);
  } else {
    console.warn(unsupportedMessage('users routes'));
  }

  if (passportConfig && passportConfig.google) {
    // google auth
    // Redirect the user to Google for authentication. When complete, Google
    // will redirect the user back to the application at
    // /auth/google/return
    // Authentication with google requires an additional scope param, for more info go
    // here https://developers.google.com/identity/protocols/OpenIDConnect#scope-param
    app.get('/auth/google', passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    }));

    // Google will redirect the user to this URL after authentication. Finish the
    // process by verifying the assertion. If valid, the user will be logged in.
    // Otherwise, the authentication has failed.
    app.get('/auth/google/callback',
      passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
      })
    );
  }

  // topic routes
  if (topicsController) {
    app.get('/topic', topicsController.all);
    app.post('/topic/:id', topicsController.add);
    app.put('/topic/:id', topicsController.update);
    app.delete('/topic/:id', topicsController.remove);
  } else {
    console.warn(unsupportedMessage('topics routes'));
  }
};*/
