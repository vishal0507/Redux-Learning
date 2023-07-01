import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Profile = () => {
    const user = useSelector(state => state.user.value);
    const theme = useSelector(state => state.theme.value);
    if (!user.name) {
        return
    }
    return (
        <>
            <div style= {{'color':theme}}>
            <h1>Profile Info</h1>
            <h3>Name:{user.name}</h3>
            <h3>Age:{user.age}</h3>
            <h3>Email:{user.mail}</h3>
            </div >
        </>
    
  )
}

export default Profile