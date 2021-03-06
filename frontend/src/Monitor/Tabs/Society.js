import React from 'react';

import Pops from 'Monitor/Visualizations/Society/PopsStats';
import Jobs from 'Monitor/Visualizations/Society/Jobs';
import Leaders from 'Monitor/Visualizations/Society/Leaders';
import LeaderStats from 'Monitor/Visualizations/Society/LeaderStats';
import LeaderGender from 'Monitor/Visualizations/Society/LeaderGender';

function Society(props) {
    const data = props.data;

    return (
        <div className='monitorTab'>
            <div className='row chartRow'>
                <div className='col-xl-6 col-lg-6 col-md-12 mb-3 presetChart'>
                    <Pops data={data}/>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-12 mb-3 presetChart'>
                    <Jobs data={data}/>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 presetChart'>
                    <Leaders data={data}/>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 presetChart'>
                    <LeaderStats data={data}/>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 presetChart'>
                    <LeaderGender data={data}/>
                </div>
            </div>
        </div>
    );
}

export default Society;
