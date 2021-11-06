import { useState } from "react";
import "./style.css";

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState("");

  const HandleLogin = () => {
    setUser(userInput);
    setIsLoggedIn(true);
  };
  console.log(userInput);
  return (
    <>
      <p>Username</p>
      <form className="form">
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button onClick={() => HandleLogin(userInput)}>
          Acessar com o nome
        </button>
      </form>
    </>
  );
};

export default GetUserComponent;
