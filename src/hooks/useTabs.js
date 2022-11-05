import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const content = [
  {
    tab: "로그인",
    content: <LoginForm />,
  },
  {
    tab: "회원가입",
    content: <RegisterForm />,
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setcurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setcurrentIndex,
  };
};

const UseTabs = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <>
      <div className="UseTabs">
        {content.map((section, index) => (
          <button key={index} onClick={() => changeItem(index)}>
            {section.tab}
          </button>
        ))}
      </div>
      {currentItem.content}
    </>
  );
};

export default UseTabs;
