import { INPUT_CHANGE, OUTPUT_CHANGE, SUBMITTING } from "./codeActionTypes";
export const inputChange = (input) => {
    return {
        type: INPUT_CHANGE,
        input: input,
    };
};
export const outputChange = (output) => {
    return {
        type: OUTPUT_CHANGE,
        output: output,
    };
};

export const submitting = () => {
    return {
        type: SUBMITTING,
    };
};
