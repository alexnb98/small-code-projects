import React, {Component} from "react";
import {Typography, Button, Grid, Paper} from "@material-ui/core";
import {questions} from "./Data/questions";

class App extends Component {
    state = {
        questions: [],
        answers: [],
        selectedQ: []
    };

    componentDidMount() {
        this.setState({questions});
    }

    getRandomQuestions = () => {
        if (this.state.questions.length > 0) {
            for (let i = 0; i < 3; i++) {
                this.setState(state => {
                    const newQuestions = state.questions;
                    const newSelectedQ = state.selectedQ;
                    console.log("newQuestions", newQuestions);
                    const ranNum = Math.floor(Math.random() * newQuestions.length);
                    const selectedQ = newQuestions.splice(ranNum, 1);
                    newSelectedQ.push(selectedQ[0]);
                    return {questions: newQuestions, selectedQ: newSelectedQ};
                });
            }
        }
    };

    selectQuestion = id => {
        this.setState(state => {
            const newSelectQ = state.selectedQ;
            const index = newSelectQ.findIndex(el => el.id === id);
            const question = newSelectQ.splice(index, 1);
            return {
                questions: [...state.questions, ...newSelectQ],
                answers: [...state.answers, question[0]],
                selectedQ: []
            };
        });
        this.getRandomQuestions();
    };

    render() {
        let questions = <div>No questions</div>;
        if (this.state.selectedQ.length > 0) {
            questions = this.state.selectedQ.map(q => {
                return (
                    <Paper onClick={() => this.selectQuestion(q.id)} key={q.id} style={{padding: "1rem", marginBottom: "1rem"}}>
                        <div>{q.question}</div>
                    </Paper>
                );
            });
        }
        let answer = <div>Select a question</div>;
        if (this.state.answers.length > 0) {
            answer = <div> {this.state.answers[this.state.answers.length - 1].answer}</div>;
        }
        return (
            <div className="App">
                <Typography variant="h1" gutterBottom align="center">
                    Interactive Interview
                </Typography>
                <Grid container justify="center">
                    <Grid item xs={8}>
                        {questions}
                        {answer}
                        <Button variant="contained" onClick={this.getRandomQuestions}>
                            Start
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
