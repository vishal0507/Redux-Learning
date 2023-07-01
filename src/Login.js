import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/user';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Login = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [mail, setMail] = useState("");
    const user = useSelector(state => state.user.value);
    return (
        <div>

            {!user.name && (
                <div>
                    <input value={name} onChange={(e => setName(e.target.value))}></input>
                    <br></br>
                    <input value={age} onChange={(e => setAge(e.target.value))}></input>
                    <br></br>
                    <input value={mail} onChange={(e => setMail(e.target.value))}></input>
                    <br></br>
                    { !user.name ? 
                    <button onClick={() => dispatch(login({ name, age, mail }))}>Login</button>
                    :
                    <button onClick={() => dispatch(logout())}>Logout</button>
                    }
                   
                </div>
            )};
        </div>

    )
}

export default Login