import React from 'react';
import {Outlet, Link} from "react-router-dom";

export function Footer(){
    
return(
    
<footer className="footer-color">
                    <div className="contents-wrap" >
                        
                        <img className="footer-logo-img" src={require('../img/logo_images.png')} alt="Logo" width="200" />
                        <div style={{marginLeft: 225}}>
                            <ul style={{clear: "both"}}>
                                <Link to="/Terms" style={{paddingRight: 50}}>이용약관</Link>
                                <Link to="/Personal">개인정보취급방침</Link>
                            </ul>
                            <div>
					            BioLeader㈜ 서울특별시 강남구 영동대로 717(청담동, BioLeader㈜ 청담빌딩)   TEL 02-3591-9250   FAX 02-5434-0483   사업자등록번호 : 120-81-22608
				            </div>
                            <div className="fotter-text-2">
					 Copyright © 2019 Bio. All Rights Reserved.
                            </div>
                            <div className="footer-number">
                                광고심의필 : 2022-1326-41242
                            </div>


                        </div>
                        
                    
                    </div>
                    </footer>
);

}
