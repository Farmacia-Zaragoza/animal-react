import React from 'react';
import { connect } from 'react-redux';

const EliptricalFlag = (props) => {
    const getHostname = () => {
        let hostName = `${window.location.protocol}//${window.location.hostname}`;
            if(hostName === 'http://localhost') {
                hostName = 'http://animals01.vbrqx.com'
            }
        return hostName;
    }
    const getFlags = () => {
        let cloudsFlag = [];
        if( !isEmpty(props.state) ) {
            console.log(props.state.cloudlangs)
            cloudsFlag = props.state.cloudlangs;
        }
        // props.state.cloudlangs.forEach((data, index) => {
        //     flagArr.push(<a class="flag_${index}_${data.value}" href="${hostName+'/'+data.id}"><img src="${hostName+'/'+data.flag}" alt="${data.value}" /></a>);
        // });
        return cloudsFlag;
    }

    const hideElipLang = (e) => {
        let elip_whole_trans_bg = document.querySelector('.elip_whole_trans_bg');
        let lang_btn = document.querySelector('.lang_btn');
        if(e.target.className === 'elip_whole_trans_bg') {
            elip_whole_trans_bg.style.opacity = 0;
            elip_whole_trans_bg.style.visibility = 'hidden';
            lang_btn.style.opacity = 1;
        }
    }

    const allFlagItem = getFlags(); //arr
    const hostname = getHostname(); //string
    return (
        <div className="elip_whole_trans_bg" onClick={hideElipLang}>
            <div className="elip_flag">
                
                <div className="elip_flag_inner">
                    {
                        allFlagItem.map((data, index) => {
                            return (
                                <a title={'Click to go '+data.value+' site'} key={index} className={'flag_'+index+'_'+data.value} href={hostname+'/'+data.id}><img src={hostname+'/'+data.flag} alt={data.value} /></a>
                            )
                        })
                    }
                </div>
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

export default connect(mapStateToProps)(EliptricalFlag);