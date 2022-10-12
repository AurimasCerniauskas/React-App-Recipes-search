import { useContext, useState } from "react";
import SaveDate from "../Contexts/SaveDate";
import Message from "./Message";

function ShowRec() {
  const { recepies, modalData, setModalData, setSaveData } =
    useContext(SaveDate);
  const [msg, setMsg] = useState(null);

  if (modalData === null) {
    return null;
  }

  const saveMeal = () => {
    recepies.find((a) => a.idMeal === modalData.idMeal)
      ? makeMsg("Toks patiekalas jau yra", "crimson")
      : setSaveData(modalData) || makeMsg("Patiekalas išsaugotas", "grey");
  };

  const makeMsg = (text, color) => {
    setMsg({ text, color });
    setTimeout(() => {
      setMsg(null);
      setModalData(null);
    }, 2000);
  };

  return (
    <div className="edit-modal">
      <div className="edit-form">
        <div className="show-list-row">
          <div className="show-list-row-desc">
            <h3 className="mt-0">{modalData.strMeal}</h3>{" "}
            <div className="ingred">
              <div className="ingred__img">
                <img
                  className="mr-3"
                  src={modalData.strMealThumb + "/preview"}
                  alt={modalData.strMeal}
                />
              </div>
              <div className="ingred__group">
                <div className="ingred__group__list">
                  <p style={{ margin: 0 }}>
                    <strong>Ingredients</strong>
                  </p>
                  <ul>
                    {Object.keys(modalData)
                      .filter(
                        (key) =>
                          key.includes("strIngredient") &&
                          modalData[key]?.trim("" || null)
                      )
                      .map((key, index) => (
                        <li key={index}> {modalData[key]}</li>
                      ))}
                  </ul>
                </div>
                <div className="ingred__group__measures">
                  <p style={{ margin: "0 10px" }}>Measures</p>
                  <ul>
                    {Object.keys(modalData)
                      .filter(
                        (key) =>
                          key.includes("strMeasure") &&
                          modalData[key]?.trim("" || null)
                      )
                      .map((key, index) => (
                        <li key={index}> {modalData[key]}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="instruction">
              <p>
                <strong>Instruction</strong>
              </p>
              <p>{modalData.strInstructions}</p>
            </div>
          </div>
        </div>
        <div className="btn-grp">
          <button className="btn btn-outline-warning" onClick={saveMeal}>
            Patinka
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => setModalData(null)}
          >
            Cancel
          </button>
        </div>
      </div>

      <Message msg={msg} setMsg={setMsg} />
    </div>
  );
}
export default ShowRec;
