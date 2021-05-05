<template>
    <div id="main-menu">
        <div id="logo">Quake Timer</div>
        <div id="input-text">Enter the number of questions you'll like to answer</div>
        <input id="input-box" v-model="question_limit" @keypress="isNumber($event)"/>
        <div id="play-btn" @click="startGame">Play</div>
    </div>
</template>

<script>
    export default {
        name: "main-menu",
        data() {
            return {
                question_limit: 10
            }
        },
        methods: {
            isNumber(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)))
                    evt.preventDefault();
                else
                    return true;
            },
            startGame() {
                if (this.question_limit > 0)
                    this.$emit('startGame', parseInt(this.question_limit))
            }
        }
    }
</script>

<style scoped>
    #main-menu {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #logo {
        width: 900px;
        height: 200px;
        margin-top: 200px;
        box-shadow: 5px 10px 5px #1b1b2f;
        background-color: #1f4068;

        text-align: center;
        font-size: 150px;
        text-shadow: 0px 10px #1b1b2f;
    }

    #input-text {
        margin-top: 50px;
        font-size: 30px;
    }

    #input-box {
        width: 700px;
        height: 50px;
        margin-top: 10px;
        font-size: 50px;
        text-align: center;
    }

    #play-btn {
        width: 500px;
        height: 150px;
        border-radius: 50px;
        cursor: pointer;
        margin-top: 50px;
        background-color: #1f4068;

        text-align: center;
        font-size: 120px;
    }

    #play-btn:hover {
        background-color: #1b1b2f;
    }
</style>