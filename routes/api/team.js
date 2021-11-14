'use strict';

const express = require('express');
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator');


const Team = require('../../models/Team');

// @route   POST api/teams
// @desc    Register Team
// @access  Public
router.post('/',
    [
        check('teamName', 'Team Name is required').not().isEmpty()
    ],
    async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const {
        teamName
    } = req.body;

    try {
        const team = new Team({
            teamName
        });

        await team.save();

        const payload = {
            team: {
                id: team.id
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

// @route       GET api/teams
// @desc        fetch all team
// @access      public
router.get('/', async (req, res) => {
    try {
        let teams = await Team.find();
        if (!teams) {
            return res.status(404).json({
                msg: "No team Exist"
            });
        }
        res.json(teams);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;