import { Shield, Star, Telescope } from "lucide-react";
import ValuesAndPrinciplesCard from "./ValuesAndPrinciplesCard";

const iconStyle = {
	color: "var(--primary-blue)",
};

const cardData = [
	{
		icon: <Telescope size={40} style={iconStyle} />,
		title: "Our Vision",
		description:
			"Our goal is to become a trusted leader in construction and civil works, delivering innovative and high-quality projects locally and internationally",
	},
	{
		icon: <Shield size={40} style={iconStyle} />,
		title: "Our Mission",
		description:
			"We strive to offer reliable, cost-effective services with cutting-edge equipment, expert skills, and exceptional service standards.",
	},
	{
		icon: <Star size={40} style={iconStyle} />,
		title: "Our Values",
		description:
			"Our core values include integrity, commitment, continuous learning, customer satisfaction, and improving living conditions for people.",
	},
];

export function ValuesAndPrinciples() {
	return (
		<div className="p-44">
			<h4 className="text-6xl text-center mb-24 font-bold">
				What we stand for in the{" "}
				<span style={{ color: "var(--primary-blue)" }}>trading</span> business
			</h4>
			<div className="flex items-center lg:items-stretch flex-col lg:flex-row justify-center gap-6 p-4">
				{cardData.map((card, index) => (
					<ValuesAndPrinciplesCard
						key={index}
						icon={card.icon}
						index={index}
						title={card.title}
						description={card.description}
					/>
				))}
			</div>
		</div>
	);
}
