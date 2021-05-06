import { React, useState } from 'react'
import { Redirect } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {redirect, setRedirect} = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        // console.log({
            // this can be do it with one name because is the same value
            // name: name, email: email, password: password
        // })
            // const response = this is to view the response
            await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                name, email, password
            })
        });        
        // const content = await response.json();
        // console.log(content);
        setRedirect(true);
    }
    
    if (redirect) {
        return <Redirect to="/login" />; 
    }

    return (
        <form onSubmit={submit}>
        <img className="mb-4" src="" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please register</h1>
        <input type="name" className="form-control" placeholder="name" required 
            onChange={e => setName(e.target.value)}        />

        <input type="email" className="form-control" placeholder="name@example.com" required 
            onChange={e => setEmail(e.target.value)}
        />        
        <input type="password" className="form-control" placeholder="Password" required 
            onChange={e => setPassword(e.target.value)}
        />
      
        <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
      </form>
    )
}

export default Register
