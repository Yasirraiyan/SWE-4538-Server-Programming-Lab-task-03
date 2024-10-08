function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([
    { username: 'user1', password: 'Password1!', email: 'yuia@gmail.com' },
    { username: 'user2', password: 'Password2!', email: 'abc@gmail.com' },
    { username: 'user3', password: 'Password3!', email: 'def@gmail.com' },
  ]);
const [error, setError] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    

  const handleRegister = () => {
    if (
      username === '' ||
      password === '' ||
      confirmPassword === '' ||
      
    ) {
      setError('Please fill out all fields');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long, include 1 uppercase letter, 1 number, and 1 symbol');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const isAlreadyRegistered = registeredUsers.some(
      (user) => user.username === username
    );
    if (isAlreadyRegistered) {
      setError('Username is already registered. Please log in.');
      return;
    }

    setRegisteredUsers([...registeredUsers, { username, password, anime: 'selectedAnime' }]); // Replace with your anime state variable if needed
    setError('');
    alert(`Registration successful for ${username}!`);
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };
const isValidUser = registeredUsers.some(
      (user) => user.username === loginUsername && user.password === loginPassword
    );

    if (isValidUser) {
      setError('');
      setIsLoggedIn(true);
      alert(`Login successful! Welcome ${loginUsername}`);
      // Consider adding logic to handle user being logged in (e.g., conditional rendering of different UI components)
    } else {
      setError('Invalid username or password');
    }
  };<div style={{ marginBottom: '20px' }}>
                       return (
        <div className="Auth" style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>{isLoggedIn ? Welcome ${loggedInUser}! : 'Register or Log In'}</h1>

            {!isLoggedIn ? (
                <>
                    <div style={{ marginBottom: '20px' }}>
                        <h2>Sign Up</h2>
                        <label>Username:</label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <br />
                        <label>Password:</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <br />
                        <label>Favorite Anime:</label>
                        <select
                            id="anime"
                            name="anime"
                            value={selectedAnime}
                            onChange={(e) => setSelectedAnime(e.target.value)}
                        >
                            <option value="Spirited Away">Spirited Away</option>
                            <option value="The House of Small Cubes">The House of Small Cubes</option>
                        </select>
                        <br />
                        <button onClick={handleRegister}>Register</button>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                </>
            
              
                  
