import express from 'express';
import config from "../config.mjs";
import userService from '../services/User.service.mjs';
import jwtService from '../services/JWT.service.mjs';
import roleService from '../services/Role.service.mjs';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('start');
});

router.get('/register', async (req, res) => {
    const roles = await roleService.findAll();

    res.render('register', {roles: roles});
});

router.post('/register', async (req, res) => {
    if (!req.body) {
        res.status(400).send({code: 400, error: 'Error registration'});
    }
    console.log(req.body);
    const {name, email, password, roleId} = req.body;
    const newUser = await userService.addUser({name, email, password, roleId: +roleId});
    if (!newUser) {
        res.status(400).send({code: 400, error: 'Error'});
    }
    const token = await jwtService.generateToken(newUser.toJSON());
    res.redirect('/profile?token=' + token);
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        const user = await userService.findUserByEmail(email);
        if (!user) {
            res.send({code: 400, error: 'User is not found'});
        }
        if (user.dataValues.password === password) {
            const token = await jwtService.generateToken(user.toJSON(), config.secretKey);
            res.redirect('/profile?token=' + token);
        } else {
            res.send({ code: 400, error: 'Incorrect' });
        }
    }
});

// router.delete('/logout', async (req, res) => {
//     const {user, cookies: {auth_token: authToken}} = req;
//
//     if (user && authToken) {
//         await req.user.logout(authToken);
//         return res.send({code: 204});
//     }
//
//     return res.status(400).send({errors: [{message: 'not authenticated'}]});
// });

export default router;
