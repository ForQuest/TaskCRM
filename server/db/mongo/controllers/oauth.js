import oauth2orize          from 'oauth2orize';
import passport             from 'passport';
import crypto               from 'crypto';
import { AccessTokenModel, RefreshTokenModel } from '../models/oauth';
import User                 from '../models/user';
import { expires_in }       from '../constants';

const server = oauth2orize.createServer();

server.exchange(oauth2orize.exchange.password( 
  (client, username, password, scope, done) => 
    User.findOne({ username: username }, (err, user) => {
        console.log('test!');
        if (err) return done(err);
        if (!user) return done(null, false, { message: 'Your email is not correct.' });
        user.comparePassword(password, (passErr, isMatch) => { if (!isMatch) return done(null, false, { message: 'Your email or password combination is not correct.' }) });

        RefreshTokenModel.remove({ userId: user.userId, clientId: client.clientId }, (err) => { if (err) return done(err) } );
        AccessTokenModel.remove({ userId: user.userId, clientId: client.clientId }, (err) => { if (err) return done(err) } );

        const tokenValue = crypto.randomBytes(32).toString('base64');
        const refreshTokenValue = crypto.randomBytes(32).toString('base64');
        const token = new AccessTokenModel({ token: tokenValue, clientId: client.clientId, userId: user.userId });
        const refreshToken = new RefreshTokenModel({ token: refreshTokenValue, clientId: client.clientId, userId: user.userId });
        refreshToken.save((err) => { if (err) return done(err) } );

        const info = { scope: '*' }
        token.save( (err, token) => {
            if (err) return done(err);
            done(null, tokenValue, refreshTokenValue, { 'expires_in': expires_in, 'message': 'SUCCESS!' });
        });
    })
));

server.exchange(oauth2orize.exchange.refreshToken( (client, refreshToken, scope, done) =>
  RefreshTokenModel.findOne({ token: refreshToken }, (err, token) => {
    if (err) return done(err);
    if (!token) return done(null, false);

    User.findById(token.userId, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false);

        RefreshTokenModel.remove({ userId: user.userId, clientId: client.clientId }, (err) => { if (err) return done(err) } );
        AccessTokenModel.remove({ userId: user.userId, clientId: client.clientId }, (err) => { if (err) return done(err) } );

        const tokenValue = crypto.randomBytes(32).toString('base64');
        const refreshTokenValue = crypto.randomBytes(32).toString('base64');
        const token = new AccessTokenModel({ token: tokenValue, clientId: client.clientId, userId: user.userId });
        const refreshToken = new RefreshTokenModel({ token: refreshTokenValue, clientId: client.clientId, userId: user.userId });
        refreshToken.save((err) => { if (err) return done(err) } );

        const info = { scope: '*' };
        token.save( (err, token) => {
            if (err) return done(err);
            done(null, tokenValue, refreshTokenValue, { 'expires_in': expires_in });
        });
    });
  })
));

export default [
    passport.authenticate(['basic', 'oauth2-client-password'], { session: false }),
    server.token(),
    server.errorHandler()
]