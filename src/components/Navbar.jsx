import { useData } from "../state/useData";

export default function Navbar({ data }) {
    const {flagData, setFlagData} = useData(data);
    const continents = [...new Set((data.map((recs)=>recs.continents)).flat(1))];
    const options = continents.map((recs,idx)=> <option key={'option'+idx} value={recs}>{recs}</option>)

    function getContinentData(event){
        event.preventDefault();
        const selectedoption = event.target.value;
        if(selectedoption!==""){
            const filterData = flagData.filter((recs)=> recs.continents.includes(selectedoption));
            setFlagData(filterData);
        }
        else{
            setFlagData(data);
        }
    }


    return (
        <div id="navbar">
            <nav>
                <span>FlagFact</span>
                <select id="continent-select" onChange={(event)=>getContinentData(event)}>
                    <option key={"none"} value="">None</option>
                    {options}
                </select>
            </nav>
        </div>
    )
}