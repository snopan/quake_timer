<template>
    <div id="stats">
        <div id="stats-wrapper">
            <div class="stat-row">
                <div class="stat-title">Number of correct answers</div>
                <div class="stat-value">{{number_correct}}</div>
            </div>
            <div class="stat-row">
                <div class="stat-title">Number of incorrect answers</div>
                <div class="stat-value">{{number_incorrect}}</div>
            </div>
            <div class="stat-row">
                <div class="stat-title">Total time taken</div>
                <div class="stat-value">{{roundDeci(time_taken, 2)}} secs</div>
            </div>
            <div class="stat-row">
                <div class="stat-title">Average time per question</div>
                <div class="stat-value">{{roundDeci(average_time, 2)}} secs</div>
            </div>
            <div class="stat-row">
                <div class="stat-title">Accuracy</div>
                <div class="stat-value">{{roundDeci(accuracy, 4) * 100}} %</div>
            </div>
        </div>
        <div id="btn-wrapper">
            <div class="buttons" @click="$emit('playAgain')">Play Again</div>
            <div class="buttons" @click="$emit('backMenu')">Main Menu</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Stats",
        props: {
            number_correct: Number,
            number_incorrect: Number,
            time_taken: Number,
            average_time: Number,
            accuracy: Number
        },
        methods: {
            roundDeci(number, deci_points) {
                return Math.round(number * Math.pow(10,deci_points)) / Math.pow(10,deci_points)
            }
        }
    }
</script>

<style scoped>
    #stats {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .stat-row {
        width: 600px;
        height: 120px;
        margin-top: 50px;
        box-shadow: 5px 10px 5px #1b1b2f;
        background-color: #1f4068;
    }
    .stat-title {
        width: 220px;
        height: 30px;
        background-color: #1b1b2f;
        font-size: 18px;
        padding-left: 10px;
        line-height: 28px;
    }

    .stat-value {
        font-size: 70px;
        text-align: center;
    }

    #btn-wrapper {
        display: flex;
        margin-left: 50px;
        flex-direction: column;
        justify-content: center;
    }

    .buttons {
        width: 100px;
        height: 100px;
        border-radius: 20px;
        box-shadow: 5px 10px 5px #1b1b2f;
        margin-top: 25px;
        margin-bottom: 25px;
        cursor: pointer;
        background-color: #1f4068;

        text-align: center;
        font-size: 35px;
        padding: 10px;
    }

    .buttons:hover {
        background-color: #1b1b2f;
    }

</style>