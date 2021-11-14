import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Container.css';
import { Form, Button, InputGroup, Alert } from 'react-bootstrap';
import { getAllTeam, assignTask } from '../../actions/actions';

const Container = ({ getAllTeam, assignTask, team, message }) => {
    useEffect(() => {
        getAllTeam();
    }, [getAllTeam]);

    let teamItem = '';

    if (team.length > 0) {
        teamItem = team.map((e) => {
            return (
                <span key={e._id} >
                    <InputGroup.Radio required name="teamSelected" onChange={(e) => onChange(e)} value={JSON.stringify(e)} />{e.teamName}
                </span>
            );
        });
    }

    const [formData, setFormData] = useState({
        task: '',
        teamSelected: {}
    });

    const { task } = formData;

    const onChange = (e) => {
        if (e.target.name === "teamSelected") 
            return setFormData({ ...formData, [e.target.name]: JSON.parse(e.target.value) });
        else
            return setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            assignTask(formData);
        } catch (err) {
            console.error(err.response.data);
        }
    }

    const showMessagge = {message} ? <Alert>{message}</Alert> : null;

    return (
        <>
        {showMessagge}
        <Form onSubmit={e => onSubmit(e)}>
            <Form.Group className="mb-3" >
                <Form.Label>Enter task description</Form.Label>
                <Form.Control required type="text" name='task' placeholder="Enter Name" value={task} onChange={e => onChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Select a Team</Form.Label>
                <InputGroup className="listGroup">
                    {teamItem}
                </InputGroup>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
    );
}

const mapsStateToProps = state => ({
    team: state.team,
    message: state.message
});

export default connect(mapsStateToProps, { getAllTeam, assignTask })(Container);