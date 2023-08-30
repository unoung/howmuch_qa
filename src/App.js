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
              <img className="logo" alt="logo" src="/howmuch.png" style={{ marginBottom: "15px" }} />
              <h2 className="main_title">
                가까운 사이, 애매한 사이, 그냥 아는 사이 .. <br />
                도대체 경조사비 얼마나 내야 할 지<br /> 고민되진 않으셨나요?
                <br />
                <span style={{ marginTop: "15px", display: "block", marginBottom: "15px" }}>
                  <span style={{ color: "#6d61ff" }}>얼마나</span>를 통해서 경조사비를 추천 받아 보세요.
                </span>
              </h2>
              <div className="des_wrap">
                <div className="des_box">
                  <h5 className="des_title">1. 경조사비는 어떤 원리로 추천되나요?</h5>
                  <p className="des_info">나이와 연소득을 기반으로 응답자분들의 데이터를 통계화 한 알고리즘이 추천 값을 도출하도록 설계되어 있습니다.</p>
                </div>
                <div className="des_box">
                  <h5 className="des_title">2. 추천값이 왜 안보이나요?</h5>
                  <p className="des_info">응답자분들의 데이터를 기반으로 추천 값이 설정되기에 정확한 값을 판단하기위한 데이터가 충분히 수취 되지 않은 경우 추천 값이 보이지 않을 수 있습니다.</p>
                </div>
                <div className="des_box">
                  <h5 className="des_title">3. 추천 받기 위해서는 어떤 정보가 필요한가요?</h5>
                  <p className="des_info">연령대와 연소득만을 기준으로 상대방과의 관계, 경조사의 종류, 친밀도에 따른 경조사비를 추천합니다. 그 외 정보는 사용되지 않습니다.</p>
                </div>

                <div className="des_box">
                  <h5 className="des_title">4. 추천 경조사비는 어떻게 볼 수 있나요?</h5>
                  <p className="des_info">
                    질문에 대해 본인이 지불한 혹은 지불할 용의가 있는 금액을 선택하면 나와 비슷한 연령대 그리고 연소득을 가진 사람들의 데이터를 기반으로 선정된 경조사비 추천 값을 확인 할 수 있습니다.
                  </p>
                </div>

                <p className="des_warning">*추천 받기위해 제출하신 응답은 익명으로 등록되고 추천 알고리즘에 포함되어 서비스 개선에 활용되며 그 밖에 다른 용도와 목적으로 사용되지 않습니다.</p>
              </div>
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
