import axios from 'axios';
import {ACCESS_TOKEN} from '@/constants/loginInfo';

let headers = {
    'Content-Type': 'application/json',
}

const apiCall = async (spec, parameters, customHeaders) => {

    if (customHeaders) {
        headers = {...customHeaders};    
    }
    headers.Authorization = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN);

    return axios({
        method: spec.method,
        url: spec.url,
        data: parameters,
        headers
    }).then((response) => {
        return response;
    }).catch((error) => {
        return error;
    });
}

export default {};
export {apiCall};