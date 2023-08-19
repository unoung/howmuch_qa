// import React, { useState, useEffect } from "react";

// const SurveyPage3 = () => {
//   const relationshipOptions = [
//     { title: "마주치면 인사만 하는 사이", intimacy: 1 },
//     { title: "어쩌다 같이 밥정도 한번 먹는 사이", intimacy: 2 },
//     { title: "자주 연락을 주고받는 사이", intimacy: 3 },
//     { title: "주말에 자주 만나는 사이", intimacy: 4 },
//     { title: "연휴에 같이 여행을 가는 사이", intimacy: 5 },
//     { title: "그냥 서로 얼굴을 아는 정도의 사이", intimacy: 1 },
//     { title: "명절이나 특별한 날만 인사를 주고받는 사이", intimacy: 2 },
//     { title: "특별한 일 없어도 안부를 주고받는 사이", intimacy: 3 },
//     { title: "도움이 필요할때 연락할 수 있는 사이", intimacy: 4 },
//     { title: "가족들과도 알고 지내는 사이", intimacy: 5 },
//   ];

//   const targetOptions = ["친구", "직장동료", "고교동창", "배우자", "대학동기", "동호회 지인", "선생님/제자"];
//   const amountOptions = ["5만원", "10만원", "15만원", "20만원"];
//   const eventOptions = ["돌잔치", "결혼식", "생일", "개업식", "기념일", "병문안위로금", "임신/출산축하금", "입학/졸업축하금"];

//   const [relationship, setRelationship] = useState("");
//   const [target, setTarget] = useState("");
//   const [event, setEvent] = useState("");
//   const [answers, setAnswers] = useState(Array(amountOptions.length).fill(false));
//   const [eventList, setEventList] = useState([]);

//   useEffect(() => {
//     setEventList([]);
//   }, [target]);

//   useEffect(() => {
//     const randomRelationship = relationshipOptions[Math.floor(Math.random() * relationshipOptions.length)].title;
//     setRelationship(randomRelationship);

//     const randomTarget = targetOptions[Math.floor(Math.random() * targetOptions.length)];
//     setTarget(randomTarget);

//     let randomEvent = eventOptions[Math.floor(Math.random() * eventOptions.length)];
//     setEvent(randomEvent);
//   }, []);

//   const handleOptionSelect = (index) => {
//     const newAnswers = Array(amountOptions.length).fill(false);
//     newAnswers[index] = true;
//     setAnswers(newAnswers);
//   };

//   const renderQuestions = () => {
//     return targetOptions.map((option, index) => {
//       const randomEvent = eventOptions[Math.floor(Math.random() * eventOptions.length)];
//       const randomRelationship = relationshipOptions[Math.floor(Math.random() * relationshipOptions.length)].title;

//       return (
//         <div key={index}>
//           <h3>
//             질문: "{randomRelationship}"의 관계의 "{option}"의 "{randomEvent}"에 얼마를 내시겠어요?
//           </h3>
//           <ul>
//             {amountOptions.map((amountOption, amountIndex) => (
//               <li key={amountIndex}>
//                 <label>
//                   <input type="radio" checked={answers[amountIndex]} onChange={() => handleOptionSelect(amountIndex)} />
//                   {amountOption}
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//       );
//     });
//   };

//   return (
//     <div>
//       <h1>설문조사</h1>
//       {renderQuestions()}
//     </div>
//   );
// };

// export default SurveyPage3;

import React, { useState, useEffect } from "react";

