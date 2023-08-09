import { Link, useParams } from 'react-router-dom';
function Topics() {

    let { topicName } = useParams();

    return (
        <div className='container'>
            <h2>Topics</h2>
            <ul>
                <li><Link to="/topics/korea">국내 토픽</Link></li>
                <li><Link to="/topics/japan">일본 토픽</Link></li>
            </ul>

            <p>토픽 주제 : {topicName ? topicName : '선택하세요'}</p>
        </div>
    );
}

export default Topics;