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
  const amountOptions = ["5만원", "10만원", "15만원", "20만원"];
  const eventOptions = ["돌잔치", "결혼식", "생일", "개업식", "기념일", "병문안위로금", "임신/출산축하금", "입학/졸업축하금"];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [relationship, setRelationship] = useState("");
  const [target, setTarget] = useState("");
  const [event, setEvent] = useState("");
  const [answers, setAnswers] = useState(Array(amountOptions.length).fill(false));

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
    if (questionIndex < targetOptions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // 모든 질문을 마침
    }
  };

  return (
    <div>
      <h1>설문조사</h1>
      <h3>
        질문: "{relationship}"의 관계의 "{targetOptions[questionIndex]}"의 "{event}"에 얼마를 내시겠어요?
      </h3>
      <ul>
        {amountOptions.map((option, index) => (
          <li key={index}>
            <label>
              <input type="radio" checked={answers[index]} onChange={() => handleOptionSelect(index)} />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleNextQuestion}>다음</button>
    </div>
  );
};

export default SurveyPage3;
