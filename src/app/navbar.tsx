import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav className="flex bg-gray-800 py-2 px-5">
			<h1 className="text-white">Navbar</h1>
			<ul className="flex ml-5">
				<Link href="/" className="mr-3 text-blue-300 cursor-pointer">Home</Link>
				<Link href="/about" className="mr-3 text-blue-300 cursor-pointer">About</Link>
				<Link href="/about/profile" className="mr-3 text-blue-300 cursor-pointer">Profile</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
