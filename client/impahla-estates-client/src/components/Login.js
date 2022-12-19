import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user';
import { MessageContext } from '../context/message'


const Login = () => {

    const { user, login, signup } = useContext(UserContext)
    const { setMessage } = useContext(MessageContext)
    const [ toggle, setToggle ] = useState(false)
    const [ userObjIn, setUserObjIn ] = useState({
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
        if([userObjIn.username, userObjIn.password].some(val => val.trim() === '')) {
            setMessage({message: "You must fill in all the information please!", color: 'red'})
        }
        const didItWork = login(userObjIn)
        if (didItWork) {
            setMessage({message: 'Successfully logged in!', color: 'green'})
            // history('/home')            
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
        <div className='bg-zinc-50 h-screen w-full'>
            <br/>
            {!toggle ?
            (<div className='flex h-screen justify-center items-center'>
                <form onSubmit={handleLogin} className="bg-white border p-4 rounded-xl lg:mx-64 ">
                <h1 className='text-2xl font-bold flex items-center justify-center pb-2'> Sign In</h1>
                    <div>
                        <label className='text-lg font-light mt-2 my-2'>Username</label>
                        <input className='bg-blue-100 rounded-md ml-2' required name='username' type="text" placeholder="Enter Username"  onChange={handleChange} value={userObjIn.username}/>
                    </div>
                    <div className='pt-2'>
                        <label className='text-lg font-light mt-2 my-2'>Password</label>
                        <input className='bg-blue-100 rounded-md ml-2' required name='password' type="password" placeholder="*********"onChange={handleChange} value={userObjIn.password}/>
                        
                    </div>
                    <div className='pt-4'>
                        <input className='px-4 py-2 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-lg cursor-pointer' type="submit" value='Submit'/>
                        <label className='px-8'>Need to Sign Up?</label>
                        <button className='cursor-pointer' onClick={handleToggle}>Sign Up</button>
                    </div>
                
                </form>
            </div>) : 
            (<div className='flex h-screen justify-center items-center '>
            <form onSubmit={handleSignUp} className="bg-white border p-4 rounded-xl lg:mx-64 ">
                <h1 className='text-2xl font-bold flex items-center justify-center pb-2'> Create Accout</h1>
                <div>
                    <label className='text-lg font-light mt-2 my-2'>Username</label>
                    <input className='bg-blue-100 rounded-md ml-2' required name='username' type="text" placeholder="Enter Username"  onChange={handleSignupChange} value={userObj.username}/>
                </div>
                <div className='pt-2'>
                    <label className='text-lg font-light mt-2 my-2'>Password</label>
                    <input className='bg-blue-100 rounded-md ml-2' required name='password' type="password" placeholder="*********"onChange={handleSignupChange} value={userObj.password}/>
                    
                </div>
                <div className='pt-4'>
                    <input className='px-4 py-2 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-lg' type="submit" value='Submit'/>
                    <label className='px-8'>Need to Sign In?</label>
                    <button className='cursor-pointer' onClick={handleToggle}>Sign In</button>
                </div>
            
            </form>
        </div>)}
        </div>
    )
}

export default Login
