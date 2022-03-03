import React from 'react';

const spinner = props => {
    return (
        <div className="ui active dimmer" >
            <div className="ui text loader" > Loading..</div >
        </div >
    );
};

export default spinner;
