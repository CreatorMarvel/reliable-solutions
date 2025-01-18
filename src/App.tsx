import About from "./components/AboutSection/About";
import { Footer } from "./components/Footer";
import ContactBar from "./components/LandingSection/ContactBar";
import { HeroSection } from "./components/LandingSection/HeroSection";
import MenuBar from "./components/LandingSection/MenuBar";
import { ServicesSection } from "./components/OurServices/ServicesSection";
import { TeamMembersSection } from "./components/TeamMembers/TeamMembersSection";
import { ValuesAndPrinciples } from "./components/WhatWeStandFor/ValuesAndPrinciples";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";

function App() {
	return (
		<div>
			<CssBaseline />
			<Paper square>
				<ContactBar />
				<MenuBar />
				<HeroSection />
				<About />
				<ValuesAndPrinciples />
				<ServicesSection />
				<Footer />
			</Paper>
		</div>
	);
}

export default App;
