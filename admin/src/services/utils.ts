const devBaseURL = 'http://localhost:3002/api';
const proBaseURL = 'http://www.lmwebs.top:3002/api';


export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 10000;

