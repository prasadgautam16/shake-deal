import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import axios from 'axios';


const Container = (props) => {

    const [ formData, setFormData] = useState({
        name: ''
    })

    const { name } = formData;

    const onChange = (e) => {
        return setFormData({...formData, [e.target.name]: e.target.value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const newUser = {
                name
            }

            const config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            }

            const body = JSON.stringify(newUser);

            const res =  await axios.post('api/users', body, config);

            console.log(res.data);

        } catch(err) {
            console.error(err.response.data);
        }

    }
    
    return (
        <Form onSubmit={e => onSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Name" value={name} onChange={e => onChange(e)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Container;