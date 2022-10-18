import { useContext } from "react";
import SaveDate from "../Contexts/SaveDate";

function Line({ meal }) {
  const { recepies, setSaveModalData, setDeleteData } = useContext(SaveDate);

  const deleteRecord = () => {
    setDeleteData(meal);
    setSaveModalData(recepies);
  };

  return (
    <li className="list-group-item">
      <div className="line">
        <div className="line__content">
          <div className="line__content__head">
            <div className="line__content__info">
              <div className="img-bin">
                <img
                  src={meal.strMealThumb + "/preview"}
                  alt={meal.strMeal}
                ></img>
              </div>
            </div>
            <div>
              <div className="line__content__title">
                <h4>{meal.strMeal}</h4>
              </div>
              <div className="line__content__info">
                <h5>{meal.strCategory}</h5>
              </div>
            </div>
          </div>
          <div className="line__content__info">{meal.strInstructions}</div>
        </div>
        <div className="line__buttons">
          <button
            onClick={deleteRecord}
            type="button"
            className="btn btn-outline-danger"
          >
            Ištrinti
          </button>
        </div>
      </div>
    </li>
  );
}

export default Line;
