const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const phone = Number(req.body.phone);
    const college = req.body.college;
    const batch = Number(req.body.batch);
    const msc = req.body.msc;
    const github = req.body.github;
    const linkedin = req.body.linkedin;
    const work = req.body.work;

    const newUser = new User({
        username,
        email,
        phone,
        college,
        batch,
        msc,
        github,
        linkedin,
        work
    });

    newUser.save()
        .then(() => res.json('User Added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;