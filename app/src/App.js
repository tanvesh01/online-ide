import React, { Component } from "react";
import classes from "./app.module.css";
import Editor from "./Components/Editor/Editor";
import Result from "./Components/Result/Result";
class App extends Component {
    render() {
        return (
            <div className={classes.root}>
                <div className={classes.editor}>
                    <Editor />
                </div>
                <div className={classes.result}>
                    <Result />
                </div>
            </div>
        );
    }
}
export default App;
