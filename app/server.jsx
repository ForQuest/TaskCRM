import pageRenderer from 'utils/pageRenderer';

export default function render(req, res) {
  res.status(200).send(pageRenderer());
}
