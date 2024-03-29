import './Track.css';
import React from 'react';

class Track extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    renderAction = (isRemoval) => {
        const removal = isRemoval === true ? '-' : '+';
        return removal;
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <button className="Track-action">{this.renderAction}</button>
            </div>
        );
    }
}

export default Track;