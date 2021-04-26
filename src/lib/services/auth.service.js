import axios from 'axios';

class AuthService {
  login = async (userDto) => {
    const { email, password } = userDto;
    const data = await axios.post('http://localhost:3080', { email, password });
    return data;
  };
}

export default new AuthService();
