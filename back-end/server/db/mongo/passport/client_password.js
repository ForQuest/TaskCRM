import { ClientModel } from '../models/oauth';

export default (clientId, clientSecret, done) => {
    ClientModel.findOne({ clientId: clientId }, function(err, client) {
        if (err) { return done(err); }
        if (!client) { return done(null, false); }
        if (client.clientSecret != clientSecret) { return done(null, false); }

        return done(null, client);
    });
}