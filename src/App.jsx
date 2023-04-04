//Style 
import "./styles/global/style.css";
//Node Module
import { useEffect, useState } from "react";
//Projects
import Loading from "./components/Loading";
import DisplayFlag from "./components/DisplayFlag";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { useData } from "./state/useData";


export default function App() {
  // Local state
  const [apiData, setAPIData] = useState([]);
  const [status, setStatus] = useState(0);   //0:Loading, 1:success, 2:error
  const {setFlagData} = useData();

  //Properties
  const apiURL = "https://restcountries.com/v3.1/all";

  // Methods
  useEffect(() => {
    onLoad();
  }, []);

  //fetch data from apiURL in promise(async/await) based method
  async function onLoad() {
    const request = await fetch(apiURL).catch(onFail);
    const data = await request.json();

    onSucess(data);
  }

  // get invokes, if api fetch has successful.
  function onSucess(data) {
    setStatus(1);
    setAPIData(data);
    setFlagData(data);
  }

  // get invokes, if api fetch failed.
  function onFail() {
    setStatus(2);
  }



  return (<div>
    {(status === 0) && <Loading />}
    {(status === 2) && <h1>Error while Fetch Data...</h1>}
    {
      (status === 1) &&
      <div className="app">
        <Navbar data={apiData}/>
        <DisplayFlag data={apiData} />
        <Modal />
      </div>
    }
  </div>)
}


