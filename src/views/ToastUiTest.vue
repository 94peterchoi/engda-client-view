<template>
    <div class="form_container">
        <textarea id="title" v-model="title" placeholder=""></textarea>
        <label for="first_category">first category</label>
        <select id="first_category" v-model="firstCategory">
            <option value="all" selected>all</option>
            <option value="english" selected>english</option>
            <option value="coding" selected>coding</option>
        </select>
        
        <label for="second_category">second category</label>
        <select id="second_category" v-model="secondCategory">
            <option value="all" selected>all</option>
        </select>

        <div id="editor"></div>    
        <button @click="printDiary">콘텐츠 콘솔에 출력테스트</button>
        <button @click="addDiary">등록하기</button>
    </div>

</template>

<script>
    import Editor from "@toast-ui/editor";
    import "@toast-ui/editor/dist/toastui-editor.css";
    import {apiCall} from '@/util/apiCall.js';
    import API_LIST from '@/constants/apiInfo.js';

    export default {
        name: 'App',
        data() {
            return {
                editor: null,
                title: '',
                firstCategory: 'all',
                secondCategory: 'all',            
                content: '',
            }
        },
        mounted() {
            this.editor = new Editor({
                el: document.querySelector('#editor'),
                height: "500px",
                initialEditType: "wysiwyg",
                // previewStyle: 'vertical',
                hooks: {
                    addImageBlobHook: async (blob, callback) => {
                        const uploadResult = await uploadImage(blob);
                        if (uploadResult.status === 200) {
                            const data = uploadResult.data;
                            callback(data.imageAccessUrl, "");
                        } else {
                            alert('원격서버 이미지 업로드에 실패하였습니다.');
                        }
                    }
                }
            });

            const uploadImage = async (blob) => {
                const formData = new FormData();
                formData.append('image', blob);            
                const headers = {
                    'Content-Type': 'multipart/form-data',
                }

                const response = await apiCall(API_LIST.UPLOAD_IMAGE, formData, headers);
                return response;
            }

        },
        methods: {
            printDiary() {
                const content = this.editor.getHTML();
                console.log('콘텐츠 => ', content);
            },
            async addDiary() {                
                this.content = this.editor.getHTML();                
                if (confirm('글을 등록하시겠습니까?')) {
                    
                    const params = {
                        title: this.title,
                        firstCategory: this.firstCategory,
                        secondCategory: this.secondCategory,
                        content: this.content,
                    }
                    const result = await apiCall(API_LIST.SAVE_POSTING, params);
                    
                }
                
            }

        }

    }
</script>

<style scoped>
    .form_container {
        display: flex;
        flex-direction: column;
    }

</style>