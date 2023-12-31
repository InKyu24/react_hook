import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import EffectBasic1 from './components/useeffect/EffectBasic';
import SignUpForm from './components/form/SignUpForm';
import LoginForm from './components/form/LoginForm';
import ContextBasic from './components/usecontext/ContextBasic';
import MemoBasic1 from './components/usememo/MemoBasic';
import StateBasic from './components/usestate/StateBasic';
import Page from './components/Page';
import Topics from './components/Topics';
import AxiosTest from './components/AxiosTest';
import Counter from './components/redux/Counter';
import FileUpload from './components/fileupload/FileUpload';
import FileDownload from './components/filedownload/FileDownload';
import Home from './components/redux/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/useState">useState</Link></li>
            <li><Link to="/useEffect">useEffect</Link></li>
            <li><Link to="/useContext">useContext</Link></li>
            <li><Link to="/usememo">useMemo</Link></li>
            <li><Link to="/join">회원가입</Link></li>
            <li><Link to="/login">로그인</Link></li>
            <li><Link to="/page">page</Link></li>
            <li><Link to="/topics">topics</Link></li>
            <li><Link to="/axios">axios</Link></li>
            <li><Link to="/counter">counter</Link></li>
            <li><Link to="/upload">파일 업로드</Link></li>
            <li><Link to="/download">파일 다운로드</Link></li> 
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState" element={<StateBasic />} />
          <Route path="/useEffect" element={<EffectBasic1 />} />
          <Route path="/useContext" element={<ContextBasic />} />
          <Route path="/usememo" element={<MemoBasic1 />} />
          <Route path="/join" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/page" element={<Page />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topicName" exact element={<Topics />} />
          <Route path="/axios" element={<AxiosTest />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/upload" element={<FileUpload />} />
          <Route path="/download" element={<FileDownload />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
