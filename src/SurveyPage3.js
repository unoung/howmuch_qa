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

  // const targetOptions = ["자녀", "부모님", "시부모님(장인장모)", "친척/사촌", "사촌 이상의 친척", "배우자", "연인", "친구", "직장동료", "고교동창", "대학동기/선후배", "선생님/제자", "지인"];
  const targetOptions = [
    { target: "나이", targetNum: 5 },
    { target: "연소득", targetNum: 5 },
    { target: "자녀", targetNum: 0 },
    { target: "부모님", targetNum: 0 },
    { target: "시부모님(장인장모)", targetNum: 0 },
    { target: "친척/사촌", targetNum: 3 },
    { target: "사촌 이상의 친척", targetNum: 3 },
    { target: "배우자", targetNum: 0 },
    { target: "연인", targetNum: 1 },
    { target: "친구", targetNum: 1 },
    { target: "직장동료", targetNum: 2 },
    { target: "고교동창", targetNum: 2 },
    { target: "대학동기/선후배", targetNum: 4 },
    { target: "선생님/제자", targetNum: 4 },
    { target: "지인", targetNum: 4 },
  ];

  // const amountOptions = ["5만원", "10만원", "15만원", "20만원", "30만원", "50만원", "100만원 혹은 그 이상"];
  const amountOptions = [
    { money: "5만원", value: 5 },
    { money: "10만원", value: 10 },
    { money: "15만원", value: 15 },
    { money: "20만원", value: 20 },
    { money: "30만원", value: 30 },
    { money: "100만원 혹은 그 이상", value: 100 },
  ];

  // const eventOptions = ["돌잔치", "결혼식", "생일", "개업식", "기념일", "병문안위로금", "임신/출산축하금", "입학/졸업축하금"];
  const eventOptions = [
    { event: "돌잔치", eventNum: 3 },
    { event: "부모상", eventNum: 1 },
    { event: "조부모상", eventNum: 1 },
    { event: "결혼식", eventNum: 0 },
    { event: "생일", eventNum: 2 },
    { event: "회갑", eventNum: 4 },
    { event: "개업식", eventNum: 4 },
    { event: "기념일", eventNum: 4 },
    { event: "병문안위로금", eventNum: 4 },
    { event: "임신/출산축하금", eventNum: 4 },
    { event: "입학/졸업축하금", eventNum: 4 },
  ];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(amountOptions.length).fill(false));
  const [showWarning, setShowWarning] = useState(false);
  const [generatedQuestions, setGeneratedQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]); // 선택된 답변들을 저장하는 배열

  useEffect(() => {
    const generatedQuestions = targetOptions.map((targetOption) => {
      let randomRelationship;
      let randomEvent;

      if (targetOption.target === "나이") {
        return {
          target: targetOption.target,
          relationship: "",
          event: "",

          amountOptions: [
            { option: "20대", value: 20 },
            { option: "30대", value: 30 },
            { option: "40대", value: 40 },
            { option: "50대", value: 50 },
            { option: "60대", value: 60 },
            { option: "70대 이상", value: 70 },
          ],
        };
      } else if (targetOption.target === "연소득") {
        return {
          target: targetOption.target,
          relationship: "",
          event: "",

          amountOptions: [
            { option: "3천만원대 이하", value: 3000 },
            { option: "4천만원대", value: 4000 },
            { option: "5천만원대", value: 5000 },
            { option: "6천만원대", value: 6000 },
            { option: "7천만원대", value: 7000 },
            { option: "8천만원대 이상", value: 8000 },
          ],
        };
      } else if (targetOption.target === "자녀") {
        const childOptions = relationshipOptions.filter((option) => option.intimacy === 2 || option.intimacy === 3);
        randomRelationship = childOptions[Math.floor(Math.random() * childOptions.length)].title;
        const childEventOptions = [
          { event: "돌잔치", eventNum: 3 },
          { event: "결혼식", eventNum: 0 },
          { event: "생일", eventNum: 2 },
          { event: "개업식", eventNum: 4 },
          { event: "기념일", eventNum: 4 },
          { event: "병문안위로금", eventNum: 4 },
          { event: "임신/출산축하금", eventNum: 4 },
          { event: "입학/졸업축하금", eventNum: 4 },
        ];
        randomEvent = childEventOptions[Math.floor(Math.random() * childEventOptions.length)].event;

        return {
          target: targetOption.target,
          relationship: randomRelationship,
          event: randomEvent,
        };
      } else if (targetOption.target === "부모님") {
        const childOptions = relationshipOptions.filter((option) => option.intimacy === 2 || option.intimacy === 3);
        randomRelationship = childOptions[Math.floor(Math.random() * childOptions.length)].title;
        const childEventOptions = [
          { event: "생일", eventNum: 2 },
          { event: "개업식", eventNum: 4 },
          { event: "기념일", eventNum: 4 },
          { event: "병문안위로금", eventNum: 4 },
          { event: "입학/졸업축하금", eventNum: 4 },
        ];
        randomEvent = childEventOptions[Math.floor(Math.random() * childEventOptions.length)].event;

        return {
          target: targetOption.target,
          relationship: randomRelationship,
          event: randomEvent,
        };
      } else if (targetOption.target === "시부모님(장인장모)") {
        const childOptions = relationshipOptions.filter((option) => option.intimacy === 2 || option.intimacy === 3);
        randomRelationship = childOptions[Math.floor(Math.random() * childOptions.length)].title;
        const childEventOptions = [
          { event: "생일", eventNum: 2 },
          { event: "개업식", eventNum: 4 },
          { event: "기념일", eventNum: 4 },
          { event: "병문안위로금", eventNum: 4 },
          { event: "입학/졸업축하금", eventNum: 4 },
        ];
        randomEvent = childEventOptions[Math.floor(Math.random() * childEventOptions.length)].event;

        return {
          target: targetOption.target,
          relationship: randomRelationship,
          event: randomEvent,
        };
      } else if (targetOption.target === "친척/사촌") {
        const childOptions = relationshipOptions.filter((option) => option.intimacy === 2 || option.intimacy === 3);
        randomRelationship = childOptions[Math.floor(Math.random() * childOptions.length)].title;
        randomEvent = eventOptions[Math.floor(Math.random() * eventOptions.length)].event;

        return {
          target: targetOption.target,
          relationship: randomRelationship,
          event: randomEvent,
        };
      } else if (targetOption.target === "사촌 이상의 친척") {
        const childOptions = relationshipOptions.filter((option) => option.intimacy === 2 || option.intimacy === 3);
        randomRelationship = childOptions[Math.floor(Math.random() * childOptions.length)].title;
        const childEventOptions = [
          { event: "부모상", eventNum: 1 },
          { event: "조부모상", eventNum: 1 },
          { event: "생일", eventNum: 2 },
          { event: "개업식", eventNum: 4 },
          { event: "기념일", eventNum: 4 },
          { event: "병문안위로금", eventNum: 4 },
          { event: "입학/졸업축하금", eventNum: 4 },
        ];
        randomEvent = childEventOptions[Math.floor(Math.random() * childEventOptions.length)].event;

        return {
          target: targetOption.target,
          relationship: randomRelationship,
          event: randomEvent,
        };
      } else if (targetOption.target === "연인") {
        const childOptions = [
          { title: "교제한지 얼마 되지않은 사이", intimacy: 1 },
          { title: "1년정도 꾸준하게 만나고 있는 사이", intimacy: 2 },
          { title: "오랫동안 교제해온 사이", intimacy: 3 },
        ];
        randomRelationship = childOptions[Math.floor(Math.random() * childOptions.length)].title;
        const childEventOptions = [
          { event: "부모상", eventNum: 1 },
          { event: "조부모상", eventNum: 1 },
          { event: "생일", eventNum: 2 },
          { event: "개업식", eventNum: 4 },
          { event: "기념일", eventNum: 4 },
          { event: "병문안위로금", eventNum: 4 },
          { event: "입학/졸업축하금", eventNum: 4 },
        ];
        randomEvent = childEventOptions[Math.floor(Math.random() * childEventOptions.length)].event;

        return {
          target: targetOption.target,
          relationship: randomRelationship,
          event: randomEvent,
        };
      } else if (targetOption.target === "배우자") {
        const childEventOptions = [
          { event: "부모상", eventNum: 1 },
          { event: "조부모상", eventNum: 1 },
          { event: "생일", eventNum: 2 },
          { event: "개업식", eventNum: 4 },
          { event: "기념일", eventNum: 4 },
          { event: "병문안위로금", eventNum: 4 },
          { event: "임신/출산축하금", eventNum: 4 },
          { event: "입학/졸업축하금", eventNum: 4 },
        ];

        randomEvent = childEventOptions[Math.floor(Math.random() * childEventOptions.length)].event;

        return {
          target: targetOption.target,
          relationship: "",
          event: randomEvent,
        };
      } else {
        randomRelationship = relationshipOptions[Math.floor(Math.random() * relationshipOptions.length)].title;
        randomEvent = eventOptions[Math.floor(Math.random() * eventOptions.length)].event;

        return {
          target: targetOption.target,
          relationship: randomRelationship,
          event: randomEvent,
        };
      }
    });

    setGeneratedQuestions(generatedQuestions);
    console.log(generatedQuestions);
  }, []);

  const handleOptionSelect = (index) => {
    const newAnswers = Array(amountOptions.length).fill(false);
    newAnswers[index] = true;
    setAnswers(newAnswers);
    // 선택된 답변을 selectedAnswers에 저장
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[questionIndex] = {
      target: currentQuestion.target,
      relationship: currentRelationship,
      event: currentEvent,
      answer: currentQuestion?.amountOptions ? currentQuestion.amountOptions[index].value : amountOptions[index].value,
    };
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const handleNextQuestion = () => {
    if (answers.some((answer) => answer)) {
      if (questionIndex < targetOptions.length - 1) {
        setQuestionIndex(questionIndex + 1);
        setShowWarning(false);

        // 현재 질문의 선택된 답변 정보를 다음 질문으로 가져오기
        const updatedAnswers = Array(amountOptions.length).fill(false);
        const nextSelected = selectedAnswers[questionIndex + 1];
        if (nextSelected) {
          const answerIndex = amountOptions.findIndex((option) => option.value === nextSelected.answer);
          if (answerIndex !== -1) {
            updatedAnswers[answerIndex] = true;
            setAnswers(updatedAnswers);
          }
        }
      } else {
        // 모든 질문에 답변을 선택한 경우, 선택된 답변 배열을 확인하거나 사용할 수 있습니다.
        console.log(selectedAnswers);
      }
    } else {
      setShowWarning(true);
    }
  };

  // const handlePreviousQuestion = () => {
  //   if (questionIndex > 0) {
  //     setQuestionIndex(questionIndex - 1);
  //   }
  // };

  const handlePreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      setShowWarning(false);

      // 현재 질문의 선택된 답변 정보를 이전 질문으로 가져오기
      const updatedAnswers = Array(amountOptions.length).fill(false);
      const previousSelected = selectedAnswers[questionIndex - 1];
      if (previousSelected) {
        const answerIndex = amountOptions.findIndex((option) => option.value === previousSelected.answer);
        if (answerIndex !== -1) {
          updatedAnswers[answerIndex] = true;
          setAnswers(updatedAnswers);
        }
      }
    }
  };

  const currentQuestion = generatedQuestions[questionIndex];
  const currentEvent = currentQuestion ? currentQuestion.event : "";
  const currentRelationship = currentQuestion ? currentQuestion.relationship : "";

  return (
    <div className="wrap">
      <div className="content_wrap">
        <div className="logo_title">
          <img className="logo" alt="logo" src="/howmuch.png" />
          <h2 className="main_title"> 경조사 비용 관리, 추천 어플 얼마나</h2>
        </div>
        <h3 className="qa_title">
          {currentQuestion?.target === "나이" || currentQuestion?.target === "연소득" ? (
            <>
              <span style={{ color: "#6d61ff", fontFamily: "font_EB" }}>{currentQuestion?.target}</span>
              <span>(이)가 어떻게 되시나요?</span>
            </>
          ) : currentQuestion?.target === "배우자" ? (
            <>
              <span style={{ color: "#6d61ff", fontFamily: "font_EB" }}>{currentQuestion?.target}</span>의 <span style={{ color: "#6d61ff", fontFamily: "font_EB" }}>{currentEvent}</span>에 얼마를
              내시겠어요?
            </>
          ) : (
            <>
              <span style={{ color: "#6d61ff", fontFamily: "font_EB" }}>{currentRelationship}</span>의 관계인 <span style={{ color: "#6d61ff", fontFamily: "font_EB" }}>{currentQuestion?.target}</span>
              의 <span style={{ color: "#6d61ff", fontFamily: "font_EB" }}>{currentEvent}</span>에 얼마를 내시겠어요?
            </>
          )}
        </h3>
        <ul className="answer_list">
          {currentQuestion?.amountOptions
            ? currentQuestion.amountOptions.map((option, index) => (
                <li key={index} style={{ marginBottom: "10px", fontSize: "16px" }} value={option.value}>
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
                      {option.option}
                    </span>
                  </label>
                </li>
              ))
            : amountOptions.map((option, index) => (
                <li key={index} style={{ marginBottom: "10px", fontSize: "16px" }} value={option.value}>
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
                      {option.money}
                    </span>
                  </label>
                </li>
              ))}
          {/* {amountOptions.map((option, index) => (
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
                  {option.money}
                </span>
              </label>
            </li>
          ))} */}
        </ul>

        {showWarning && <p style={{ color: "red", fontFamily: "font_B" }}>답변을 선택해주세요.</p>}

        <div className="btn_wrap">
          {/* <button className="handle_btn" onClick={handlePreviousQuestion}>
            이전
          </button> */}
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
