'use strict';

const express = require('express');
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator');

const Team = require('../../models/Team');
const TeamMember = require('../../models/TeamMember');

// @route   POST api/teamMembers
// @desc    Register TeamMember
// @access  Public
router.post('/',
    [
        check('teamMemberName', 'Team Member Name is required').not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const PRIPORITY = ['1', '2', '3'];

        const {
            teamMemberName,
        } = req.body;

        try {
            let teams = await Team.find();

            const teamMember = new TeamMember({
                teamMemberName,
                teamMemberPriority : PRIPORITY[Math.floor(Math.random()*PRIPORITY.length)],
                team : teams[Math.floor(Math.random()*teams.length)]._id
            });

            await teamMember.save();

            const payload = {
                teamMember: {
                    id: teamMember.id
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

// @route       GET api/teamMembers
// @desc        fetch all Team Members
// @access      public
router.get('/', async (req, res) => {
    try {
        let teamMembers = await TeamMember.find();
        if (!teamMembers) {
            return res.status(404).json({
                msg: "No team Exist"
            });
        }
        res.json(teamMembers);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;