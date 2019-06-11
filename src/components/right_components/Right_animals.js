import React from 'react';
import { connect } from 'react-redux';

const RightAnimals = (props) => {
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
    // getAnimalsPic('011_004');
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
        <div className="right_animals_wrapper">
                <a onMouseOver={getSoundEffect} id="animal_sound" className="right_zebra_kid right_animals_rel" href="#" data-sound={getAnimalsSound('001_042')} data-value={getAnimalsInfo('001_042')}><img src={getAnimalsPic('011_035')} alt="zebra" /></a>
                <a onMouseOver={getSoundEffect} id="animal_sound" className="right_butterfly right_animals_rel" href="#" data-sound={getAnimalsSound('001_007')} data-value={getAnimalsInfo('001_007')}><img src={getAnimalsPic('011_040')} alt="butterfly" /></a>
                <a onMouseOver={getSoundEffect} id="animal_sound" className="right_parrot right_animals_rel" href="#" data-sound={getAnimalsSound('001_028')} data-value={getAnimalsInfo('001_028')}><img src={getAnimalsPic('011_032')} alt="parrot" /></a>
                <a onMouseOver={getSoundEffect} id="animal_sound" className="right_snake right_animals_rel" href="#" data-sound={getAnimalsSound('001_036')} data-value={getAnimalsInfo('001_036')}><img src={getAnimalsPic('011_038')} alt="snake" /></a>
                <a onMouseOver={getSoundEffect} id="animal_sound" className="right_lion_head right_animals_rel" href="#" data-sound={getAnimalsSound('001_021')} data-value={getAnimalsInfo('001_021')}><img src={getAnimalsPic('011_010')} alt="lion head" /></a>
                <a onMouseOver={getSoundEffect} id="animal_sound" className="right_ziraffe_kid right_animals_rel" href="#" data-sound={getAnimalsSound('001_043')} data-value={getAnimalsInfo('001_043')}><img src={getAnimalsPic('011_001')} alt="ziraffe kid" /></a>
                <a onMouseOver={getSoundEffect} id="animal_sound" className="hippopotamus right_animals_rel" href="#" data-sound={getAnimalsSound('001_014')} data-value={getAnimalsInfo('001_014')}><img src={getAnimalsPic('011_006')} alt="hippopotamus" /></a>
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
export default connect(mapStateToProps)(RightAnimals);
















// class RightAnimals extends React.Component {
//     constructor(props) {
//         super(props);

//         // this.getRightAnimals = this.getRightAnimals.bind(this);
//     }
//     // getRightAnimals(index) {
//     //     const imgLink = this.props.animals_pictures;
//     //     if(this.props.load) {
//     //         let dev_env = ''; //dev
//     //         let r_img = ''; //r_img
//     //         const main = this.props.main_data;
//     //         // console.log(main);
//     //         main.forEach(data => {
//     //             // console.log(data.name);
//     //             if(data.name==='env') {
//     //                 dev_env = data.value;
//     //             }else if(data.name==='live_folder_name') {
//     //                 r_img = data.value;
//     //             }
//     //         });
//     //         let hostName = `${window.location.protocol}//${window.location.hostname}`;
//     //         if(hostName === 'http://localhost') {
//     //             hostName = 'http://animals01.vbrqx.com'
//     //         }
//     //         let targetImg = '';
//     //         // console.log(imgLink);
//     //         imgLink.forEach(img => {
//     //             // console.log(img.index);
//     //             if(img.index === index) {
//     //                 targetImg = img.img;
//     //                 if(dev_env) {
//     //                     targetImg = hostName+'/'+dev_env+'/'+'img'+'/'+img.img
//     //                 }else {
//     //                     targetImg = hostName+'/'+r_img+'/'+img.img;
//     //                 }
//     //             }
//     //         });
//     //         //console.log(targetImg);
//     //         return targetImg;
//     //     }
        
//     // }
//     render() {
//         //console.log(this.props.animals_pictures);
//         //const animals_img = this.getRightAnimals('008');
//         //console.log(animals_img);
//         return(
//             <div className="right_animals_wrapper">
//                 {/* <a className="right_zebra_kid" href="#"><img src={} alt="zebra" /></a>
//                 <a className="right_butterfly" href="#"><img src={} alt="butterfly" /></a>
//                 <a className="right_parrot" href="#"><img src={} alt="parrot" /></a>
//                 <a className="right_snake" href="#"><img src={} alt="snake" /></a>
//                 <a className="right_lion_head" href="#"><img src={} alt="lion head" /></a>
//                 <a className="right_ziraffe_kid" href="#"><img src={} alt="ziraffe kid" /></a>
//                 <a className="hippopotamus" href="#"><img src={} alt="hippopotamus" /></a> */}
//             </div>
//         );
//     }
// }

// export default RightAnimals;
