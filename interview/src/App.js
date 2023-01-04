import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header-content">
        <div className="nabar-content logo">로고가 들어갈 영역</div>
        <div className="space"></div>
        <div className="nabar-content">로그인</div>
        <div className="nabar-content">회원가입</div>
      </header>

      <nav className="navbar">
        <div className="nabar-content">홈</div>
        <div className="nabar-content">후기글</div>
        <div className="nabar-content">커뮤니티</div>
        <div className="nabar-content">공지사항</div>
        <div className="space"></div>
        <div className="nabar-content review">후기 작성</div>
      </nav>

      <div className="empty"></div>

      <div className="container">
        <div className="login-font">로그인</div>
        <form action="">
        <div className="container-input">
            <input type="text" class="login-input" 
            placeholder="  아이디를 입력해주세요."></input>

            <div className="login-padding"></div>

            <div>
                <input type="password" class="login-input"
                placeholder="  비밀번호를 입력해주세요."></input>
            </div>
        </div>
        </form>
        <div className="find">
            <div className="find-info">아이디 찾기</div>
            <div className="userinfo-padding"></div>
            <div className="find-info">비밀번호 찾기</div>
        </div>

        <div className="btn-padding">
          <button className="btn-login">로그인</button>
        </div>
        <div className="btn-padding2"></div>
        <div class="btn2">
          <button class="btn-signup">회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default App;
