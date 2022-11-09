import CryptoJS from "crypto-js";
import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import "../CSS/myPage.css";

const MyPage = ({ userObj }) => {
  const [open, setOpen] = useState(true);
  const [lock, setLock] = useState(false);
  const [chPassword, setChPassword] = useState(false);
  const onClose = () => {
    setOpen(!open);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let password = CryptoJS.AES.decrypt(userObj[1].password, "sha512").toString(
      CryptoJS.enc.Utf8
    );

    if (password === e.target[0].value) {
      setLock(!lock);
    } else {
      return;
    }
  };
  const onChPassword = () => {
    setChPassword(!chPassword);
  };
  const onSetPassword = (e) => {
    e.preventDefault();
    const cipherPassword = CryptoJS.AES.encrypt(
      e.target[0].value,
      "sha512"
    ).toString();
    console.log((userObj[1].password = cipherPassword));
    localStorage.setItem(userObj[0], JSON.stringify(userObj[1]));
    window.location.reload();
  };
  return (
    <Modal isOpen={open} className="myPageForm">
      {lock ? (
        <>
          <div>
            <span>이메일 : </span>
            <span>
              {CryptoJS.AES.decrypt(userObj[1].email, "sha512").toString(
                CryptoJS.enc.Utf8
              )}
            </span>
          </div>
          <div>
            <span>이름 : </span>
            <span>
              {CryptoJS.AES.decrypt(userObj[1].name, "sha512").toString(
                CryptoJS.enc.Utf8
              )}
            </span>
          </div>
          <div>
            <span>생년월일 : </span>
            <span>
              {CryptoJS.AES.decrypt(userObj[1].birth, "sha512").toString(
                CryptoJS.enc.Utf8
              )}
            </span>
          </div>
          <div>
            <span>가입일자 : </span>
            <span>
              {CryptoJS.AES.decrypt(userObj[1].joinDate, "sha512").toString(
                CryptoJS.enc.Utf8
              )}
            </span>
          </div>
          <button onClick={onChPassword}>비밀번호 재설정</button>
          {chPassword ? (
            <>
              <form id="passwordChecker" onSubmit={onSetPassword}>
                <input
                  type="password"
                  placeholder="영문,대소문자,숫자,특수문자 포함 8~16자"
                  required
                  pattern="^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$"
                />
                <button>비밀번호 재설정</button>
              </form>
            </>
          ) : null}
          <span onClick={onClose}>close</span>
        </>
      ) : (
        <form id="passwordChecker" onSubmit={onSubmit}>
          <input
            type="password"
            placeholder="영문,대소문자,숫자,특수문자 포함 8~16자"
            required
            pattern="^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$"
          />
          <button>비밀번호 인증</button>
          <button onClick={onClose}>close</button>
        </form>
      )}
    </Modal>
  );
};
export default MyPage;
