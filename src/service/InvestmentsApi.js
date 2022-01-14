import axios from 'axios';

const API = axios.create({
    baseURL: 'http://poupeme-env.eba-mmm4vsiv.us-east-2.elasticbeanstalk.com/'
});

export default API;