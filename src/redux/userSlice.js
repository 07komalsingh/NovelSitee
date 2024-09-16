import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure, logout } from '../redux/userSlice';

function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const handleLogin = async () => {
    dispatch(loginStart());
    try {
      // Simulate an API call for login
      const userData = await fakeLoginApi(); 
      dispatch(loginSuccess(userData));
    } catch (err) {
      dispatch(loginFailure(err.message));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message || String(error)}</p>}
      {user ? (
        <div>
          <h1>Welcome, {user.name}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
