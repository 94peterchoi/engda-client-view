import {API_BASE_URL} from '@/constants/loginInfo';

const API_LIST = {
    GET_USER_INFO: {
        method: 'GET',
        url: `${API_BASE_URL}/user/me`,
        desc: '유저정보 조회'
    },
    GET_QNA: {
        method: 'GET',
        url: `${API_BASE_URL}/qna`,
        desc: 'qna 조회'
    }, 
    SAVE_POSTING: {
        method: 'POST',
        url: `${API_BASE_URL}/post/save`,
        desc: '글 등록'        
    },
    UPLOAD_IMAGE: {
        method: 'POST',
        url: `${API_BASE_URL}/api/upload`,
        desc: 'TOAST UI EDITOR 이미지 업로드'
    }

    
};

export default API_LIST;

