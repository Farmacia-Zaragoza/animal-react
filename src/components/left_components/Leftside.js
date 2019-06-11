import React from 'react';
import { connect } from 'react-redux';
//components
import LeftAnimals from './Left_animals';

const Leftside = (props) => {
    const randnum = parseInt((Math.random()*3));
    // console.log(isEmpty(props.state))
    const getRandomTree = () => {
        if( !isEmpty(props.state) ) {
            let hostName = `${window.location.protocol}//${window.location.hostname}`;
            if(hostName === 'http://localhost') {
                hostName = 'http://animals01.vbrqx.com'
            }
            let imgLink='';

            //  console.log(props.state.scenaries);
            const scenaries = props.state.scenaries;
            scenaries.forEach((item) => {
                if(item.type === 'plant' && randnum === 0 && item.index === '003_023') {
                    imgLink = hostName+'/'+item.img;
                }else if(item.type === 'plant' && randnum === 1 && item.index === '003_021') {
                    imgLink = hostName+'/'+item.img;
                }else if(item.type === 'plant' && randnum === 2 && item.index === '003_014') {
                    imgLink = hostName+'/'+item.img;
                }
            });
            return imgLink;
        };
    }

    return(
        <div style={{ backgroundPosition: 'left', backgroundSize: 'cover',backgroundRepeat: 'no-repeat', backgroundImage: `url(${getRandomTree()})`}} className="left_side">
            <LeftAnimals random={randnum} />
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

export default connect(mapStateToProps)(Leftside);