import React, { useState, useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user';
import { MessageContext } from '../context/message'


const Login = () => {

    const { user, login, signup } = useContext(UserContext)
    const { setMessage } = useContext(MessageContext)
    const [ toggle, setToggle ] = useState(false)
    const[ userObjIn, setUserObjIn ] = useState({
        username: '',
        password:'',
    })
    const[ userObj, setUserObj ] = useState({
        username: '',
        password: '',
        passwordConfirmation: ''
    })

    const history = useNavigate()

    useEffect(() => {
        if (user){
            return history('/home')
        }
    }, [user, history])

    function handleToggle(){
        setToggle(!toggle)
    }

    function handleChange(e){
        setUserObjIn({
            ...userObjIn,
            [e.target.name]:e.target.value,
        })
    }

    function handleSignupChange(e){
        setUserObj({
            ...userObj,
            [e.target.name]:e.target.value,
        })
    }

    function handleLogin(e){
        e.preventDefault()
        console.log(userObjIn)
        if([userObjIn.username, userObjIn.password].some(val => val.trim() === '')) {
            setMessage({message: "You must fill in all the information please!", color: 'red'})
        }
        console.log(userObjIn)
        const didItWork = login(userObjIn)
        if (didItWork) {
            setMessage({message: 'Successfully logged in!', color: 'green'})
            history('/home')            
        }
    }

    function handleSignUp(e){
        e.preventDefault()
        if ([userObj.password, userObj.passwordConfirmation, userObj.username].some(val => val.trim() === '')) {
            setMessage({ message: 'You must fill in all information please!', color: 'red'})
        }
        const didItWork = signup({...userObj, passwordConfirmation: userObj.passwordConfirmation })
        if (didItWork) {
            setMessage({message: 'User successfully created!', color: 'green'})
            history('/home')
        }
        signup(userObj)
    }


    return (
        <div className='login-page'>
            <br/>
            {!toggle ?
            (<Form onSubmit={handleLogin}>
                <Form.Group className="mb-3 mx-2" controlId="formBasicUsername" onChange={handleChange} value={userObjIn.username}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control required name='username' type="text" placeholder="Enter Username" />
                </Form.Group>

                <Form.Group className="mb-3 mx-2" controlId="formBasicPassword" onChange={handleChange} value={userObjIn.password}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name='password' type="password" placeholder="*********"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Label>Need to Sign Up?</Form.Label>
                <Button variant="outline-primary" onClick={handleToggle}>
                    Sign Up
                </Button>
            </Form>) : 
            (<Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" onChange={handleSignupChange} value={userObj.username} required/>
                </Form.Group>

                <Form.Group className="mb-3 mx-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="*********" onChange={handleSignupChange} value={userObj.password} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Label>Need to Sign In?</Form.Label>
                <Button variant="outline-primary" onClick={handleToggle}>
                    Sign In
                </Button>
            </Form>)
            }
        </div>
    )
}

export default Login
