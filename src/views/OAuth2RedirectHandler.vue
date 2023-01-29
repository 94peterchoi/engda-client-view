<template>
    <div>
        로그인 처리중입니다.
    </div>
</template>

<script>
    import {ACCESS_TOKEN} from '@/constants/loginInfo';

    export default {
        data() {
            return {
                location: window.location,
            }
        },
        created: function() {      
            const token = this.getUrlParameter('token');
            const error = this.getUrlParameter('error');

            if (token) {
                localStorage.setItem(ACCESS_TOKEN, token);
                this.$router.push('/');
            } else {            
                alert('로그인 처리 도중 에러 발생 => ', error);
            }            
        },

        methods: {
            getUrlParameter(name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                let results = regex.exec(this.location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            }
        }
    }
    
    
</script>


