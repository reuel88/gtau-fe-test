import Listing from "./Listing";
import React from "react";

const ListingsGrid = ({cars, loading}) => {
    if (loading) {
        const skeletons = new Array(6).fill("")

        console.log(skeletons.length)
        return <div className="listings__grid">
            {skeletons.map((skeleton, i) => <div key={i} className="listing-skeleton" />)}
        </div>
    }

    if (cars.length === 0) return <div className="listings__no_results_found">
        <h2>No Results Found</h2>
    </div>

    return <div className="listings__grid">
        {cars.map((car, i) => <Listing key={i} car={car} />)}
    </div>
}

export default ListingsGrid