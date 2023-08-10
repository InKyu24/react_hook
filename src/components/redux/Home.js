import { useSelector } from 'react-redux';
import Counter from './Counter';

function Home() {
    // useSelector는 store의 state를 가져온다.
    // state.count를 count에 저장한다.
    const count = useSelector(state => state.count);
    return (
        <div className="container">
            <h1>Home</h1>
            <p>Redux로 설정한 count값 : {count}</p>
            <Counter />
        </div>
    );
}

export default Home;