import User_group from '../models/User_groups';
import _ from 'lodash';

export function all(req, res) {
  User_group.find({}).exec((err, User_groups) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }
    return res.json(User_groups);
  });
}

export function add(req, res) {
  User_group.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}

export function remove(req, res) {
  const query = { _id: req.body._id};
  User_group.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete user group:'+req.body._id);
      return res.status(500).send('We failed to delete for some reason');
    }
    return res.status(200).send('Removed Successfully');
  });
}

export function update(req, res) {
  const _id = req.body._id;
  const type = req.body.type;
  const name = req.body.name;
  const access = req.body.access;
  const omit_fields = ['_id', '_v', 'type'];

  const data = _.omit(req.body, omit_fields);

  switch (type) {

    case 'FULL': 
      User_group.findOneAndUpdate(_id, {data}, (err) => {
        if (err) {
          console.log('Error on save user group:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'NAME':
      User_group.findOneAndUpdate(_id, { name }, (err) => {
        if (err) {
          console.log('Error on save user group:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'ACCESS':
      User_group.findOneAndUpdate(_id, {access}, (err) => {
        if (err) {
          console.log('Error on save user group:'+ req.body._id);
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
  all,
  add,
  update,
  remove
};
