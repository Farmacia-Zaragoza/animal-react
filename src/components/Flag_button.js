import React from 'react';

const Flagbutton = () => {
    const showElipLang = () => {
        let elip_whole_trans_bg = document.querySelector('.elip_whole_trans_bg');
        let lang_btn = document.querySelector('.lang_btn');
        elip_whole_trans_bg.style.opacity = 1;
        elip_whole_trans_bg.style.visibility = 'visible';
        lang_btn.style.opacity = 0;
    }
    return (
        <div className="lang_btn" onClick={showElipLang}>
            <img src="http://animals01.vbrqx.com/r_img/cloud_flags/0320/cloud_spain_es.svg" alt="lang_btn" />
        </div>
    )
}
export default Flagbutton;