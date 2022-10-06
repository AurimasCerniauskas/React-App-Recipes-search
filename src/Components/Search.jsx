import { useContext } from "react";
import { useState } from "react";
import SaveDate from "../Contexts/SaveDate";
import Meal from "./Meal";

function Search() {
  const [text, setText] = useState("");
  const [findRes, setFindRes] = useState(null);
  const { setSaveModalData, recepies } = useContext(SaveDate);

  const searchMeal = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
      .then((res) => res.json())
      .then((data) => setFindRes(data))
      .catch((_) => setFindRes("Error"));
    setText("");
  };

  return (
    <>
      <div className="row gx-3 mb-4">
        <input className="col-4 px-2" placeholder="Search meal by name, e.g 'pie'" value={text} onChange={(e) => setText(e.target.value)}/>
        <button disabled={text ? false : true} className="col-2 px-2" onClick={searchMeal}>Receptų paieška</button>
        <button className="btn btn-success col-3 offset-1" onClick={() => setSaveModalData(recepies)}>Mėgstami patiekalai</button>
      </div>
      <div className="row mb-4">
        {findRes !== null
          ? findRes.meals.map((line) => (
              <div key={line.idMeal} className="col-3 list">
                {" "}
                <Meal line={line} />
              </div>
            ))
          : console.log("prašome palaukti")}
      </div>
    </>
  );
}

export default Search;
