import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {get} from '../services/HttpSrevices.js';
import {chartOptionsTemplate} from '../ComponentConstants.js';
import ActivityView from './ActivityView.js';
import Log from '../services/Log.js';

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
                {activityLog.map(e => <ActivityView element={e}></ActivityView>)}
            </div>
        </div>
    </div>)
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
            Log.info(res,"Charts Component");
            callback(chartOptionsTemplate);
        })
}
export default Graphs;
export { getChartsData, getActivity }