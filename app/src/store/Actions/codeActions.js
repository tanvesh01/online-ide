import { INPUT_CHANGE, OUTPUT_CHANGE } from "./codeActionTypes";
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
// export const submitCode = () => {
//     return (dispatch) => {
//         // loading
//         axios
//             .post("/", item)
//             .then((res) => {
//                 console.log(res.data);
//                 dispatch(outputChange(res.data.output));
//             })
//             .catch((err) => {
//                 console.log(err);
//                 // dispatch(returnErrors(err.response.data, err.response.status));
//             });
//     };
// };
