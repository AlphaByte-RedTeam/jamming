import './Track.css';

const Track = () => {

    const renderAction = (isRemoval) => {
        const removal = isRemoval === true ? '-' : '+';
        return removal;
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>Track Name {/* Track name change later */}</h3>
                <p>{/* track artist */} | {/* track album */}</p>
            </div>
            <button className="Track-action">{renderAction}</button>
        </div>
    );
}

export default Track;