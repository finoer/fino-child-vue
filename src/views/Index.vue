<template>
    <div class="question-wrapper">
        <div class="question">这里是题目1</div>

        <p class="button" @click="jumpTo">下一题</p>
    </div>
</template>

<style lang="less" scoped>

    .question-wrapper {
        margin: 0;
        padding: 0;
        .question {
            width: 100%;
            height: 600px;
            background:lightgreen;
            text-align: center;

        }
        .button {
            width: 100%;
            height: 40px;
            background:lightcoral;
            font-size: 24px;
            line-height: 40px;
            color: #fff;
            cursor: pointer;
            text-align: center;
        }
    }
</style>

<script>
    export default {
        methods: {
            jumpTo() {

            }
        }
    }
</script>
