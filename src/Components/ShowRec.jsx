import { useContext } from "react";
import SaveDate from "../Contexts/SaveDate";

function ShowRec() {
  const {modalData, setModalData, setSaveData} = useContext(SaveDate);

  if (modalData === null) {
    return null;
  }

  const saveMeal =() =>{
    console.log('test')
    setSaveData(modalData);
    setModalData(null);
  }


  return (
    <div className="edit-modal">
      <div className="edit-form">
        <div className="show-list-row">

          <div className="show-list-row-desc">
            <h3 className="mt-0">{modalData.strMeal}</h3>{" "}
            <p><strong>Ingredients</strong></p>
            <div className="ingred">
              <div>
                <ul>
                  {Object.entries(modalData).map((key, value) =>
                    key[0].match(/strIngredient[\d]/i) && key[1] !== "" ? (
                      <li key={value}>{key[1]}</li>
                    ) : null
                  )}
                </ul>
              </div>
              <div>
                <ul>
                  {Object.entries(modalData).map((key, value) =>
                    key[0].match(/strMeasure[\d]/i) && key[1] !== "" ? (
                      <li style={{listStyle: 'none'}} key={value}>{key[1]}</li>
                    ) : null
                  )}
                </ul>
              </div>
              <div className="show-list-row-img">
            <img
              className="mr-3"
              src={modalData.strMealThumb + "/preview"}
              alt={modalData.strMeal}
            />
          </div>
            </div>
            <p><strong>Instruction</strong></p>
            <p>{modalData.strInstructions}</p>
          </div>
        </div>
        <div>
          <button className="btn btn-outline-warning" onClick={saveMeal}>Patinka</button>
          <button className="btn btn-outline-secondary" onClick={() => setModalData(null)}>Cancel</button>
        </div>
      </div>


    </div>
  );
}
export default ShowRec;
