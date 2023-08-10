import { useDispatch, useSelector } from "react-redux";

function Counter() {
    const dispatch = useDispatch();
    // state.count를 count에 저장한다.
    const count = useSelector(state => state.count);
    // state.name을 name에 저장한다.
    const name = useSelector(state => state.name);
    return (
        <div className="container">
            <h1>Count</h1>
            <p>Redux로 설정한 count값 : {count}</p>
            <p>Redux로 설정한 name값 : {name}</p>

            <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
            <button onClick={() => dispatch({ type: "CHANGE_NAME", name: "김철수" })}>이름변경</button>
        </div>
    );
}

export default Counter;