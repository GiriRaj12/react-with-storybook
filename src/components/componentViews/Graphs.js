import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {get} from '../services/HttpSrevices.js';
import {chartOptionsTemplate} from '../ComponentConstants.js';

function Graphs(props) {
    const [activityLog, setActivitiyLog] = useState([]);

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        getActivity(setActivitiyLog);
        getChartsData(setChartOptions);
    }, []);

    return (<div className="graphs-main-container">
        <div className="graph-viewer">
            <div className="container-titles">
                Score Graph
            </div>
            <div className="chart-holder">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                />
            </div>
        </div>
        <div className="activity-log-viewer">
            <div className="container-titles">
                Activity Log
            </div>
            <div className="activity-logs-holder">
                {activityLog.map(e => getActivityView(e))}
            </div>
        </div>
    </div>)
}

function getActivityView(e) {

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

function getActivity(callback) {
    get("/activityLog")
        .then(res => {
            callback(res);
        })
}

function getChartsData(callback) {
    get("/graphData")
        .then(res => {
            chartOptionsTemplate.categories = res.message.quarter;
            chartOptionsTemplate.series[0].data = res.message.objectiveCount;
            chartOptionsTemplate.series[1].data = res.message.okrScore;
            callback(chartOptionsTemplate);
        })
}
export default Graphs;
export { getChartsData, getActivityView, getActivity }