import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
	return (
		<>
			<header className="bg-black">

				<div className="container mx-auto  flex justify-between" >
					<nav className="flex">
						<Link to="/" className="inline-flex items-center py-6 px-3 mr-6 text-red-100 hover:text-green-800 text-4xl font-bold tracking-widest ml-36" activeClassName="text-white">Kneeraazon</Link>
						<Link to="/resume" className="inline-flex p-3 items-center  rounded text-red-200 text-2xl hover:text-white" activeClassName="text-white">Projects</Link>
						<Link to="/projects" className="inline-flex p-3 items-center  rounded text-red-200 text-2xl hover:text-white" activeClassName="text-white">Resume</Link>
						<Link to="/blog" className="inline-flex p-3 items-center  rounded text-red-200 text-2xl hover:text-white" activeClassName="text-white">Blog</Link>
						<Link to="/contact" className="inline-flex p-3 items-center  rounded text-red-200 text-2xl hover:text-white" activeClassName="text-white">Contact</Link>
					</nav>

					<div className="inline-flex p-3 my-6 mr-36">
						<SocialIcon
							url="http://twitter.com/kneeraazon"
							className="mr-4"
							target="_blank"
							fgColor="#fff"
							style={{ height: 35, width: 35 }} />
						<SocialIcon
							url="http://facebook.com/kneeraazon"
							className="mr-4"
							target="_blank"
							fgColor="#fff"
							style={{ height: 35, width: 35 }}
						/>
						<SocialIcon
							url="http://youtube.com/kneeraazon"
							className="mr-4"
							target="_blank"
							fgColor="#fff"
							style={{ height: 35, width: 35 }}
						/>
						<SocialIcon
							url="http://linkedin.com/kneeraazon"
							className="mr-4"
							target="_blank"
							fgColor="#fff"
							style={{ height: 35, width: 35 }}
						/>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
