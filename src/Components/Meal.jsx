import {useContext } from "react";
import SaveDate from "../Contexts/SaveDate";
import ShowRec from "./ShowRec";

function Meal({line}) {
  const {setModalData} = useContext(SaveDate);
  return (

    <div className="list-row">
      <div className="list-row-img"><img className="mr-3" src={line.strMealThumb+'/preview'} alt={line.strMeal} /></div>
      <div className="list-row-desc">
        <h5 onClick={()=> setModalData(line)} className="mt-0">{line.strMeal}</h5>
      </div>
      <ShowRec />
    </div>
  );
}

export default Meal;
