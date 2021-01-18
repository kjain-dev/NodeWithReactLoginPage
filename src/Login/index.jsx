import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { useConfig } from '../Config';
import './style.css'

const LoginPage = props => {
    const [errorMessage, setError] = useState(null);

    const {
        settingsData,
        onChangeSettingsData
      } = useConfig(props);

    const handleChange = (e, key) =>{
        onChangeSettingsData(key, e.target.value);
    }

    const handleLogin = async () => {
        const response = await fetch('http://localhost:4000/authenticate', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: settingsData.username, password: settingsData.password})
          });
        const resjson = await response.json();

        if(resjson.isAuthenticated){
            setError(null);
            localStorage.setItem('username', settingsData.username);
            props.history.push('/dashboard');
        } else {
            setError('Invalid username or password');
        }

    }

    return (
        <Card className='container'>
            <CardHeader className='loginHeader' title="Candidate Login" />
            <CardContent>
            <div>
                <TextField
                error={errorMessage != null}
                fullWidth
                id="username"
                type="email"
                label="Username"
                placeholder="Username"
                value={settingsData.username}
                onChange={(e) => { handleChange(e,'username')}}
                />
                <TextField
                error={errorMessage != null}
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                value={settingsData.password}
                onChange={(e) => { handleChange(e,'password')}}
                helperText={errorMessage}
                />
            </div>
            </CardContent>
            <Button
                variant="contained"
                size="medium"
                color="primary"
                className='loginBtn'
                onClick={handleLogin}
            >
                Login
            </Button>
        </Card>
      );
  
};

export default LoginPage;
