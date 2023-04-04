import { useData } from "../state/useData";
import { useModal } from "../state/useModal";
import FlagDetails from "./FlagDetails";
import { FiSearch } from "react-icons/fi";


export default function DisplayFlag({ data }) {

    const { setModal } = useModal();
    const {flagData, setFlagData} = useData();

    const FlagCard = flagData.map((recs, idx) =>
        <div className="card" key={'dflag' + idx} id={'dflag' + idx}>
            <img src={recs.flags.png} alt={recs.name.official + 'flag'} />
            <h1>{recs.name.common}</h1>
            <button onClick={() => setModal(<FlagDetails key={'card' + idx} data={recs} />)} />
        </div>
    );

    function searchFlag(event) {
        event.preventDefault();
        const searchkey = event.target.value;
        if (searchkey!=='') {
            const filterData = flagData.filter((recs) => {
                const searchTerm = searchkey.toLowerCase();
                const orgdata = recs.name.common.toLowerCase();
                return (searchTerm && orgdata.startsWith(searchTerm));
            });
            setFlagData(filterData);
        }
        else {
            setFlagData(data);
        }
    }

    return (
        <div id="displayflag">
            <div className="search">
                <input type="text" id="search-box" onChange={(event) => searchFlag(event)} />
                <label htmlFor="search-box"><FiSearch className="reacticons" /></label>
            </div>
            <div className="container">
                {FlagCard}
            </div>
        </div>
    )
}