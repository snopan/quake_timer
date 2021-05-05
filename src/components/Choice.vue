<template>
    <div
        id="choice"
        @mouseenter="is_hover=true"
        @mouseleave="is_hover=false"
        @click="$emit('clickedAnswer')"
        :style="{
            backgroundColor: answer.length ?
                (is_correct ? 'green' : 'red') :
                (is_hover ? '#1b1b2f' : '#1f4068'),
            border: answer === choice ?
                '3px solid gold' : 'none'
        }"
    >
        {{choice}}
    </div>
</template>

<script>
    export default {
        name: "choice",
        props: {
            choice: String,
            answer: String,
            is_correct: Boolean,
        },
        data() {
            return {
                is_hover: false
            }
        }
    }
</script>

<style scoped>
    #choice {
        width: 700px;
        height: 150px;
        border-radius: 20px;
        cursor: pointer;
        transition: 0.1s;

        text-align: center;
        font-size: 120px;
        text-shadow: 0px 8px #1b1b2f;
    }

</style>