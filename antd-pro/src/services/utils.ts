const devBaseURL = 'http://localhost:3002/api';
const proBaseURL = 'http://www.lmwebs.top:3002/api';


export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 10000;

export const GitHubInfo_redirect_url = window.location.host;

export const GitHubInfo_client_id = 
    process.env.NODE_ENV === 'development' ? "fb5cb7e12e953b2eec42" : "e2a1eaa9cf8f58c79077";

