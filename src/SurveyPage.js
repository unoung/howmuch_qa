import React, {useState, useEffect} from "react";

const SurveyPage = () => {
  const relationshipOptions = [
    "마주치면 인사만 하는사이",
    "가끔 밥먹는 사이",
    "같이 여행가는 사이",
    "안부 주고받는 사이",
  ];
  const targetOptions = ["친구", "친척", "부모", "직장동료"];
  const eventOptions = ["돌잔치", "결혼식", "장례식", "생일"];
  const amountOptions = ["5만원", "10만원", "15만원", "20만원"];

  const [relationship, setRelationship] = useState("");
  const [target, setTarget] = useState("");
  const [event, setEvent] = useState("");
  const [answers, setAnswers] = useState(
    Array(amountOptions.length).fill(false)
  );

  useEffect(() => {
    const randomRelationship =
      relationshipOptions[
        Math.floor(Math.random() * relationshipOptions.length)
      ];
    const randomTarget =
      targetOptions[Math.floor(Math.random() * targetOptions.length)];
    const randomEvent =
      eventOptions[Math.floor(Math.random() * eventOptions.length)];

    setRelationship(randomRelationship);
    setTarget(randomTarget);
    setEvent(randomEvent);
  }, []);

  const handleOptionSelect = (index) => {
    const newAnswers = Array(amountOptions.length).fill(false);
    newAnswers[index] = true;
    setAnswers(newAnswers);
  };

  return (
    <div>
      <h1>설문조사</h1>
      <h3>
        질문: "{relationship}"의 관계의 "{target}"의 "{event}"에 얼마를
        내시겠어요?
      </h3>
      <ul>
        {amountOptions.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                checked={answers[index]}
                onChange={() => handleOptionSelect(index)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SurveyPage;
