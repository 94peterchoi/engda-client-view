import axios from 'axios';
import {ACCESS_TOKEN} from '@/constants/loginInfo';

const basicHeaders = {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
}

const apiCall = async (spec, parameters, customHeader) => {
    const headers = {...basicHeaders, ...customHeader}    
    return axios({
        method: spec.method,
        url: spec.url,
        data: parameters,
        headers,
    }).then((response) => {
        return response;
    }).catch((error) => {
        return error;
    });
}

export default apiCall;