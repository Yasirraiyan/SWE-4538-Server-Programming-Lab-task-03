const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState('');
    const [loggedInUsers, setLoggedInUsers] = useState([]);
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const handleLogin = () => {
        if (loginUsername === '' || loginPassword === '') {
            setError('Please input username and password first');
            return;
        }

        const isValidUser = registeredUsers.some(
            (user) => user.username === loginUsername && user.password === loginPassword
        );

        if (isValidUser) {
            setError('');
            setIsLoggedIn(true);
            setLoggedInUser(loginUsername);

            if (!loggedInUsers.includes(loginUsername)) {
                setLoggedInUsers([...loggedInUsers, loginUsername]);
            }

            alert(Login successful! Welcome ${loginUsername});
        } else {
            setError('Invalid username or password');
        }
    };
 return (
        <div className="Auth" style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>{isLoggedIn ? Welcome ${loggedInUser}! : 'Register or Log In'}</h1>

<div style={{ marginBottom: '20px' }}>
                        <h2>Log In</h2>
                        <label>Username:</label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            value={loginUsername}
                            onChange={(e) => setLoginUsername(e.target.value)}
                        />
                        <br />
                        <label>Password:</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        <br />
                        <button onClick={handleLogin}>Log In</button>
                    </div>

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </>
            ) : (
