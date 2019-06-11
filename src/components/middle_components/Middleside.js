import React from 'react';
import { connect } from 'react-redux';

// components
import Slide from './Slide';

const Middleside = (props) => {
        const showRandomTitle = () => {
            if(!isEmpty(props.state)) {
                let site = props.state.site.site_general;
                // console.log(site.pull02.sg_site_title.value);
                let site_theme_name = site.pull02.sg_site_name.value;
                let title_hover = site.pull02.sg_site_title.value;
                const randNum = Math.floor(Math.random()*3);
                
                return <h4 title={title_hover ? title_hover:'no title'}>{site_theme_name?site_theme_name:'no name'}</h4>;
            }
    }
    return(
        <div className="middle_side">
            <div className="site_title">
                {
                    showRandomTitle()
                }
                <Slide />
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
export default connect(mapStateToProps)(Middleside);


// import Slide from './Slide';

// class Middleside extends React.Component {
//     constructor(props) {
//         super(props);
//         this.changeStyle = this.changeStyle.bind(this);
//         this.showRandomTitle = this.showRandomTitle.bind(this);
//     }
//     changeStyle() {
//         console.log(window.innerWidth);
//     }
//     showRandomTitle() {
//         if(this.props.isLoaded) {
//             console.log(this.props.main_data);
//             const main_data = this.props.main_data;
//             let site_theme = '';
//             let title_hover = '';
//             const randNum = Math.floor(Math.random()*3);
//             main_data.map(function(data) {
//                 if(data.index === `00${randNum}`) {
//                     console.log(data);
//                     site_theme = data.value;
//                 }else if(data.index === '003') {
//                     console.log(data);
//                     title_hover = data.value;
//                 }
//             });
//             return <h4 title={title_hover}>{site_theme}</h4>;
//         }
//     }

//     render() {
//         return(
//             <div className="middle_side">
//                 <div className="site_title">
//                     {
//                         this.showRandomTitle()
//                     }
//                     <Slide main_data={this.props.main_data}  bg_scenaries={this.props.bg_scenaries} animals_pictures={this.props.animals_pictures} isLoaded={this.props.isLoaded} />
//                 </div>
//             </div>
//         );
//     }
// }

// export default Middleside;