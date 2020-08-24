import { INPUT_CHANGE, OUTPUT_CHANGE, SUBMITTING } from "../Actions/codeActionTypes";
const initState = {
    input: null,
    output: null,
};

const reducer = (state = initState, actions) => {
    switch (actions.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                input: actions.input,
            };
        case OUTPUT_CHANGE:
            return {
                ...state,
                output: actions.output,
            };
        case SUBMITTING:
            return {
                ...state,
                output: "Compiling....",
            };
        default:
            return state;
    }
};

export default reducer;
