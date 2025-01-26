import express from 'express';
import User from '../models/user.model.js'


const router = express.Router();

// Route to get all users
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) =>{
    User.findById(req.params.id)
        .then(users => {
            users.username = req.body.username;
            users.password = req.body.password;
            users.phone_number = req.body.phone_number;

            users.save()
            .then(() => res.json('User updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
        
});

// Route to add a new user
router.route('/add').post((req, res) => {
    const { username, password, phone_number } = req.body;

    const newUser = new User({
        username,
        password,
        phone_number,
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

export default router;
