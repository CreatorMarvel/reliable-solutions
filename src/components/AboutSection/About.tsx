import { Phone } from "lucide-react";
import { Button } from "../ui/button";
import {
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

function About() {
	return (
		<div className="border-0 w-[80%] m-auto pt-44">
			<div className={`flex flex-col lg:flex-row-reverse`}>
				<div className="md:w-1/2 shadow-none w-full flex items-center">
					<img
						src={
							"https://images.unsplash.com/photo-1668097613572-40b7c11c8727?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						style={{
							width: "100%",
							height: "400px",
							borderRadius: "5px",
							boxShadow: "0 0 24px rgba(0, 0, 0, 0.1)",
						}}
						className="w-full object-cover"
					/>
				</div>
				<div className="md:w-1/2 flex flex-col justify-center p-8">
					<CardHeader>
						<CardTitle className="text-6xl font-bold mb-4">
							Reliable Solutions Trading
						</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col gap-4">
						<CardDescription className="text-xl leading-relaxed">
							Reliable Solution Trading is a micro-enterprise that has its main
							focuses on{" "}
							<strong>
								general building, construction projects, steel works,
								infrastructure developmnet and electrical work.
							</strong>
						</CardDescription>
						<CardDescription className="text-xl leading-relaxed">
							The founders of the company (Tidimalo and Lerato) are highly
							skilled in general building, plumbing, electrical
							welding,structure construction and practical project
							managment.These characteristics put them at a competitive
							advantage for effecient service delivery to the customers of the
							companys.
						</CardDescription>
						<CardDescription className="text-xl leading-relaxed">
							The company is centrally located in Wesselsbron yet has the
							capability of delivering high-level service to clients anywhere
							across the country
						</CardDescription>
						<CardDescription className="text-xl leading-relaxed">
							The enterprise is now registred with <strong>CIPC</strong>(Company
							and Intellectual Property Commission) with registration number{" "}
							<strong>2024/208592/07</strong> as well as with most
							service-relevant regulatory bodies
						</CardDescription>
						<Button size={"lg"} className="flex items-center mt-4 w-[140px]">
							<Phone style={{ color: "var(--primary-blue)" }} /> Call now
						</Button>
					</CardContent>
				</div>
			</div>
		</div>
	);
}

export default About;
