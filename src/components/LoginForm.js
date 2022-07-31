

const LoginForm = ({ handleLogin, setUsername, setPassword, password, username }) => {
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={username}
                    name="Username"
                    onChange={({ target }) => setUsername(target.value)}
                />
                <input
                    type="password"
                    value={password}
                    name="Password"
                    onChange={({ target }) => setPassword(target.value)}
                />
                <button
                    type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginForm;