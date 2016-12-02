import { AccessTokenModel } from '../models/oauth';
import { expires_in } from '../constants';
import User from '../models/user';

export default (accessToken, done) => {
    AccessTokenModel.findOne({ token: accessToken }, (err, token) => {
        if (err) return done(err);
        if (!token) return done(null, false);

        if( Math.round((Date.now()-token.created)/1000) > expires_in ) {
            AccessTokenModel.remove({ token: accessToken }, function (err) {
                if (err) return done(err);
            });
            return done(null, false, { message: 'Token expired' });
        }

        User.findById(token.userId, (err, user) => {
            if (err) { return done(err); }
            if (!user) { return done(null, false, { message: 'Unknown user' }); }

            var info = { scope: '*' }
            done(null, user, info);
        });
    });
}