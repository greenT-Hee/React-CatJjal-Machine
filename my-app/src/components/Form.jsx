import React from "react";

const Form = ({ updateMainCat }) => {
  const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
  const [value, setValue] = React.useState("");
  const [errorMeassage, setErrorMessage] = React.useState("");
  function handleInputCjange(e) {
    const userValue = e.target.value.toUpperCase();
    setErrorMessage("");
    if (includesHangul(userValue)) {
      setErrorMessage("한글은 입력 불가합니다.");
    }

    setValue(userValue);
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (value === "") {
      setErrorMessage("빈 값으로 만들 수 없습니다.");
      return;
    }
    updateMainCat(value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        placeholder="영어 대사를 입력해주세요"
        onChange={handleInputCjange}
        value={value}
      />
      <button type="submit">생성</button>
      <p style={{ color: "red" }}>{errorMeassage}</p>
    </form>
  );
};

export default Form;
