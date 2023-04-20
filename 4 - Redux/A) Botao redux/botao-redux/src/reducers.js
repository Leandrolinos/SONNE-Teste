const initialState = {
    buttonState: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_BUTTON_STATE":
            return {
                ...state,
                buttonState: action.payload,
            };
        default:
            return state;
    }
}

