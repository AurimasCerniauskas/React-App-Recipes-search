import { useContext } from "react";
import SaveDate from "../Contexts/SaveDate";
import Line from "./Line";

function SaveRecepies(){
    const {recepies, saveModalData, setSaveModalData} = useContext(SaveDate);

    
    if(saveModalData === null){
      return;
    }

    return(
    <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Išsaugoti patiekalai</h5>
                        <button onClick={() => setSaveModalData(null)} type="button" className="btn-close"></button>
                    </div>
                    <div className="card m-4">
                      <h5 className="card-header">Receptai</h5>
                      <div className="card-body">
                         <ul className="list-group">
                           {
                              recepies?.map(m => <Line key={m.id} meal={m} />)
                           }
                        </ul>
                      </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => setSaveModalData(null)} type="button" className="btn btn-secondary">Close</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SaveRecepies;