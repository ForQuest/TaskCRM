import placement from '../models/placement';
import _ from 'lodash';

export function all(req, res) {
  placement.find({}).exec((err, placements) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }
    return res.json(placements);
  });
}

export function add(req, res) {
  placement.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}

export function remove(req, res) {
  const query = { _id: req.body._id};
  placement.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete placement ID:'+ req.body._id);
      return res.status(500).send('We failed to delete for some reason'); 
    }
    return res.status(200).send('Removed Successfully');
  });
}

export function update(req, res) {
  const _id = req.body._id; 
  const type = req.body.type;
  const name = req.body.name;
  const desc = req.body.desc;
  const omit_fields = ['_id', '__v', 'type'];

  const data = _.omit(req.body, omit_fields);
  
  switch (type) {

    case 'FULL': 
      placement.findOneAndUpdate({_id}, data, (err) => {
        if (err) {
          console.log('Error on save placement:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'NAME': 
      placement.findOneAndUpdate({_id}, {name}, (err) => {
        if (err) {
          console.log('Error on save placement:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'DESC':
      placement.findOneAndUpdate({_id}, {desc}, (err) => {
        if (err) {
          console.log('Error on save placement:'+ req.body._id);
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
