<template>
    <div class="sidenav">
        <ul>
            <li v-for="item in categories" :key="item.categoryId">
                {{ item.categoryName }}
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'SideNav',
        data() {
            return {
                categories: [
                    {categoryId: 1, categoryName: 'all'},
                    {categoryId: 2, categoryName: 'english'},
                    {categoryId: 3, categoryName: 'coding'},
                    {categoryId: 3, categoryName: '분류3'},
                    {categoryId: 3, categoryName: '분류3'},
                    {categoryId: 3, categoryName: '분류3'},
                    {categoryId: 3, categoryName: '분류3'},
                    {categoryId: 3, categoryName: '분류3'},
                    {categoryId: 3, categoryName: '분류3'},
                    {categoryId: 3, categoryName: '분류3'},
                    {categoryId: 3, categoryName: '분류3'},
                    {categoryId: 3, categoryName: '분류3'},
                    {categoryId: 3, categoryName: '분류3'},
                    {categoryId: 3, categoryName: '분류3'},
                    {categoryId: 3, categoryName: '분류3'},
                    {categoryId: 3, categoryName: '분류3'},
                    {categoryId: 3, categoryName: '분류3'},
                    {categoryId: 3, categoryName: '마지막'},
                ],
            }
        }
    }

</script>

<style scoped>
    .sidenav {                
        background: #202123;
        width: 200px;
        height: 100%;
        position: fixed;
        color: rgb(227, 223, 223);
        margin-top: 35px;
        overflow: auto;
    }
    .sidenav ul {
        padding: 10px;
        list-style:none;        
    }
    .sidenav li {
        margin-bottom: 20px;
    }    

</style>


