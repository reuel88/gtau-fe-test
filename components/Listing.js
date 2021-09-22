import React, {useReducer} from "react";

const ACTIONS = ["View", "Reply"];

const formatAsCurrency = (int) => {
    // NOT typeof number
    if (typeof int !== "number") return int;

    return new Intl.NumberFormat('en-AU', {style: 'currency', currency: 'AUD', minimumFractionDigits: 0,}).format(int);
};

const carReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS[0]: // View
            console.log(`${ACTIONS[0]} : ${state.title}`)
            return state;
        case ACTIONS[1]: // Reply
            console.log(`${ACTIONS[1]} : ${state.title}`)
            return state;
        default:
            return state;
    }
}

const Listing = ({car = {}}) => {
    // This should be the component which renders an individual listing to the page
    const [state, dispatch] = useReducer(carReducer, car);

    return <article className="listing">
        <header className="listing__header">
            <h2 className="listing__header_title">{state.title}</h2>
            <strong className="listing__header_price">{formatAsCurrency(state.price)}</strong>
            <span className="listing__header_location">{state.location}</span>
        </header>

        {state.imgUrl && <img src={state.imgUrl} alt={state.title} className="listing__img" />}

        <p className="listing__description">
            {state.description}
        </p>

        <footer className="listing__footer">
            <button type="button" onClick={() => dispatch({type: ACTIONS[0]})}
                    className="listing__btn listing__btn-view">
                {ACTIONS[0]}
            </button>
            <button type="button" onClick={() => dispatch({type: ACTIONS[1]})}
                    className="listing__btn listing__btn-reply">
                {ACTIONS[1]}
            </button>
        </footer>
    </article>;
};

export default Listing;