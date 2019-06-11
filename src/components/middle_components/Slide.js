import React from 'react';

import { connect } from 'react-redux';
import BigSlider from './BigSlider';
import ThumbCarousel from './ThumbCarousel';
import Link from './Link';

const Slide = (props) => {
        let hostName = `${window.location.protocol}//${window.location.hostname}`;
            if(hostName === 'http://localhost') {
                hostName = 'http://animals01.vbrqx.com';
            }
        let plants = [], pictures=[], animalsInfo = [];
        if(!isEmpty(props.state)) {
            // console.log(props.state.pictures);
            plants = props.state.scenaries;
            pictures = props.state.pictures;
            animalsInfo = props.state.animals;
        }
        const getMiddlePlants = (index) => {
            let link='';
            if(plants.length > 0) {
                // console.log(props.state.scenaries)
                plants.forEach((item) => {
                    if(item.index === index) {
                        link=hostName+'/'+item.img;
                    }
                });
            }
            // console.log(link)
            return link;
        }
        // getMiddlePlants('003_015');
        const getMiddleAnimals = (index) => {
            let link='';
            if(pictures.length > 0) {
                // console.log(props.state.pictures)
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
        <div className="slider_section">
                <div style={{ backgroundPosition: 'center',backgroundRepeat: 'no-repeat', backgroundImage: `url(${getMiddlePlants('003_000')})`}} className="slide_square">
                     <div className="left_square_tree"><img src={getMiddlePlants('003_015')} alt="square tree" /></div>
                     <div className="right_square_tree"><img src={getMiddlePlants('003_016')} alt="square tree" /></div>

                     <div className="lion_light_top">
                        <a onMouseOver={getSoundEffect} id="animal_sound" className="left_animals_rel" href="#" data-sound={getAnimalsSound('001_021')} data-value={getAnimalsInfo('001_021')}><img src={getMiddleAnimals('011_009')} alt="square tree" /></a>
                     </div>
                     <div className="snake_left_side">
                        <a onMouseOver={getSoundEffect} id="animal_sound" className="mid_left_slide_animals_rel" href="#" data-sound={getAnimalsSound('001_036')} data-value={getAnimalsInfo('001_036')}><img src={getMiddleAnimals('011_015')} alt="square tree" /></a>
                     </div>
                     <div className="ostrich_left_side">
                        <a onMouseOver={getSoundEffect} id="animal_sound" className="mid_left_slide_animals_rel" href="#" data-sound={getAnimalsSound('001_024')} data-value={getAnimalsInfo('001_024')}><img src={getMiddleAnimals('011_014')} alt="square tree" /></a>
                     </div>
                     <div className="elephant_light_top">
                        <a onMouseOver={getSoundEffect} id="animal_sound" className="mid_left_slide_animals_rel" href="#" data-sound={getAnimalsSound('001_009')} data-value={getAnimalsInfo('001_009')}><img src={getMiddleAnimals('011_003')} alt="square tree" /></a>
                     </div>
                     <div className="tiger_left_side">
                        <a onMouseOver={getSoundEffect} id="animal_sound" className="mid_left_slide_animals_rel" href="#" data-sound={getAnimalsSound('001_038')} data-value={getAnimalsInfo('001_038')}><img src={getMiddleAnimals('011_017')} alt="square tree" /></a>
                     </div>
                     <div className="monkey_left_side">
                        <a onMouseOver={getSoundEffect} id="animal_sound" className="mid_left_slide_animals_rel" href="#" data-sound={getAnimalsSound('001_023')} data-value={getAnimalsInfo('001_023')}><img src={getMiddleAnimals('011_013')} alt="square tree" /></a>
                     </div>
                     <div className="elephant_light_left_side">
                        <a onMouseOver={getSoundEffect} id="animal_sound" className="mid_left_slide_animals_rel" href="#" data-sound={getAnimalsSound('001_009')} data-value={getAnimalsInfo('001_009')}><img src={getMiddleAnimals('011_012')} alt="square tree" /></a>
                     </div>



                     <div className="giraffe_right_side">
                        <a onMouseOver={getSoundEffect} id="animal_sound" className="mid_right_slide_animals_rel" href="#" data-sound={getAnimalsSound('001_043')} data-value={getAnimalsInfo('001_043')}><img src={getMiddleAnimals('011_019')} alt="square tree" /></a>
                     </div>
                     <div className="buffalo_light_right_side">
                        <a onMouseOver={getSoundEffect} id="animal_sound" className="mid_right_slide_animals_rel" href="#" data-sound={getAnimalsSound('001_006')} data-value={getAnimalsInfo('001_006')}><img src={getMiddleAnimals('011_026')} alt="square tree" /></a>
                     </div>
                     <div className="gorilla_right_side">
                        <a onMouseOver={getSoundEffect} id="animal_sound" className="mid_right_slide_animals_rel" href="#" data-sound={getAnimalsSound('001_013')} data-value={getAnimalsInfo('001_013')}><img src={getMiddleAnimals('011_028')} alt="square tree" /></a>
                     </div>
                     <div className="lion_light_right_side">
                        <a onMouseOver={getSoundEffect} id="animal_sound" className="mid_right_slide_animals_rel" href="#" data-sound={getAnimalsSound('001_021')} data-value={getAnimalsInfo('001_021')}><img src={getMiddleAnimals('011_018')} alt="square tree" /></a>
                     </div>

                     <BigSlider />
                </div>
                <ThumbCarousel />
                <Link />
                <div className="monkey_light_down">
                    <a onMouseOver={getSoundEffect} id="animal_sound" className="mid_right_slide_animals_rel" href="#" data-sound={getAnimalsSound('001_023')} data-value={getAnimalsInfo('001_023')}><img src={getMiddleAnimals('011_011')} alt="square tree" /></a>
                </div>
                <div className="lion_light_down">
                    <a onMouseOver={getSoundEffect} id="animal_sound" className="mid_right_slide_animals_rel" href="#" data-sound={getAnimalsSound('001_021')} data-value={getAnimalsInfo('001_021')}><img src={getMiddleAnimals('011_005')} alt="square tree" /></a>
                </div>
                <div className="butterfly_light_down">
                    <a onMouseOver={getSoundEffect} id="animal_sound" className="mid_right_slide_animals_rel" href="#" data-sound={getAnimalsSound('001_007')} data-value={getAnimalsInfo('001_007')}><img src={getMiddleAnimals('011_041')} alt="square tree" /></a>
                </div>
                <div className="aligator_light_down">
                    <a onMouseOver={getSoundEffect} id="animal_sound" className="mid_right_slide_animals_rel" href="#" data-sound={getAnimalsSound('001_000')} data-value={getAnimalsInfo('001_000')}><img src={getMiddleAnimals('011_042')} alt="square tree" /></a>
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
export default connect(mapStateToProps)(Slide);



// class Slide extends React.Component {
//     constructor(props) {
//         super(props);

//         this.getMiddleAnimals = this.getMiddleAnimals.bind(this);

//     }
//     getMiddleAnimals(index) {
//         const imgLink = this.props.bg_scenaries;
//         if(this.props.isLoaded) {
//             let dev_env = ''; //dev
//             let r_img = ''; //r_img
//             const main = this.props.main_data;
//             // console.log(main);
//             main.forEach(data => {
//                 // console.log(data.name);
//                 if(data.name==='env') {
//                     dev_env = data.value;
//                 }else if(data.name==='live_folder_name') {
//                     r_img = data.value;
//                 }
//             });
//             let hostName = `${window.location.protocol}//${window.location.hostname}`;
//             if(hostName === 'http://localhost') {
//                 hostName = 'http://animals01.vbrqx.com'
//             }
//             let targetImg = '';
//             // console.log(imgLink);
//             imgLink.forEach(img => {
//                 //console.log(img.index);
//                 if(img.index === index) {
//                     targetImg = img.img;
//                     if(dev_env) {
//                         targetImg = hostName+'/'+dev_env+'/'+'img'+'/'+img.img
//                     }else {
//                         targetImg = hostName+'/'+r_img+'/'+img.img;
//                     }
//                 }
//             });
//             //console.log(targetImg);
//             return targetImg;
//         }
        
//     }
//     render() {
//         // console.log(this.props)
//         // console.log(this.getMiddleAnimals('000'))
//         return(
//             <div className="slider_section">
//                 <div style={{ backgroundPosition: 'center',backgroundRepeat: 'no-repeat', backgroundImage: `url(${this.getMiddleAnimals('000')})`}} className="slide_square">
//                     {/* <div className="left_square_tree"><img src={this.getMiddleAnimals('015')} alt="square tree" /></div> */}
//                 </div>
//             </div>
//         );
//     }
// }
// export default Slide;