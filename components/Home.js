import React from 'react';

import HomeCard from './HomeCard';
import Navbar from './Navbar';

const Home = () => {
	return (
		<div className='home-bg'>
			<Navbar />
			<HomeCard />
		</div>
	);
};

export default Home;
