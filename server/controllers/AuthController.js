import passport from 'passport';
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';
import dotenv from 'dotenv';

dotenv.config();

passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: `${process.env.URL}/auth/linkedin/callback`
}, (accessToken, refreshToken, profile, done) => {
    // Use profile information (e.g., profile.displayName) to create or update a user
    return done(null, profile);
}));

export const authLinkedin = passport.authenticate('linkedin');

export const authLinkedinCallback = passport.authenticate('linkedin', {
    failureRedirect: '/login'
}, (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
});
