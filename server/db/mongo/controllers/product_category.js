import product_category from '../models/product_category';
import _ from 'lodash';

export function all(req, res) {
  product_category.find({}).exec((err, product_categories) => {
    if (err) {
      console.log('Error in first query'); 
      return res.status(500).send('Something went wrong getting the data');
    }
    return res.json(product_categories);
  });
}

export function add(req, res) {
  product_category.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}

export function remove(req, res) {
  const query = { _id: req.body._id};
  product_category.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete product category:'+ req.body._id);
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
      product_category.findOneAndUpdate({_id}, data, (err) => {
        if (err) {
          console.log('Error on save product category:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'NAME':
      product_category.findOneAndUpdate({_id}, {name}, (err) => {
        if (err) {
          console.log('Error on save product category:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'DESC':
      product_category.findOneAndUpdate({_id}, {desc}, (err) => {
        if (err) {
          console.log('Error on save product category:'+ req.body._id);
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
