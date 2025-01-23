import ServicesCard from "./ServicesCard";

interface Services {
	title: string;
	description: string;
	items?: string[];
	image: string;
	imageAlt: string;
}

const services: Services[] = [
	{
		title: "General building",
		description:
			"We use current technology to build environmentally friendly homes and various types of structures.",
		items: [
			"Bricklaying",
			"Plastering",
			"Tiling, plumbing",
			"Roofing",
			"Building Maintanance and extension",
			"Paving",
			"Fencing",
			"Painting",
		],
		image:
			"https://plus.unsplash.com/premium_photo-1661722613227-f2d225c3234e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		imageAlt: "General building illustration",
	},
	{
		title: "Site Clearance",
		description:
			"We do demolition, ground levelling, and bush clearing for development projects",
		image:
			"https://images.unsplash.com/photo-1711460934838-012059353a87?q=80&w=2812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		imageAlt: "Site clearance illustration",
	},
	{
		title: "Site Planning",
		description:
			"Our in-house planning team offers client flwaless planning for technical and equiqment needs to ensure the timely delivery of projects within bidget.",
		image:
			"https://plus.unsplash.com/premium_photo-1726873336017-e7cea33d1547?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		imageAlt: "Site planning illustration",
	},
];

export function ServicesSection() {
	return (
		<section className="md:py-44 py-32 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl lg:text-6xl text-center mb-20 font-bold">
					Our{" "}
					<span
						style={{
							color: "var(--primary-blue)",
						}}
					>
						Services
					</span>
				</h2>
				<div className="space-y-52 w-[80%] m-auto">
					{services.map((service, index) => (
						<ServicesCard index={index} service={service} />
					))}
				</div>
			</div>
		</section>
	);
}
