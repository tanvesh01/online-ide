import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputChange } from "../../store/Actions/codeActions";
import classes from "./Result.module.css";
const Result = () => {
    const dispatch = useDispatch();
    const { input, output } = useSelector((state) => state.code);
    const handleChange = (event) => {
        dispatch(inputChange(event.target.value));
    };
    return (
        <>
            <div className={classes.show}></div>
            <div className={classes.item}>
                <div className={classes.label}>
                    INPUT
                    <p style={{ fontSize: "1rem", margin: 0, color: "#888fb5" }}>
                        Go ahead test your code here!
                    </p>
                </div>
                <textarea
                    className={classes.input}
                    onChange={handleChange}
                    value={input}
                    placeholder="Input...."
                    spellCheck="false"
                ></textarea>
            </div>
            <div className={classes.item}>
                <div className={classes.label}>
                    OUTPUT
                    <p style={{ fontSize: "1rem", margin: 0, color: "#888fb5" }}>
                        Output of your code
                    </p>
                </div>
                <textarea
                    style={{ resize: "both" }}
                    className={classes.input}
                    value={output}
                    placeholder="Output Will Be Here"
                    spellCheck="false"
                ></textarea>
            </div>
        </>
    );
};
export default Result;
