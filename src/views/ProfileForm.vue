<template>
    <div>
        <form @submit.prevent="submitForm">
            <input type="text" v-model="message"/>
            <button type="submit">Submit</button>
        </form>
    </div>
    <button @click="fetchData">유저미테스트</button>
</template>

<script>

    import apiCall from '@/util/apiCall.js';
    import API_LIST from '@/constants/apiInfo.js';

    console.log(API_LIST.GET_USER_INFO)

    export default {
        name: 'ProfileForm',
        data() {
            return {
                message: '',
            }
        },
        methods: {
            async submitForm() {

            },
            async fetchData() {
                const result = await apiCall({method: 'GET', url: 'http://localhost:8080/api/test'});
                if (result.status) {
                    console.log(result.data);
                } else {
                    // console.log(result.response);
                    const error = result.response.data;
                    console.log('권한에러 => ', error);                    
                    console.log('에러메세지 => ', error.message);
                }
            }
        }
    }

</script>
