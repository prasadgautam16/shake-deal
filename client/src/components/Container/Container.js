import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import axios from 'axios';


const Container = (props) => {
    const team = ['TeamA', 'TeamB']
    const [ formData, setFormData] = useState({
        task: ''
    })

    const { task } = formData;

    const onChange = (e) => {
        return setFormData({...formData, [e.target.name]: e.target.value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {

            const task = {
                task
            }

            const config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            }

            const body = JSON.stringify(task);

            // const res =  await axios.post('api/users', body, config);

            // console.log(res.data);

        } catch(err) {
            console.error(err.response.data);
        }

    }
    
    return (
        <Form onSubmit={e => onSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter task description</Form.Label>
                <Form.Control type="text" name='task' placeholder="Enter Name" value={task} onChange={e => onChange(e)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Container;