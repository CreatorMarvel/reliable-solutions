import About from "./components/AboutSection/About";
import ContactBar from "./components/LandingSection/ContactBar";
import MenuBar from "./components/LandingSection/MenuBar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/LandingSection/HeroSection";
import { ServicesSection } from "./components/OurServices/ServicesSection";
import { TeamMembersSection } from "./components/TeamMembers/TeamMembersSection";
import { ValuesAndPrinciples } from "./components/WhatWeStandFor/ValuesAndPrinciples";

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
				<TeamMembersSection />
				<Footer />
			</Paper>
		</div>
	);
}

export default App;
