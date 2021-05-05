<template>
    <div id="app">
        <main-menu
            v-if="screen === 'menu'"
            @startGame="startGame"
        />
        <game
            v-if="screen === 'game'"
            :question_limit="question_limit"
            @finishedGame="showStats"
        />
        <stats
            v-if="screen === 'stats'"
            :number_correct="stats.number_correct"
            :number_incorrect="stats.number_incorrect"
            :time_taken="stats.time_taken"
            :average_time="stats.average_time"
            :accuracy="stats.accuracy"
            @playAgain="screen='game'"
            @backMenu="screen='menu'"
        />
    </div>
</template>

<script>
    import MainMenu from "@/components/MainMenu.vue"
    import Game from "@/components/Game.vue"
    import Stats from "./components/Stats";
    export default {
        name: "app",
        components: {
            Stats,
            MainMenu,
            Game
        },
        data() {
            return {
                screen: "menu",
                question_limit: 0,
                stats: false
            }
        },
        methods: {
            startGame(question_limit) {
                this.question_limit = question_limit
                this.screen = "game"
            },
            showStats(stats) {
                this.stats = stats
                this.screen = "stats"
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600&display=swap');

    #app {
        width: 100vw;
        height: 100vh;
        background-color: #162447;

        font-family: "Rajdhani", sans-serif;
        color: lightgray;
    }

    *::selection
    {
        background-color:transparent;
    }
    *::-moz-selection
    {
        background-color:transparent;
    }
    *
    {
        -webkit-user-select: none;
        -moz-user-select: -moz-none;
        /*IE10*/
        -ms-user-select: none;
        user-select: none;

        /*You just need this if you are only concerned with android and not desktop browsers.*/
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    input[type="text"], textarea, [contenteditable]
    {

        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
    }
</style>