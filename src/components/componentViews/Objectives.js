import React, { useState, useEffect } from 'react';
import {get} from '../services/HttpSrevices.js';
import Log from '../services/Log.js';

function Objectives() {
    const [objectives, setObjectives] = useState({});

    useEffect(() => {
        getIndividualObjectives(setObjectives);
    }, []
    );

    return <div className="individual-objectives">
        {designIndividualObjectives("Objectives", "Total number of Objectives", objectives.totalObjectives, "count count-blue")}
        {designIndividualObjectives("Objectives achieved", "Objectives over 70% progress", objectives.totalObjectivesAchieved, "count count-green")}
        {designIndividualObjectives("Objectives at risk", "Objectives below 20% progress", objectives.totalObjectivesAtRisk, "count count-red")}
        {designIndividualObjectives("Objectives on track", "Objectives with 20% - 70% progress", objectives.totalObjectivesOnTrack, "count count-orange")}
    </div>
}

function getIndividualObjectives(callback) {
    get('/objectives').then(res => {
        Log.warn(res,'Objectives component');
        callback(res);
    });
}

function designIndividualObjectives(title, content, achieved, countClass) {
    return (<div className="individual-objective-containers">
        <div className="container-titles">
            {title}
        </div>
        <div className="objective-content">
            {content}
        </div>
        <div className={countClass}>
            {achieved}
        </div>
    </div>)
}
export default Objectives;