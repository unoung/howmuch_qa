import React, { useState, useEffect } from "react";

const SurveyPage2 = () => {
  const relationshipOptions = ["명절이나 특별한 날에만 인사를 주고받는 사이", "특별한 일 없어도 안부를 주고받는 사이", "자주 연락을 주고받는 사이"];
  const targetOptions = ["자녀", "부모님", "시부모님(장인장모님)", "배우자", "친척/사촌", "사촌 이상의 친척", "연인"];
  const amountOptions = ["5만원", "10만원", "15만원", "20만원"];

  const [relationship, setRelationship] = useState("");
  const [target, setTarget] = useState("");
  const [event, setEvent] = useState("");
  const [answers, setAnswers] = useState(Array(amountOptions.length).fill(false));
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    setEventList([]);
    if (target === "자녀") {
      setEventList(["돌잔치", "결혼식", "생일", "개업식", "기념일", "병문안위로금", "임신/출산축하금", "입학/졸업축하금"]);
    } else if (target === "부모님") {
      setEventList(["생일", "회갑", "기념일", "입학/졸업축하금", "결혼기념일", "병문안위로금", "개업식"]);
    } else if (target === "시부모님(장인장모님)") {
      setEventList(["생일", "회갑", "기념일", "입학/졸업축하금", "결혼기념일", "병문안위로금", "개업식"]);
    } else if (target === "친척/사촌") {
      setEventList(["돌잔치", "부모상", "조부모상", "결혼식", "생일", "회갑", "개업식", "기념일", "병문안위로금", "임신/출산축하금", "입학/졸업축하금"]);
    } else if (target === "사촌 이상의 친척") {
      setEventList(["돌잔치", "부모상", "조부모상", "결혼식", "생일", "회갑", "개업식", "기념일", "병문안위로금", "임신/출산축하금", "입학/졸업축하금"]);
    } else if (target === "배우자") {
      setEventList(["부모상", "조부모상", "생일", "개업식", "기념일", "병문안위로금", "임신/출산축하금", "입학/졸업축하금"]);
    } else if (target === "연인") {
      setEventList(["부모상", "조부모상", "생일", "개업식", "기념일", "병문안위로금", "입학/졸업축하금"]);
    }
  }, [target]);

  useEffect(() => {
    const randomRelationship = relationshipOptions[Math.floor(Math.random() * relationshipOptions.length)];
    setRelationship(randomRelationship);

    const randomTarget = targetOptions[Math.floor(Math.random() * targetOptions.length)];
    setTarget(randomTarget);

    let randomEvent = "";
    // if (randomTarget === "자녀" || randomTarget === "부모님") {
    randomEvent = eventList[Math.floor(Math.random() * eventList.length)];
    // }
    setEvent(randomEvent);
  }, [eventList]);

  const handleOptionSelect = (index) => {
    const newAnswers = Array(amountOptions.length).fill(false);
    newAnswers[index] = true;
    setAnswers(newAnswers);
  };

  return (
    <div>
      <h1>설문조사</h1>
      <h3>
        질문: "{relationship}"의 관계의 "{target}"의 "{event}"에 얼마를 내시겠어요?
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
    </div>
  );
};

export default SurveyPage2;
