import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
	return (
		<>
			<h3>안녕하세요. 메인페이지 입니다.</h3>
            <ul>
				<Link to="/write"><button>write</button></Link>
				<Link to="/view"><button>view</button></Link>
			</ul>
		</>
	);
};

export default Main;