import "./App.scss";
import Search from "./Components/Search";

function App() {

  return (
    <main className="App">
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 ml-4 mb-4"><h1 style={{textAlign: "center"}}>Patiekalų paieška</h1></div>
         </div>
        <Search />
      </div>
    </main>
  );
}

export default App;
