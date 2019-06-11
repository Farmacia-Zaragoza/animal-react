import React from 'react';
import { connect } from 'react-redux';

// components

class ThumbCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.divRef = '';
        this.state = {
            res:[],
            imgArr:[]
        }
        console.log(this.props);
        // this.getResolution = this.getResolution.bind(this);
        // this.getResolution();
        setTimeout(() => {
            console.log(this.props);
            let resolutions = this.props.main_data.state.site.site_images.pull02.si_carousel_resolutions.value.split(' ');
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
                        // console.log(finalLink);
                        return finalLink;
                })
            })
        }, 1000);
    }
    
    
    componentDidMount(){
        setTimeout(() => {
            $(this.divRef).flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 100,
                itemMargin: 5,
                asNavFor: '#slider'
            });
        }, 1000);
    }


  
    render(){
        // console.log(this.state.res);
        // console.log(this.state.imgArr);
      return (
        <div className="thumbCarousel_wrapper">
            <div id="carousel" className="flexslider" ref={a => this.divRef = a}>
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
                    <img src="http://via.placeholder.com/200x150" />
                    </li>
                    <li>
                    <img src="http://via.placeholder.com/200x151" />
                    </li>
                    <li>
                    <img src="http://via.placeholder.com/200x152" />
                    </li>
                    <li>
                    <img src="http://via.placeholder.com/200x153" />
                    </li>
                    <li>
                    <img src="http://via.placeholder.com/200x153" />
                    </li>
                    <li>
                    <img src="http://via.placeholder.com/200x153" />
                    </li>
                    <li>
                    <img src="http://via.placeholder.com/200x153" />
                    </li>
                    <li>
                    <img src="http://via.placeholder.com/200x153" />
                    </li> */}
                </ul>
            </div>
        </div>
      )
    }
  }


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
export default connect(mapStateToProps)(ThumbCarousel);
 

// // components

// const ThumbCarousel = (props) => {
//         const showRandomTitle = () => {
//             if(!isEmpty(props.state)) {
//                 let site = props.state.site.site_general;
//                 // console.log(site.pull02.sg_site_title.value);
//                 let site_theme_name = site.pull02.sg_site_name.value;
//                 let title_hover = site.pull02.sg_site_title.value;
//                 const randNum = Math.floor(Math.random()*3);
                
//                 return <h4 title={title_hover ? title_hover:'no title'}>{site_theme_name?site_theme_name:'no name'}</h4>;
//             }
//     }
//     return(
//         <div className="thumbCarousel_wrapper">
//             <div id="carousel" className="flexslider">
//                 <ul className="slides">
//                     <li>
//                     <img src="http://via.placeholder.com/200x150" />
//                     </li>
//                     <li>
//                     <img src="http://via.placeholder.com/200x151" />
//                     </li>
//                     <li>
//                     <img src="http://via.placeholder.com/200x152" />
//                     </li>
//                     <li>
//                     <img src="http://via.placeholder.com/200x153" />
//                     </li>
//                     <li>
//                     <img src="http://via.placeholder.com/200x153" />
//                     </li>
//                     <li>
//                     <img src="http://via.placeholder.com/200x153" />
//                     </li>
//                     <li>
//                     <img src="http://via.placeholder.com/200x153" />
//                     </li>
//                     <li>
//                     <img src="http://via.placeholder.com/200x153" />
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );    
// }

// const mapStateToProps = (state) => {
//     return state.main_data;
// }

// function isEmpty(obj) {
//     for(var key in obj) {
//         if(obj.hasOwnProperty(key))
//             return false;
//     }
//     return true;
// }
// export default connect(mapStateToProps)(ThumbCarousel);