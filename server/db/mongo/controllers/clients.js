import client from '../models/clients';
import _ from 'lodash';

export function all(req, res) {
  client.find({}).exec((err, clients) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }
    return res.json(clients);
  });
}

export function add(req, res) {
  client.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}

export function remove(req, res) {
  const query = { _id: req.body._id};
  client.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete client ID:'+ req.body._id);
      return res.status(500).send('We failed to delete for some reason'); 
    }
    return res.status(200).send('Removed Successfully');
  });
}

export function update(req, res) {
  const _id = req.body._id; 
  const type = req.body.type;
  const create_Date = req.body.create_Date;
  const phone = req.body.phone;
  const name = req.body.name;
  const birthday = req.body.birthday;
  const email = req.body.email;
  const omit_fields = ['_id', '__v', 'type'];

  const data = _.omit(req.body, omit_fields);
  
  switch (type) {

    case 'FULL': 
      client.findOneAndUpdate({_id}, data, (err) => {
        if (err) {
          console.log('Error on save client:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'CREATE_DATE': 
      client.findOneAndUpdate({_id}, {create_Date}, (err) => {
        if (err) {
          console.log('Error on save client:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'PHONE':
      client.findOneAndUpdate({_id}, {phone}, (err) => {
        if (err) {
          console.log('Error on save client:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'NAME':
      client.findOneAndUpdate({_id}, {name}, (err) => {
        if (err) {
          console.log('Error on save client:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'BIRTHDAY':
      client.findOneAndUpdate({_id}, {birthday}, (err) => {
        if (err) {
          console.log('Error on save client:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'EMAIL':
      client.findOneAndUpdate({_id}, {email}, (err) => {
        if (err) {
          console.log('Error on save client:'+ req.body._id);
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
  add,
  all,
  update,
  remove
};
