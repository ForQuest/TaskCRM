import User from '../models/user';
import passport from 'passport';
import _ from 'lodash';

/**
 * POST /login
 */
export function login(req, res, next) {
  // Do username and password validation for the server
  passport.authenticate('local', (authErr, user, info) => {
    if (authErr) return next(authErr);
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    // Passport exposes a login() function on req (also aliased as
    // logIn()) that can be used to establish a login session
    return req.logIn(user, (loginErr) => {
      if (loginErr) return res.status(401).json({ message: loginErr });
      return res.status(200).json({
        message: 'You have been successfully logged in.'
      });
    });
  })(req, res, next);
}

/**
 * POST /logout
 */
export function logout(req, res) {
  // Do username and password validation for the server
  req.logout();
  res.redirect('/');
}

/**
 * POST /signup
 * Create a new local account
 */
export function signUp(req, res, next) {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  User.findOne({ username: req.body.username }, (findErr, existingUser) => {
    if (existingUser) {
      return res.status(409).json({ message: 'Account with this username address already exists!' });
    }

    return user.save((saveErr) => {
      if (saveErr) return next(saveErr);
      return req.logIn(user, (loginErr) => {
        if (loginErr) return res.status(401).json({ message: loginErr });
        return res.status(200).json({
          message: 'You have been successfully logged in.'
        });
      });
    });
  });
}

export function all(req, res) {
  User.find({}).exec((err, users) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }
    return res.json(users);
  }); 
}

export function remove(req, res) {
  const query = { username: req.body.username };
  User.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete user:'+ req.body.username);
      return res.status(500).send('We failed to delete for some reason');
    }

    return res.status(200).send('Removed Successfully');
  });
}

export function update(req, res) {
  const type = req.body.type;
  const username = req.body.username;
  const password = req.body.password;
  const group = req.body.group;
  const name = req.body.name;
  const birthday = req.body.birthday;
  const avatar = req.body.avatar;
  const omit_fields = ['_id', '_v', 'type'];

  const data = _.omit(req.body, omit_fields);
  
  switch (type) {

    case 'FULL': 
      User.findOneAndUpdate(username, {data}, (err) => {
        if (err) {
          console.log('Error on save user:'+ req.body.username);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'PASSWORD': 
      User.findOneAndUpdate(username, {password}, (err) => {
        if (err) {
          console.log('Error on save user:'+ req.body.username);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'GROUP':
      User.findOneAndUpdate(username, {group}, (err) => {
        if (err) {
          console.log('Error on save user:'+ req.body.username);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'NAME':
      User.findOneAndUpdate(username, {name}, (err) => {
        if (err) {
          console.log('Error on save user:'+ req.body.username);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'BIRTHDAY':
      User.findOneAndUpdate(username, {birthday}, (err) => {
        if (err) {
          console.log('Error on save user:'+ req.body.username);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'AVATAR':
      User.findOneAndUpdate(username, {avatar}, (err) => {
        if (err) {
          console.log('Error on save user:'+ req.body.username);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;
      
    default:
      return res.status(404);
    break;
  }
}

export default {
  login,
  logout,
  signUp,
  all,
  update,
  remove
};
