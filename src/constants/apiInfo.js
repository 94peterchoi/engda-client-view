import {API_BASE_URL} from '@/constants/loginInfo';

const API_LIST = {
    GET_USER_INFO: {
        url: `${API_BASE_URL}/user/me`,
        method: 'GET',
        desc: '유저정보를 조회합니다.'
    },

    
};

export default API_LIST;

