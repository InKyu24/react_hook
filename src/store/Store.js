import { legacy_createStore as createStore } from "redux";

const initialState = {
    count: 0,
    name: "홍길동",
};

// action을 만드는 함수(action creator), 반드시 type을 반환해야 한다.
// increment()를 호출하면 { type: "INCREMENT" }를 반환하는 함수
export const increment = () => {
    return {
        type: "INCREMENT",
    };
};

// decrement()를 호출하면 { type: "DECREMENT" }를 반환하는 함수
export const decrement = () => {
    return {
        type: "DECREMENT",
    };
};
// changeName("name")를 호출하면 { type: "CHANGE_NAME", name: "name" }를 반환하는 함수
export const changeName = (name) => {
    return {
        type: "CHANGE_NAME",
        name: name
    };
};

const reducer = (state = initialState, action) => {
    // action의 type에 따라 다른 작업을 수행한다.
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };
        case "CHANGE_NAME":
            return { ...state, name: action.name };
        default:
            return state;
    }
};

const Store = createStore(reducer);

export default Store;