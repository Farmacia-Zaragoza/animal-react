import React from 'react';
import { connect } from 'react-redux';

const FloorPlant = (props) => {
    const getPlant = (index) => {
        if( !isEmpty(props.state) ) {
            let floor_img = '';
        let hostName = `${window.location.protocol}//${window.location.hostname}`;
            if(hostName === 'http://localhost') {
                hostName = 'http://animals01.vbrqx.com'
            }
            props.state.scenaries.forEach((data) => {
                
                if(data.type === 'plant' && data.index === index) {
                    floor_img=hostName+'/'+data.img
                }
            });
        return floor_img;
        }
    }

    getPlant('003_018');
    return (
        <div className="floor_plant">
            <img src={getPlant('003_018')} alt="floor"/>
            <div style={{display: 'none'}}>
                <audio id="myAudio" src="" />
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return state.main_data;
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export default connect(mapStateToProps)(FloorPlant);