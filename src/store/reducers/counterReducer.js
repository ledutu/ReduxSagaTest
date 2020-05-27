import { INCREASE, DECREASE } from "../actions/actionTypes";

const counterReducer = (count = 0, action) => {
    switch (action.type) {
        case INCREASE:
            return count + action.step;
        case DECREASE:
            return count - action.step;
        default:
            return count;
    }
};

export default counterReducer;