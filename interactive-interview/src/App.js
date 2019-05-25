import React, {Component} from "react";
import {Typography, Container, Grid, Paper} from "@material-ui/core";
import {questions} from "./Data/questions";

class App extends Component {
    state = {
        questions: [],
        answers: [],
        randomIndexes: []
    };

    componentDidMount() {
        this.setState({questions}, () => this.generateRandomIndexes());
    }

    selectQuestion = id => {
        const questions = [...this.state.questions];
        const index = questions.findIndex(el => el.id === id);
        const question = questions.splice(index, 1);
        const answers = [...this.state.answers, ...question];
        this.setState({questions, answers}, () => this.generateRandomIndexes());
    };

    generateRandomIndexes = () => {
        const max = this.state.questions.length;
        const quantity = max > 3 ? 3 : max;
        const randomIndexes = [];
        while (randomIndexes.length < quantity) {
            const ranNum = Math.floor(Math.random() * max);
            if (!randomIndexes.includes(ranNum)) {
                randomIndexes.push(ranNum);
            }
        }
        this.setState({randomIndexes});
    };

    render() {
        const {questions, randomIndexes, answers} = this.state;
        let renderQuestions = <div>No more Questions</div>;
        if (randomIndexes.length) {
            renderQuestions = randomIndexes.map(i => {
                return questions[i] ? (
                    <Paper key={questions[i].id} onClick={() => this.selectQuestion(questions[i].id)} style={{padding: "1rem", marginBottom: "1rem"}}>
                        {questions[i].question}
                    </Paper>
                ) : null;
            });
        }

        let renderAnswer = <div>Select Question</div>;
        if (answers.length) {
            renderAnswer = answers[answers.length - 1] ? <Paper style={{padding: "1rem"}}>{answers[answers.length - 1].answer}</Paper> : "error";
        }
        return (
            <div className="App">
                <Typography variant="h1" gutterBottom align="center">
                    Interactive Interview
                </Typography>
                <Container maxWidth="md">
                    <Grid container justify="center" spacing={8}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" align="center" gutterBottom>
                                Questions
                            </Typography>
                            {renderQuestions}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" align="center" gutterBottom>
                                Answers
                            </Typography>
                            {renderAnswer}
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default App;
