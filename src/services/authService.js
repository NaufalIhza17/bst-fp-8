import axios from 'axios';

export const checkLoginStatus = async () => {
  try {
    const token = localStorage.getItem('authToken');

    if (!token) {
      return false;
    }

    const response = await axios.get('/api/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: false,
    });

    if (response.status === 200 && response.data) {
      console.log('User is already logged in:', response.data);
      return true;
    } else {
      console.error('Failed to verify login status:', response.data);
      return false;
    }
  } catch (error) {
    console.error('Error checking login status:', error);
    return false;
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(
      '/api/auth/login', 
      {
        username: username,
        password: password,
        expiresInMins: 30,
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );

    if (response.status === 200) {
      localStorage.setItem('authToken', response.data.token);
      console.log('Login successful:', response.data);
      return { success: true, data: response.data };
    } else {
      console.error('Login failed:', response.data);
      return { success: false, error: response.data };
    }
  } catch (error) {
    console.error('Error logging in:', error);
    return { success: false, error };
  }
};

export const logout = () => {
  localStorage.removeItem('authToken');
  console.log('User logged out');
};
