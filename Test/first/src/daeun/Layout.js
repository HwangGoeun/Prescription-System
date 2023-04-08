import {Outlet, Link} from "react-router-dom";
import { Logout } from "../Logout/logout";
import { useNavigate } from "react-router-dom";
import { Footer } from "../footer/footer";
const Layout = () => {

    const navigate =useNavigate();
    const gotoRevise=()=>{
        navigate("/WebView");
    };
    const gotoSave=()=>{
        navigate("/WebWrite");
    };
    return (
        <>
            <nav>
                <ul>
                    <li>
                    <button style={{marginTop : 20, marginRight : 20, height: 50, width: 200, fontSize: 30, borderRadius: 20}} onClick={gotoRevise}>수정하기</button>
                    </li>

                    <li>
                    <button style={{marginTop : 20, marginRight : 20, height: 50, width: 200, fontSize: 30, borderRadius: 20}} onClick={gotoSave}>저장하기</button>
                    </li>

                </ul>

            </nav>

            <Outlet />
            <div>
            <Logout/>
            </div>
            <Footer/>
        </>

    );
};

export default Layout;