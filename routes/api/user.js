'use strict';

const express = require('express');
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator');


const User = require('../../models/User');

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post('/',
    [
        check('name', 'Name is required').not().isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            name
        } = req.body;

        try {
            const user = new User({
                name
            });

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            }
            res.json({
                ...payload
            });
        } catch (err) {
            console.error(err.message);
            res.status(500).send("server error");
        }
    });

module.exports = router;