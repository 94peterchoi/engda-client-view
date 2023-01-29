<template>
    <div id="editor"></div>
    
    <button @click="addDiary">my button</button>
</template>

<script>
    import Editor from "@toast-ui/editor";
    import "@toast-ui/editor/dist/toastui-editor.css";
    import {ACCESS_TOKEN} from '@/constants/loginInfo';


    export default {
        name: 'App',
        data() {
            return {
                editor: null
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
                        console.log('블롭 => ', blob);
                        const uploadResult = await uploadImage(blob);
                        console.log('최종 이미지 URL => ', uploadResult.imageAccessUrl);
                        callback(uploadResult.imageAccessUrl, "이미지에 대한 설명");
                    }
                }
            });

            const uploadImage = async (blob) => {
                const formData = new FormData();
                formData.append('image', blob);

                let headers = new Headers();
                // headers.append('Access-Control-Allow-Origin', 'http://localhost:5173');
                // headers.append('Access-Control-Allow-Credentials', 'true');

                if(localStorage.getItem(ACCESS_TOKEN)) {
                    headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
                }

                const options = {
                    method: 'POST',
                    body: formData,
                    headers: headers,
                }

                let response = await fetch('http://localhost:8080/api/upload', options);
                let result = await response.json();

                return result;
            }

        },
        methods: {
            addDiary() {
                const content = this.editor.getHTML();
                console.log('콘텐츠 => ', content);
            },

        }

    }
</script>