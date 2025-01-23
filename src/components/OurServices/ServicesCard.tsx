import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

interface Services {
	title: string;
	description: string;
	items?: string[];
	image: string;
	imageAlt: string;
}

interface Service {
	service: Services;
	index: number;
}

function ServicesCard({ service, index }: Service) {
	return (
		<Card key={index} className="overflow-hidden shadow-lg">
			<div
				className={`flex flex-col ${
					index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
				}`}
			>
				<div className="md:w-1/2 overflow-hidden">
					<img
						src={service.image || "/placeholder.svg"}
						alt={service.imageAlt}
						width={600}
						height={400}
						className="w-full h-full object-cover service-image"
					/>
				</div>
				<div className="md:w-1/2 flex flex-col justify-center p-8">
					<CardHeader>
						<CardTitle className="text-4xl font-bold mb-4">
							{service.title}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="text-xl leading-relaxed">
							{service.description}
						</CardDescription>

						{service.items && (
							<ul className="mt-10">
								{service.items.map((item, index) => (
									<CardDescription
										className="text-xl leading-relaxed flex items-center gap-2"
										key={index}
									>
										<Check style={{ color: "var(--primary-blue)" }} />
										<span>{item}</span>
									</CardDescription>
								))}
							</ul>
						)}
					</CardContent>
				</div>
			</div>
		</Card>
	);
}

export default ServicesCard;
