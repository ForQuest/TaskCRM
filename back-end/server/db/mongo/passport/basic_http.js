import { ClientModel } from '../models/oauth';

export default (username, password, done) => {
    ClientModel.findOne({ clientId: username }, function(err, client) {
        if (err) { return done(err); }
        if (!client) { return done(null, false); }
        if (client.clientSecret != password) { return done(null, false); }

        return done(null, client);
    });
}