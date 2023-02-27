import axios from 'axios';
import {ACCESS_TOKEN} from '@/constants/loginInfo';

const basicHeader = {
    'Content-Type': 'application/json',
}

const multiPartHeaders = {
    'Content-Type': 'multipart/form-data',
}

const apiCall = async (spec, parameters, customHeader) => {
    basicHeader.Authorization = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN); 

    const headers = {...basicHeader, ...customHeader};
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

const multiPartApiCall = async (spec, parameters, customHeader) => {
    multiPartHeaders.Authorization = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN); 
    console.log('멀파헤 => ', multiPartHeaders);

    const headers = {...multiPartHeaders, ...customHeader};
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

export default {};
export {apiCall, multiPartApiCall};