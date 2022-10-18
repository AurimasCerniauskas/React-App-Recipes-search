import { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import SaveDate from "../Contexts/SaveDate";
import Meal from "./Meal";

function Search() {
  const [text, setText] = useState("");
  const [findRes, setFindRes] = useState(null);
  const { setSaveModalData, recepies } = useContext(SaveDate);
  const inputField =useRef();
  const findBtn = useRef();

  const searchMeal = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
      .then((res) => res.json())
      .then((data) => setFindRes(data))
      .catch((_) => setFindRes("Error"));
    setText("");
    inputField.current.focus();
  };
  const handleKeypress = (e) => {
    if(e.keyCode === 13){
      findBtn.current.focus();
    }
  }
  useEffect(()=>{
    inputField.current.focus();
  }, [])

  return (
    <>
      <div className="row gx-5 mb-4 field-group offset-md-1">
        <input className="col-sm-6 col-md-4 px-2" placeholder="Search meal by name, e.g 'pie'" ref={inputField} value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleKeypress}/>
        <button disabled={text ? false : true} className="col-sm-6 col-md-2 px-2" onClick={searchMeal} ref={findBtn}>Receptų paieška</button>
        <button className="btn btn-success col-sm-6 col-md-3 offset-md-1" onClick={() => setSaveModalData(recepies)}>Išsaugoti receptai</button>
      </div>
      <div className="row mb-4">
        {findRes !== null
          ? findRes.meals !== null ? findRes.meals?.map((line) => (
              <div key={line.idMeal} className="col-sm-4 col-md-4 col-lg-3 list">
                {" "}
                <Meal line={line} />
              </div>
          )) : <h2>Nerastas patiekalas</h2>
          : console.log("prašome palaukti")}
      </div>
    </>
  );
}

export default Search;
