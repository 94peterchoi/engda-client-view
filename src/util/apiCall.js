import axios from 'axios';
import {ACCESS_TOKEN} from '@/constants/loginInfo';

const basicHeaders = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
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

// 이미지 업로드는 Contet-Type을 json 쓰면 안되고 멀티파트폼데이터 써야함요
const fuckYou = 'fuck';

export default {apiCall, fuckYou};
export {apiCall, fuckYou};