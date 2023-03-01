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
        const data = error.response.data;
        if (data.status === 401) {
            alert('로그인이 필요합니다.');
            location.href = '/login';
        }
        // 500 에러일 경우 알 수 없는
        if (data.status === 500) {
            alert('알 수 없는 에러가 발생하였습니다.');            
        }

        return error;
    });
}

export default {};
export {apiCall};