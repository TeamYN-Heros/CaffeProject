/* eslint-disable jsx-a11y/alt-text */
import cryptoJs from "crypto-js";
import "../CSS/LoginForm.css";

let key = [];
let userObj = [];
const LoginForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const inputEmail = e.target[0].value;
    const inputPassword = e.target[1].value;
    for (let i = 0; i < localStorage.length; i++) {
      key[i] = localStorage.key(i);
    }
    key.forEach(
      (key, index) =>
        (userObj[index] = JSON.parse(localStorage.getItem(`${key}`)))
    );
    userObj.map((user) => {
      if (
        inputEmail ===
          cryptoJs.AES.decrypt(`${user.email}`, "sha512").toString(
            cryptoJs.enc.Utf8
          ) &&
        inputPassword ===
          cryptoJs.AES.decrypt(`${user.password}`, "sha512").toString(
            cryptoJs.enc.Utf8
          )
      ) {
        localStorage.setItem("accessToken", user.accessToken);
        window.location.reload();
      }
    });
  };
  return (
    <div id="LoginWrap">
      <form id="LoginForm" onSubmit={onSubmit}>
        <input type="email" placeholder="e-mail" required />
        <input
          type="password"
          placeholder="영문,대소문자,숫자,특수문자 포함 8~16자"
          required
          pattern="^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$"
        />
        <button>로그인</button>
      </form>
    </div>
  );
};

export default LoginForm;
