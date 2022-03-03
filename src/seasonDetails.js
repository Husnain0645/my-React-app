import './seasonDetails.css'
import React from 'react';


const seasonConfig = {
    summer: {
        text: 'lets hit the beach ',
        iconName: 'sun'
    },
    winter: {
        text: 'Bru it is cold ',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    console.log(month);
    if (month >= 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }

}


const seasonDetails = props => {

    const season = getSeason(props.lat, new Date().getMonth() + 1);
    // console.log(season)
    const { text, iconName } = seasonConfig[season];
    // console.log(iconName)

    return (
        < div className={`season-display ${season}`} >
            <i className={` icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div >)
}



export default seasonDetails;
