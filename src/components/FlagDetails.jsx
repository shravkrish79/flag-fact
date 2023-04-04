import LocationMap from "./Locationmap";

export default function FlagDetails({ data }) {

    function getList(propName) {
        let result = '';
        for (var i in propName) {
            result = result + ' ' + i;
        }
        result = result.trim().replace(' ', ',').toUpperCase();
        return result;
    }

    return (
        <div className="flag-details">
            <h1>{data.name.common}</h1>
            <div className="flag">
                <img src={data.flags.svg} alt={data.name.common + ' flag'} />
            </div>
            <h2><span>Capital:</span> {data.capital}</h2>
            <h2><span>Population:</span> {data.population}</h2>
            <h2><span>Currency:</span> {getList(data.currencies)}</h2>
            <h2><span>Region:</span> {data.region}</h2>
            <h2><span>Sub Region:</span> {data.subregion}</h2>
            <h2><span>Continents:</span> {data.continents}</h2>
            <h2><span>Timezones:</span> {data.timezones}</h2>
            <h2><span>Languages:</span> {getList(data.languages)}</h2>

            <div className='map'>
                <LocationMap data={data.latlng} locationName={data.name.common}/>
            </div>
        </div>
    )
}