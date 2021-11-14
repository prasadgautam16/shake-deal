'use strict';

const express = require('express');
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator');


const Task = require('../../models/Task');

// @route   POST api/tasks
// @desc    Register Task
// @access  Public
router.post('/',
    [
        check('taskContent', 'Task Content is required').not().isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            taskContent
        } = req.body;

        try {
            const task = new Task({
                taskContent
            });

            await task.save();

            const payload = {
                task: {
                    id: task.id
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