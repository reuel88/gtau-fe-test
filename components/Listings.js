import React, {useEffect, useState} from "react";
import Listing from "./Listing";

const formatResults = (length = 0, keyword = "", location = "") => {
    if (length === 1) return <>
        <strong className="listings__header_subtitle__emphasis">{`${length} result`}</strong> for <strong
        className="listings__header_subtitle__emphasis">{keyword}</strong> in <strong
        className="listings__header_subtitle__emphasis">{location}</strong>
    </>;

    return <>
        <strong className="listings__header_subtitle__emphasis">{`${length} results`}</strong> for <strong
        className="listings__header_subtitle__emphasis">{keyword}</strong> in <strong
        className="listings__header_subtitle__emphasis">{location}</strong>
    </>;
}

const Listings = ({dataEndpoint, keyword, location}) => {
    // This component should make a request to the api endpoint (props.dataEndpoint)
    // then render the result as set of listings as per the design mocks
    // check props passed in from parent for other values that you may need to use

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [cars, setCars] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(true);

        (async function (dataEndpoint, setLoading, setError, setCars) {
            try {
                const response = await fetch(dataEndpoint);
                const data = await response.json();

                setCars(data);
                setLoading(false);
            } catch (e) {
                setError(e.message)
                setLoading(false);
            }
        })(dataEndpoint, setLoading, setError, setCars);

    }, [dataEndpoint])

    if (loading) return <div>...Loading</div>;

    if (!!!error) return <div>Error occurred please try again</div>;

    return (
        <section>
            <header className="listings__header">
                <h1 className="listings__header_title">Search Results</h1>
                <h2 className="listings__header_subtitle">{formatResults(cars.length, keyword, location)}</h2>
            </header>
            <div className="listings__grid">
                {cars.map((car, i) => <Listing key={i} car={car} />)}
            </div>
        </section>
    );
};

export default Listings;
