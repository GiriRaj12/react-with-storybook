import React from 'react';

function ActivityView(props){
    let e = props.element;

    return <div className="individual-activity-logs" key={e.id}>
        <div className="activity-log-name-holder">
            {String(e.entityName).substring(0, 1)}
        </div>
        <div className="activity-log-details-holder">
            <p className="activity-name">{e.entityName}</p>
            <p className="activity-details">{e.objective.title}</p>
            <p className="activity-date">{new Date(e.objective.createdDate).toDateString()}</p>
        </div>
    </div>
}

export default ActivityView;