import { useState } from "react";
import Meal from "./Meal";

function Search() {

  const [text, setText] = useState('');
  const [findRes, setFindRes] = useState(null);

  const searchMeal = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
    .then(res => res.json())
    .then(data => setFindRes(data))
    .catch(_ => setFindRes('Error'));
    setText('');
  }

  return(
    <>
    <div className="row">
    <div className="col-3"></div>
    <input className="col-4" placeholder="Search meal by name, e.g 'pie'" value={text} onChange={(e)=> setText(e.target.value)}></input> 
    <button disabled={text ? false : true} className="col-3" onClick={searchMeal}>Receptų paieška</button>
    <button>Išsaugoti patiekalai</button>

  </div>
  <div className="row">
    {
       findRes !== null ? findRes.meals.map(line => <div className="list"> <Meal key={line.idMeal}  line={line}/></div>) : console.log("prašome palaukti")
    }
    </div>
  </>
  )
}

export default Search;