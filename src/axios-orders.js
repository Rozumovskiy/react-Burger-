import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-burger-9bc23.firebaseio.com/'
});

export default instance;