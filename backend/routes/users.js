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
    const domain = req.body.domain;
    const github = req.body.github;
    const linkedin = req.body.linkedin;
    const resume = req.body.resume;
    const work = req.body.work;

    const newUser = new User({
        username,
        email,
        phone,
        college,
        batch,
        msc,
        domain,
        github,
        linkedin,
        resume,
        work
    });

    newUser.save()
        .then(() => {
            res.json('User Registered')
            alert('User Registered')
        })
        .catch(err => {
            res.status(400).json('Error: ' + err)
            alert(res.status(400))
        });
});

module.exports = router;