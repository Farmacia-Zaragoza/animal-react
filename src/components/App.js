import React from 'react';
import { connect } from 'react-redux';

//components
import Leftside from './left_components/Leftside';
import Rightside from './right_components/Rightside';
import Middleside from './middle_components/Middleside';
import FloorPlant from './Floor_plant';
import EliptricalFlag from './eliptrical_flag';
import Flagbutton from './Flag_button';


const App = (props) => {
    // console.log(isEmpty(props.state))
        const getRandomBg = () => {
            if( !isEmpty(props.state) ) {
                let hostName = `${window.location.protocol}//${window.location.hostname}`;
                if(hostName === 'http://localhost') {
                    hostName = 'http://animals01.vbrqx.com'
                }
                let totalItem=[];

                // console.log(props.state.scenaries);
                const scenaries = props.state.scenaries;
                scenaries.forEach((item, index) => {
                    if(item.type === 'screen') {
                        // console.log(item.name, index);
                        totalItem.push(item.img);
                        
                    }
                });
                // console.log(totalItem.length);
                const randnum = parseInt((Math.random()*totalItem.length));
                // console.log(randnum);
                return `${hostName}/${totalItem[randnum]}`;
            };
        }
        return(
            <div style={{backgroundSize: '100% 100%',backgroundImage: `url(${getRandomBg()})`}} className="main_container">
                {window.innerWidth > 991 && <Leftside />}

                <Middleside />

                {window.innerWidth > 991 && <Rightside />}
                <FloorPlant />
                <EliptricalFlag />
                <Flagbutton />
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

export default connect(mapStateToProps)(App);