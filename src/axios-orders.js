import axios from 'axios';

const instance = axios.create({
    baseURL: "https://my-burger-builder-988b4.firebaseio.com/"
});

export default instance;