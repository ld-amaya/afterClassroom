import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import UserContext from '../context/UserContext'
import Alerts from '../alert/alert';

function SignupForm() {
    const history = useHistory();
    const { signup } = useContext(UserContext);
    const [err, setErr] = useState([])
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email:''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await signup(formData);
        if (res.success) {
            history.push('/');
        } else {
            setErr(res.err)
        }
    }

    return (
        <div className='container col-md-4'>
            { err.length ? <Alerts messages = {err} type = 'danger' /> : null }
            <form onSubmit ={handleSubmit}>
                <div className='form-group'>
                    <label className='col-form-label d-flex' htmlFor='username'>Username</label>
                    <input
                        onChange = {handleChange}
                        className='form-control'
                        type='text'
                        id='username'
                        name='username'
                        value={formData.username}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label className='col-form-label d-flex' htmlFor='password'>Password</label>
                    <input
                        onChange = {handleChange}
                        className='form-control'
                        type='password'
                        id='password'
                        name='password'
                        value={formData.password}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label className='col-form-label d-flex' htmlFor='first_name'>First Name</label>
                    <input
                        onChange = {handleChange}
                        className='form-control'
                        type='text'
                        id='first_name'
                        name='first_name'
                        value={formData.first_name}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label className='col-form-label d-flex' htmlFor='last_name'>Last Name</label>
                    <input
                        onChange = {handleChange}
                        className='form-control'
                        type='text'
                        id='last_name'
                        name='last_name'
                        value={formData.last_name}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label className='col-form-label d-flex' htmlFor='email'>Email</label>
                    <input
                        onChange = {handleChange}
                        className='form-control'
                        type='text'
                        id='email'
                        name='email'
                        value={formData.email}
                        required
                    />
                </div>
                <button type='submit' className='btn btn-primary btn-sm m-2'>Register</button>
            </form>
        </div>
    )
}

export default SignupForm;