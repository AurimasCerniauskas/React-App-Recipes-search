import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";
import SaveRecepies from "./Components/SaveRecepies";
import Search from "./Components/Search";
import SaveDate from "./Contexts/SaveDate";
import {create, destroy, read} from './Function/localStorage';

const key = 'meal';

function App() {
  const [recepies, setRecepies] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [saveData, setSaveData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [saveModalData, setSaveModalData] = useState(null);

  // read
  useEffect(()=>{
    setRecepies(read(key));
  }, [lastUpdate]);

  // save
  useEffect(() => {
    if (null === saveData) {
      return;
    }
    create(key, saveData);
    setLastUpdate(Date.now());
  }, [saveData]);

    // delete
    useEffect(() => {
      if (null === deleteData) {
        return;
      }
      destroy(key, deleteData.id);
      setLastUpdate(Date.now());
    }, [deleteData]);

  return (
    <SaveDate.Provider value={{
      modalData,
      saveModalData,
      recepies,
      setModalData,
      setSaveData,
      setDeleteData,
      setSaveModalData
    }}>
    <main className="App">
      <header><h1>Receptai</h1></header>
      <div className="container">
        <Search />
      </div>
    </main>
    <SaveRecepies />
    </SaveDate.Provider>
  );
}

export default App;
