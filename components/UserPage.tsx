import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { login, logout } from '../redux/userSlice';
import { useState } from 'react';

const UserPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    dispatch(login(username));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user.isLoggedIn ? (
        <div>
          <h1>Welcome, {user.username}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserPage;
