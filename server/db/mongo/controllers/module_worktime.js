import module_worktime from '../models/module_worktime';
import _ from 'lodash';

export function all(req, res) {
  module_worktime.find({}).exec((err, modules_worktime) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }
    return res.json(modules_worktime);
  });
}

export function add(req, res) {
  module_worktime.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}

export function remove(req, res) {
  const query = { _id: req.body._id};
  module_worktime.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete module worktime ID:'+ req.body._id);
      return res.status(500).send('We failed to delete for some reason'); 
    }
    return res.status(200).send('Removed Successfully');
  }); 
}

export function update(req, res) {
  const _id = req.body._id; 
  const type = req.body.type;
  const user = req.body.user;
  const time = req.body.time;
  const omit_fields = ['_id', '_v', 'type'];

  const data = _.omit(req.body, omit_fields);

  switch (type) {

    case 'FULL': 
      module_worktime.findOneAndUpdate(_id, data, (err) => {
        if (err) { 
          console.log('Error on save module worktime:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'USER':
      module_worktime.findOneAndUpdate(_id, {user}, (err) => {
        if (err) {
          console.log('Error on save module worktime:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'TIME':
      module_worktime.findOneAndUpdate(_id, {time}, (err) => {
        if (err) {
          console.log('Error on save module worktime:'+ req.body._id);
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