const SurveyPage3 = () => {
  const relationshipOptions = [
    { title: "마주치면 인사만 하는 사이", intimacy: 1 },
    { title: "어쩌다 같이 밥정도 한번 먹는 사이", intimacy: 2 },
    { title: "자주 연락을 주고받는 사이", intimacy: 3 },
    { title: "주말에 자주 만나는 사이", intimacy: 4 },
    { title: "연휴에 같이 여행을 가는 사이", intimacy: 5 },
    { title: "그냥 서로 얼굴을 아는 정도의 사이", intimacy: 1 },
    { title: "명절이나 특별한 날만 인사를 주고받는 사이", intimacy: 2 },
    { title: "특별한 일 없어도 안부를 주고받는 사이", intimacy: 3 },
    { title: "도움이 필요할때 연락할 수 있는 사이", intimacy: 4 },
    { title: "가족들과도 알고 지내는 사이", intimacy: 5 },
  ];

  const targetOptions = ["친구", "직장동료", "고교동창", "배우자", "대학동기", "동호회 지인", "선생님/제자"];
  const amountOptions = ["5만원", "10만원", "15만원", "20만원", "30만원", "50만원", "100만원 혹은 그 이상"];
  const eventOptions = ["돌잔치", "결혼식", "생일", "개업식", "기념일", "병문안위로금", "임신/출산축하금", "입학/졸업축하금"];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [relationship, setRelationship] = useState("");
  const [target, setTarget] = useState("");
  const [event, setEvent] = useState("");
  const [answers, setAnswers] = useState(Array(amountOptions.length).fill(false));
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const randomRelationship = relationshipOptions[Math.floor(Math.random() * relationshipOptions.length)].title;
    setRelationship(randomRelationship);

    const randomTarget = targetOptions[Math.floor(Math.random() * targetOptions.length)];
    setTarget(randomTarget);

    let randomEvent = eventOptions[Math.floor(Math.random() * eventOptions.length)];
    setEvent(randomEvent);
  }, [questionIndex]);

  const handleOptionSelect = (index) => {
    const newAnswers = Array(amountOptions.length).fill(false);
    newAnswers[index] = true;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (answers.some((answer) => answer)) {
      // 적어도 하나의 답변이 선택된 경우
      if (questionIndex < targetOptions.length - 1) {
        setQuestionIndex(questionIndex + 1);
        setShowWarning(false); // 경고 메시지 감추기
      } else {
        // 모든 질문을 마침
      }
    } else {
      // 답변을 선택하지 않은 경우
      setShowWarning(true); // 경고 메시지 표시
    }
  };
  const handlePreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const remainingQuestions = targetOptions.length - questionIndex;

  return (
    <div className="wrap">
      <div className="content_wrap">
        <div className="logo_title">
          <img className="logo" alt="logo" src="/howmuch.png" />
          <h2 className="main_title"> 경조사 비용 관리, 추천 어플 얼마나</h2>
        </div>
        <h3 className="qa_title">
          <span style={{ color: "#6d61ff", fontFamily: "font_EB" }}>{relationship}</span>의 관계인 <span style={{ color: "#6d61ff", fontFamily: "font_EB" }}>{targetOptions[questionIndex]}</span>의{" "}
          <span style={{ color: "#6d61ff", fontFamily: "font_EB" }}>{event}</span>에 얼마를 내시겠어요?
        </h3>
        <ul className="answer_list">
          {amountOptions.map((option, index) => (
            <li key={index} style={{ marginBottom: "10px", fontSize: "16px" }}>
              <label style={{ display: "block" }}>
                <input type="radio" checked={answers[index]} onChange={() => handleOptionSelect(index)} style={{ display: "none" }} />
                <span
                  style={{
                    display: "inline-block",
                    width: "20px",
                    height: "20px",
                    marginRight: "10px",
                    backgroundColor: answers[index] ? "#6d61ff" : "white",
                    borderRadius: "50%",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  {answers[index] && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16" style={{ position: "absolute", top: "2px", left: "1px", fontFamily: "font_B" }}>
                      <path d="M12.74 4.28a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-1.41 0l-3-3a1 1 0 0 1 1.41-1.41L7 10.58l5.33-5.3z" />
                    </svg>
                  )}
                </span>
                <span
                  className="option_span"
                  style={{ position: "relative", top: "-5px", marginLeft: "5px", color: answers[index] ? "#6d61ff" : "black", fontFamily: answers[index] ? "font_EB" : "font_M" }}
                >
                  {option}
                </span>
              </label>
            </li>
          ))}
        </ul>
        {showWarning && <p style={{ color: "red", fontFamily: "font_B" }}>답변을 선택해주세요.</p>}

        <div className="btn_wrap">
          <button className="handle_btn" onClick={handlePreviousQuestion}>
            이전
          </button>
          <div className="left_qa">
            <p>
              {questionIndex + 1} / {targetOptions.length}
            </p>
          </div>
          <button className="handle_btn" onClick={handleNextQuestion}>
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyPage3;
