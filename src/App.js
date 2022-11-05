import ItemList from "./components/ItemList"; // 메뉴 리스트 레이아웃
import Header from "./components/Header"; // 네비게이션 레이아웃
import Story from "./components/Story"; // 스토리 레이아웃
import data from "./JSON/ImageURL.json"; // Dummy Data 불러오기

function App({ isLogin }) {
  return (
    <div className="App">
      <Header isLogin={isLogin} />
      <Story />
      <ItemList data={data} />
    </div>
  );
}

export default App;
