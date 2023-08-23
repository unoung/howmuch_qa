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
              <h2 className="main_title"> 안녕하세요!</h2>
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
