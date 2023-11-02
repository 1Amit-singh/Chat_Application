import axios from "axios";
import React from 'react'

const ChatPage = (props) => {
    const onSubmit = (e) =>{
        e.preventDefault();
        const { value } = e.target[0];
        axios.post(
            "http://localhost:3000/authenticate",
            {username: value}
        ).then( r => props.onAuth({...r.data, secret: value}) )
        .catch( e => console.log("error", e) )
    }
  return (
    <div>
        <form onSubmit={onSubmit} className='form-card'>
            <div className='form-title'>Welcome</div>

            <div className="form-subtitle">Set a username to get started</div>

            <div className="auth">
                <div className="auth-label">Username</div>
                <input type="text" name='username' className="auth-input" />
                <button className="auth-button" type="submit" >Enter</button>
            </div>
        </form>
    </div>
  )
}

export default ChatPage