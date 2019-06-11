import React from 'react';
import RightAnimals from './Right_animals';
import { connect } from 'react-redux';



const Rightside = (props) => {
    const randnum = parseInt((Math.random()*3));
    // console.log(isEmpty(props.state))
    const getRandomTree = () => {
        if( !isEmpty(props.state) ) {
            let hostName = `${window.location.protocol}//${window.location.hostname}`;
            if(hostName === 'http://localhost') {
                hostName = 'http://animals01.vbrqx.com'
            }
            let imgLink='';

            // console.log(props.state.scenaries);
            const scenaries = props.state.scenaries;
            scenaries.forEach((item) => {
                if(item.type === 'plant' && randnum === 0 && item.index === '003_017') {
                    imgLink = hostName+'/'+item.img;
                }else if(item.type === 'plant' && randnum === 1 && item.index === '003_019') {
                    imgLink = hostName+'/'+item.img;
                }else if(item.type === 'plant' && randnum === 2 && item.index === '003_019') {
                    imgLink = hostName+'/'+item.img;
                }
            });
            return imgLink;
        };
    }

    return (
        <div style={{ backgroundPosition: 'right', backgroundSize: 'cover',backgroundRepeat: 'no-repeat', backgroundImage: `url(${getRandomTree()})`}} className="right_side">
            <RightAnimals random={randnum} />
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

export default connect(mapStateToProps)(Rightside);
