<template>
    <div class="qna_container" v-for="item in qnaList" :key="item.id">        
        <div class="qna_box">            
            <div class="title">
                <span>Q: {{ item.title }}</span>
            </div>
            <div class="answer">
                <span>A: {{ item.answer }}</span>
            </div>
            <div class="footer">
                <div>{{ item.creationTime }}</div>
                <div>by Sangwook</div>
                <div class="icon_box">
                    <span><i class="material-icons">thumb_up</i></span>
                    <span><i class="material-icons">thumb_down</i></span>
                    <span><i class="material-icons">star</i></span>
                    <span><i class="material-icons">question_answer</i></span>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>

    export default {
        name: 'QnaView',
        data() {
            return {
                qnaList: [
                    {id: 1, title: 'how do you know that?', answer: 'I am ai model ..', creationTime: '2023-03-14'},
                    {id: 2, title: 'What should I do now?', answer: 'What\'s the problem man?', creationTime: '2023-03-14'},
                ],
            }
        }
    }

</script>


<style scoped>
    .qna_box {
        font-size: 1.3rem;
        border: 1px solid whitesmoke;
        width: 100%;
        
    }

    .qna_box .title {
        margin-bottom: 1.5rem;
    }

    .footer {
        display: flex;
        flex-direction: column;
        align-items: self-end;
    }

    .icon_box span {
        margin-right: 1rem;
    }


</style>