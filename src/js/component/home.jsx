import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar />
		<div className="container">
			<Jumbotron />
			<div className="container text-center">
				<div className="row g-3 mb-3">
					<div className="col-lg-3 col-md-6 col-sm-12">
						<Card />
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12">
						<Card />
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12">
						<Card />
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12">
						<Card />
					</div>	
				</div>
			</div>
		</div>
		<div className="p-4 bg-dark text-center footer" style={{color: "white"}}>
            Made with ❤️ by Cris Machuca for
            <a href="https://www.4geeksacademy.com">4Geeks Academy</a>
        </div>
		</>
	);
};

export default Home;
