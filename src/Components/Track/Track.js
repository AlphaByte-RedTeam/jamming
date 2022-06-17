import './Track.css';
import React from 'react';

class Track extends React.Component {

    renderAction = (isRemoval) => {
        const removal = isRemoval === true ? '-' : '+';
        return removal;
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>Track Name {/* Track name change later */}</h3>
                    <p>{/* track artist */} | {/* track album */}</p>
                </div>
                <button className="Track-action">{this.renderAction}</button>
            </div>
        );
    }
}

export default Track;