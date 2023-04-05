import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">수정하기</Link>
                    </li>

                    <li>
                        <Link to="/write">저장하기</Link>
                    </li>

                </ul>

            </nav>

            <Outlet />
        </>

    );
};

export default Layout;