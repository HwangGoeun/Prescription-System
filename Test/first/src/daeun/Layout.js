import {Outlet, Link} from "react-router-dom";
import { Logout } from "../Logout/logout";
const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/WebWrite">수정하기</Link>
                    </li>

                    <li>
                        <Link to="/write">저장하기</Link>
                    </li>

                </ul>

            </nav>

            <Outlet />
            <div>
            <Logout/>
            </div>
        </>

    );
};

export default Layout;