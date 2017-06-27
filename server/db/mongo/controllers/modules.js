import module from '../models/modules';
import _ from 'lodash';

export function all(req, res) {
  module.find({}).exec((err, modules) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }
    return res.json(modules);
  });
}

export function add(req, res) {
  module.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}

export function remove(req, res) {
  const query = { _id: req.body._id};
  module.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete module ID:'+ req.body._id);
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
  const omit_fields = ['_id', '_v', 'type'];

  const data = _.omit(req.body, omit_fields);

  switch (type) {

    case 'FULL': 
      module.findOneAndUpdate({_id}, data, (err) => {
        if (err) {
          console.log('Error on save module:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'NAME':
      module.findOneAndUpdate({_id}, {name}, (err) => {
        if (err) {
          console.log('Error on save module:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'DESC':
      module.findOneAndUpdate({_id}, {desc}, (err) => {
        if (err) {
          console.log('Error on save module:'+ req.body._id);
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
