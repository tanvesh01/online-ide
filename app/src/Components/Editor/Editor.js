import { Controlled as CodeMirror } from "react-codemirror2";
import React, { Component } from "react";
import { outputChange, submitting } from "../../store/Actions/codeActions";
import { connect } from "react-redux";
import axios from "axios";
import classes from "./editor.module.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/dracula.css";
require("codemirror/mode/clike/clike");
require("codemirror/mode/python/python");

class Editor extends Component {
    state = {
        lang: "cpp17",
        mode: "clike",
        value: `
#include <iostream>
using namespace std;

int main() {
    int x=10;
    cin>>x;
    cout<<x;
}
        `,
    };
    submitHandler = () => {
        this.props.submitting();
        const x = {
            code: this.state.value,
            input: this.props.input,
            lang: this.state.lang,
        };
        axios
            .post("/", x)
            .then((response) => {
                console.log(response.data.output);
                this.props.outputChange(response.data.output);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    modeToggleHandler = (mode) => {
        if (mode === "cpp17") {
            this.setState({ mode: "clike", lang: "cpp17" });
        } else if (mode === "java") {
            this.setState({ mode: "clike", lang: "java" });
        } else if (mode === "python") {
            this.setState({ mode: "python", lang: "python3" });
        }
    };
    render() {
        return (
            <>
                <div className={classes.run}>
                    <div className={classes.heading}>Source Code</div>
                    <div>
                        <button className={classes.submit} onClick={() => this.submitHandler()}>
                            Run
                        </button>
                    </div>
                    <div className={classes.toogle}>
                        <div
                            className={
                                this.state.lang === "cpp17" ? classes.active : classes.normal
                            }
                            onClick={() => this.modeToggleHandler("cpp17")}
                        >
                            C++
                        </div>
                        <div
                            className={this.state.lang === "java" ? classes.active : classes.normal}
                            onClick={() => this.modeToggleHandler("java")}
                        >
                            Java
                        </div>
                        <div
                            className={
                                this.state.lang === "python3" ? classes.active : classes.normal
                            }
                            onClick={() => this.modeToggleHandler("python")}
                        >
                            Python
                        </div>
                    </div>
                </div>
                {/* <div className={classes.down}>GO DOWN!!!</div> */}
                <CodeMirror
                    className={classes.code}
                    value={this.state.value}
                    onBeforeChange={(editor, data, value) => {
                        this.setState({ value: value });
                    }}
                    options={{
                        mode: this.state.mode,
                        theme: "dracula",
                        lineNumbers: true,
                        indentUnit: 4,
                        indentWithTabs: true,
                    }}
                    autoCursor={true}
                    onChange={(editor, data, value) => {}}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        input: state.code.input,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        outputChange: (output) => dispatch(outputChange(output)),
        submitting: () => dispatch(submitting()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Editor);
