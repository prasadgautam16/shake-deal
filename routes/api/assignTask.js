'use strict';

const express = require('express');
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator');

const Task = require('../../models/Task');
const Team = require('../../models/Team');
const TeamMember = require('../../models/TeamMember');


// @route   POST api/assignTask
// @desc    Register Task
// @access  Public
router.post('/',
    [
        check('taskContent', 'Task Content is required').not().isEmpty(),
        check('team', 'Team is required').not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            taskContent,
            team
        } = req.body;

        try {
            const task = new Task({
                taskContent
            });

            await task.save();

            const teamMembers = await TeamMember.findOneAndUpdate({team: team._id, taskAllocated: null},{ taskAllocated : task}, { sort: { teamMemberPriority : 1 }, new: true });

            if (!teamMembers) {
                return res.status(404).json({
                    msg: "No Team Members Exist"
                });
            }

            console.log(teamMembers);

            res.json({
                message : `Task is allocated to ${teamMembers}`
            });
        } catch (err) {
            console.error(err.message);
            res.status(500).send("server error");
        }
    });

module.exports = router;