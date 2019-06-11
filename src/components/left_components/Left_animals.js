import React from 'react';
import { connect } from 'react-redux';

const LeftAnimals = (props) => {
    // console.log(props.random)
    let hostName = `${window.location.protocol}//${window.location.hostname}`;
        if(hostName === 'http://localhost') {
            hostName = 'http://animals01.vbrqx.com';
        }
    let pictures = [];
    let animalsInfo = [];
    if(!isEmpty(props.state)) {
        // console.log(props.state.pictures);
        pictures = props.state.pictures;
        animalsInfo = props.state.animals;
    }
    const getAnimalsPic = (index) => {
        let link='';
        if(pictures.length>0) {
            pictures.forEach((item) => {
                if(item.index === index) {
                    link=hostName+'/'+item.img;
                }
            });
        }
        // console.log(link);
        return link;
    }

    const getAnimalsInfo = (index) => {
        let link='';
        if(animalsInfo.length>0) {
            animalsInfo.forEach((item) => {
                if(item.index === index) {
                    link=item.value;
                }
            });
        }
        // console.log(link);
        return link;
    }
    const getAnimalsSound = (index) => {
        let link='';
        if(animalsInfo.length>0) {
            animalsInfo.forEach((item) => {
                if(item.index === index) {
                    link=hostName+'/'+item.sound;
                }
            });
        }
        // console.log(link);
        return link;
    }
    // getAnimalsSound('001_001');
    // getAnimalsInfo('001_001');
    const getSoundEffect = (e) =>{
        if(e.target.parentElement.id === 'animal_sound') {
            const soundValue = e.target.parentElement.getAttribute('data-sound');
            const myAudio = document.querySelector('#myAudio');
            myAudio.src = soundValue;
            myAudio.play();
        }

    }
    return(
        <div className="left_animals_wrapper">
            <a onMouseOver={getSoundEffect} id="animal_sound" className="left_lion_kid left_animals_rel" href="#" data-sound={getAnimalsSound('001_021')} data-value={getAnimalsInfo('001_021')}><img src={getAnimalsPic('011_004')} alt="lion" /></a>
            <a onMouseOver={getSoundEffect} className="left_toucan_big left_animals_rel" id="animal_sound" href="#" data-sound={getAnimalsSound('001_039')} data-value={getAnimalsInfo('001_039')}><img src={getAnimalsPic('011_008')} alt="toucan big" /></a>
            {
                props.random===1 && <a onMouseOver={getSoundEffect} className="left_rhino left_animals_rel" id="animal_sound" href="#" data-sound={getAnimalsSound('001_033')} data-value={getAnimalsInfo('001_033')}><img src={getAnimalsPic('011_007')} alt="rhino" /></a>
            }
            {
                props.random===1 && <a onMouseOver={getSoundEffect} className="left_toucan_small left_animals_rel" id="animal_sound" href="#" data-sound={getAnimalsSound('001_039')} data-value={getAnimalsInfo('001_039')}><img src={getAnimalsPic('011_031')} alt="toucan" /></a>
            }
            <a onMouseOver={getSoundEffect} className="left_zebra_big left_animals_rel" href="#" id="animal_sound" data-sound={getAnimalsSound('001_042')} data-value={getAnimalsInfo('001_042')}><img src={props.random<=1?getAnimalsPic('011_036'):getAnimalsPic('011_035')} alt="zebra" /></a>
            <a onMouseOver={getSoundEffect} className="left_panda_head left_animals_rel" href="#" id="animal_sound" data-sound={getAnimalsSound('001_025')} data-value={getAnimalsInfo('001_025')}><img src={getAnimalsPic('011_033')} alt="panda" /></a>
            <a onMouseOver={getSoundEffect} className="left_giraffe_big left_animals_rel" href="#" id="animal_sound" data-sound={getAnimalsSound('001_043')} data-value={getAnimalsInfo('001_043')}><img src={getAnimalsPic('011_034')} alt="giraffe" /></a>
            <a onMouseOver={getSoundEffect} className="left_snake_small left_animals_rel" href="#" id="animal_sound" data-sound={getAnimalsSound('001_036')} data-value={getAnimalsInfo('001_036')}><img src={getAnimalsPic('011_039')} alt="snake" /></a>
            <a onMouseOver={getSoundEffect} className="left_deer left_animals_rel" href="#" id="animal_sound" data-sound={getAnimalsSound('001_008')} data-value={getAnimalsInfo('001_008')}><img src={getAnimalsPic('011_002')} alt="deer" /></a>

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
export default connect(mapStateToProps)(LeftAnimals);

