import SurveyPage2 from "./SurveyPage2";
import "./App.css";
import "./font.css";
import SurveyPage3 from "./SurveyPage3";
import { useState } from "react";

function App() {
  const [startPage, setStartPage] = useState(true);

  const handleStartButtonClick = () => {
    setStartPage(false);
  };

  return (
    <>
      <div className="content_wrap">
        {startPage ? (
          <div className="startInfo">
            <div className="info_title">
              <img className="logo" alt="logo" src="/howmuch.png" style={{ marginBottom: "30px" }} />
              <h2 className="main_title">
                가까운 사이, 애매한 사이, 그냥 아는 사이 <br />
                도대체 경조사비를 얼마나 내야 할 지 고민되진 않으셨나요?
                <br />
                <span style={{ color: "#6d61ff" }}>얼마나</span>를 통해서 경조사비를 추천 받아 보세요.
              </h2>
              <p>어플 소개 및 설문조사 소개</p>
            </div>
            <button className="start_btn" onClick={handleStartButtonClick}>
              시작하기
            </button>
          </div>
        ) : (
          <SurveyPage3 />
        )}
      </div>
    </>
  );
}

export default App;
