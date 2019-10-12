const express = require('express');
const router = express.Router();
const User = require('../models/User');

//@route        GET api/users
//@description  View User Profile
//@access       PRIVATE
router.get('/', async (req, res) => {
    try {
        console.log("A search has commenced");
        const profile = await User.find({}).sort({ date: -1 });
        res.json(profile);
        console.log(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})



//@route        PUT api/user/:id
//@description  Update Profile
//@access       Private

// router.put('/', auth, async (req, res) => {
//     const { name, email, team, password } = req.body;
//     const uid = req.user.id;

//     console.log(`
//     user put body: 
//     name: ${name}
//     email: ${email}
//     team: ${team}
//     password: ${password}
//     userId: ${uid}`);

//     //build a job object

//     const proFields = {};
//     if (name) proFields.name = name;
//     if (email) proFields.email = email;
//     if (team) proFields.team = team;
//     if (password) proFields.password = password;

//     console.log(`
//     this is the proField obj that i built:
//     ${JSON.stringify(proFields)}`);

//     try {
//         let pro = await User.findById(uid);

//         if (!pro) return res.status(404).json({ msg: 'profile not found' });

//         //make sure user owns job
//         if (uid.toString() !== req.user.id) {
//             return res.status(401).json({ msg: 'Not Authorized' });
//         }
//         p = await User.findByIdAndUpdate(uid, proFields, { new: true });

//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error')
//     }

// })

module.exports = router;