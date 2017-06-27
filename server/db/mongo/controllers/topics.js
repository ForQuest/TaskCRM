import _ from 'lodash';
import Topic from '../models/topics';

/**
 * List
 */
export function all(req, res) {
  Topic.find({}).exec((err, topics) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }
    return res.json(topics);
  });
}

/**
 * Add a Topic
 */
export function add(req, res) {
  Topic.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}

/**
 * Update a topic
 */
export function update(req, res) {
  const query = { id: req.params.id };
  const type = req.body.type;
  const isIncrement = req.body.isIncrement;
  const startDate = req.body.startDate;
  const stopDate = req.body.stopDate;
  const omitKeys = ['id', '_id', '_v', 'isIncrement'];
  const data = _.omit(req.body, omitKeys);

  switch (type) {
    case 'FULL': 
      Topic.findOneAndUpdate(query, data, (err) => {
        if (err) {
          console.log('Error on save topic ID:'+req.params.id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;
    case 'INCREMENT':
      Topic.findOneAndUpdate(query, { $inc: { count: isIncrement ? 1 : -1 } }, (err) => {
        if (err) {
          console.log('Error on save topic ID:'+req.params.id);
          return res.status(500).send('We failed to save for some reason');
        }

        return res.status(200).send('Updated successfully');
      });
    break;
    case 'START_DATE':
      Topic.findOneAndUpdate(query, {stopDate: undefined, startDate: startDate } , (err) => {
        if (err) {
          console.log('Error on save topic ID:'+req.params.id);
          return res.status(500).send('We failed to save for some reason');
        }

        return res.status(200).send('Updated successfully');
      });
    break;
    case 'STOP_DATE':
      Topic.findOneAndUpdate(query, { stopDate: stopDate }, (err) => {
        if (err) {
          console.log('Error on save topic ID:'+req.params.id);
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

/**
 * Remove a topic
 */
export function remove(req, res) {
  const query = { id: req.params.id };
  Topic.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete topic ID:'+req.params.id);
      return res.status(500).send('We failed to delete for some reason');
    }
    return res.status(200).send('Removed Successfully');
  });
}

export default {
  all,
  add,
  update,
  remove
};
