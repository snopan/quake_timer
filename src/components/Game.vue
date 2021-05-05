<template>
    <div id="game">
        <div id="question">{{question}}</div>
        <choice
            class="choice"
            v-for="(choice, index) in choices"
            :key="`choice_${index}`"
            :choice="choice"
            :answer="answer"
            :is_correct="choice === correct_choice"
            @clickedAnswer="answerQuestion(choice)"
        />
    </div>
</template>

<script>
    import Choice from "@/components/Choice"
    export default {
        name: "game",
        components: {
            Choice
        },
        props: {
            question_limit: Number
        },
        data() {
            return {
                question_reset_time: 1000,
                questions_answered: 0,

                question: "0:00",
                choices: ["0:00", "0:00"],
                correct_choice: "0:00",
                answer: "",
                number_correct: 0,
                number_incorrect: 0,
                time: 0,
                time_interval: false
            }
        },
        methods: {
            newQuestion() {

                // Generate a number that is at max 600 which is 10 minutes in seconds
                let question_seconds = Math.ceil(Math.random() * 600),
                    correct_seconds =  question_seconds + 30,
                    incorrect_seconds = question_seconds + Math.ceil(Math.random()*6) *10

                // Generate another incorrect one if it ended up being correct
                while (correct_seconds == incorrect_seconds)
                    incorrect_seconds = question_seconds + Math.ceil(Math.random()*6) *10

                // Randomly pick an index to put the correct value
                let correct_index = Math.round(Math.random()),
                    incorrect_index = + !correct_index

                // Convert the seconds to string time and assign it
                this.question = this.convertIntSec(question_seconds)
                this.choices[correct_index] = this.convertIntSec(correct_seconds)
                this.choices[incorrect_index] = this.convertIntSec(incorrect_seconds)
                this.correct_choice = this.choices[correct_index]
            },
            convertIntSec(int_seconds) {
                let minutes = Math.floor(int_seconds / 60),
                    seconds = int_seconds - (minutes * 60);

                if (minutes < 10) {minutes = "0"+minutes;}
                if (seconds < 10) {seconds = "0"+seconds;}
                return minutes+':'+seconds;
            },
            answerQuestion(answer){

                // Only allow answers if there was no answer
                if (!this.answer)
                    this.answer = answer

                    // Check if it's correct then add one point to score if so
                    if (this.correct_choice === answer)
                        this.number_correct ++
                    else
                        this.number_incorrect ++

                    // Update the number of answered questions
                    this.questions_answered ++

                    // Wait for a brief period for animation
                    setTimeout(() => {
                        // This brief wait does not count into the time
                        this.time -= this.question_reset_time / 1000

                        // Continue asking if not at the limit
                        if (this.questions_answered < this.question_limit) {
                            this.answer = false
                            this.newQuestion()
                        }

                        // When it is at the limit, stop the counting and end
                        else {

                            // Stop the counting
                            clearInterval(this.time_interval)

                            // Then let the app know the game stats
                            this.$emit("finishedGame", {
                                number_correct: this.number_correct,
                                number_incorrect: this.number_incorrect,
                                time_taken: this.time,
                                average_time: this.time/this.question_limit,
                                accuracy: this.number_correct/this.question_limit
                            })
                        }
                    }, this.question_reset_time)
            }
        },
        mounted() {
            this.newQuestion()
            this.time_interval = setInterval(() => {
                this.time += 0.1
            }, 100)
        }
    }
</script>

<style scoped>

    #game {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #question {
        width: 800px;
        height: 200px;
        margin-top: 100px;
        box-shadow: 5px 10px 5px #1b1b2f;
        background-color: #1f4068;

        text-align: center;
        font-size: 170px;
        text-shadow: 0px 10px #1b1b2f;
    }

    .choice {
        margin-top: 100px;
    }

</style>