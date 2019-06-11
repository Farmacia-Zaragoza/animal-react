import React from 'react';
import { connect } from 'react-redux';

// components

class BigSlider extends React.Component {
    constructor(props) {
        super(props);
        this.divRef = '';
        this.state = {
            res:[],
            imgArr:[]
        }
        // console.log(this.props);
        // this.getResolution = this.getResolution.bind(this);
        // this.getResolution();
        setTimeout(() => {
            // console.log(this.props);
            let resolutions = this.props.main_data.state.site.site_images.pull02.si_slider_resolutions.value.split(' ');
            // console.log(resolutions)
            this.setState({
                imgArr: this.props.slide_photos.state.photos.map(item => {
                        let finalLink = 'ttt';
                        let hostName = `${window.location.protocol}//${window.location.hostname}`;
                        if(hostName === 'http://localhost') {
                            hostName = 'http://animals01.vbrqx.com';
                        }
                        if(window.innerWidth <= 991) {
                            let imgLink = item.img.replace(/RESOLUTION/g, resolutions[0]);
                            finalLink = hostName+'/'+imgLink;
                        }else if(window.innerWidth > 991 && window.innerWidth <= 1380) {
                            let imgLink = item.img.replace(/RESOLUTION/g, resolutions[1]);
                            finalLink = hostName+'/'+imgLink;
                        }else if(window.innerWidth > 1380 && window.innerWidth <= 1960) {
                            let imgLink = item.img.replace(/RESOLUTION/g, resolutions[2]);
                            finalLink = hostName+'/'+imgLink;
                        }else if(window.innerWidth > 1960 && window.innerWidth <= 2580) {
                            let imgLink = item.img.replace(/RESOLUTION/g, resolutions[3]);
                            finalLink = hostName+'/'+imgLink;
                        }else if(window.innerWidth > 2580 && window.innerWidth <= 3900) {
                            let imgLink = item.img.replace(/RESOLUTION/g, resolutions[4]);
                            finalLink = hostName+'/'+imgLink;
                        }
                        return finalLink;
                })
            })
        }, 1000);
    }
    
    
    componentDidMount(){
    // console.log(this.divRef)
      setTimeout(() => {
        $(this.divRef).flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#carousel"
          });
    }, 1000);
    }
  
    // shouldComponentUpdate(){
    //   return false;
    // }


    // getResolution = () => {
    //         if(!isEmpty(this.props.main_data)) {
    //             console.log(props.main_data.state.site.site_images.pull02.si_slider_resolutions.value)
    //             //resolutions = props.main_data.state.site.site_images.pull02.si_slider_resolutions.value.split(' ');
    //         }
    // // if(resolutions.length > 0) {
    // // console.log(resolutions);
    // // }
    // }

  
    render(){
        // let imgArr = [];
        // let resolutions = [];
        // let finalImgArray = [];

        // if(!isEmpty(this.props.main_data)) {
        //     // console.log(props.main_data.state.site.site_images.pull02.si_slider_resolutions.value)
        //     resolutions = this.props.main_data.state.site.site_images.pull02.si_slider_resolutions.value.split(' ');
        // }
    
        // if(!isEmpty(this.props.slide_photos)) {
        //     //  console.log(props.slide_photos.state.photos.length)
        //     this.props.slide_photos.state.photos.map(item => {
        //         imgArr.push(item.img);
        //     });
        // }
        
        // const getBigImages = () => {
        //     let hostName = `${window.location.protocol}//${window.location.hostname}`;
        //     if(hostName === 'http://localhost') {
        //         hostName = 'http://animals01.vbrqx.com';
        //     }
        //     if(imgArr.length > 0 && resolutions.length>0) {
        //     imgArr.map(imgStr => {
        //         if(window.innerWidth > 991) {
        //             let imgLink = imgStr.replace(/RESOLUTION/g, resolutions[0]);
        //             //    console.log(hostName+'/r_img/fotos/'+imgLink)
        //             finalImgArray.push(hostName+'/r_img/fotos/'+imgLink);
        //         }
        //     })
        //     }   
        // }
        // getBigImages();
        // console.log(finalImgArray);
        // console.log(this.state.res);
        // console.log(this.state.imgArr);
      return (
        <div className="slider_wrapper">
            <div id="slider" className="flexslider" ref={a => this.divRef = a}>
                <ul className="slides">
                {
                    this.state.imgArr&&this.state.imgArr.map((img, i) => {
                        return (
                            <li key={i}>
                                <img src={img} />
                            </li>
                        )
                    })
                }
                    {/* <li>
                        <img src="http://placehold.it/500x400" />
                    </li>
                    <li>
                    <img src="http://placehold.it/500x403" />
                    </li>
                    <li>
                        <img src="http://placehold.it/500x405" />
                    </li>
                    <li>
                    <img src="http://placehold.it/500x408" />
                    </li> */}
                </ul>     
            </div>
         </div>
      )
    }
  }





// const BigSlider = (props) => {
//     let imgArr = [];
//     let resolutions = [];
//     let finalImgArray = [];

//     if(!isEmpty(props.main_data)) {
//         // console.log(props.main_data.state.site.site_images.pull02.si_slider_resolutions.value)
//         resolutions = props.main_data.state.site.site_images.pull02.si_slider_resolutions.value.split(' ');
//     }
//     // if(resolutions.length > 0) {
//     // console.log(resolutions);
//     // }
   
//     if(!isEmpty(props.slide_photos)) {
//         //  console.log(props.slide_photos.state.photos.length)
//         props.slide_photos.state.photos.map(item => {
//             imgArr.push(item.img);
//         });
//     }
    
//     const getBigImages = () => {
//         let hostName = `${window.location.protocol}//${window.location.hostname}`;
//         if(hostName === 'http://localhost') {
//             hostName = 'http://animals01.vbrqx.com';
//         }
//         let totalImgLink = '';
//         if(imgArr.length > 0 && resolutions.length>0) {
//            imgArr.map(imgStr => {
//                if(window.innerWidth > 991) {
//                    let imgLink = imgStr.replace(/RESOLUTION/g, resolutions[0]);
//                 //    console.log(hostName+'/r_img/fotos/'+imgLink)
//                 finalImgArray.push(hostName+'/r_img/fotos/'+imgLink);
//                }
//            })
//         }   
//     }
//     getBigImages()
//     console.log(finalImgArray);
//     return(
//         <div className="slider_wrapper">
//             <div id="slider" class="flexslider">
//                 <ul class="slides">
//                     <li>
//                     <img src="http://placehold.it/500x400" />
//                     </li>
//                     <li>
//                     <img src="http://placehold.it/500x403" />
//                     </li>
//                     <li>
//                     <img src="http://placehold.it/500x405" />
//                     </li>
//                     <li>
//                     <img src="http://placehold.it/500x408" />
//                     </li>
//                 </ul>
//             </div>
//       </div>
//     );    
// }

const mapStateToProps = (state) => {
    return state;
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
export default connect(mapStateToProps)(BigSlider);
 