import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Member {
	index: number;
	image: string;
	imageAlt: string;
	name: string;
	role: string;
}

function TeamMemberCard({ index, image, imageAlt, name, role }: Member) {
	return (
		<Card key={index} className="overflow-hidden shadow-lg">
			<div className="aspect-square relative">
				<img
					style={{
						objectFit: "cover",
					}}
					src={image || "/placeholder.svg"}
					alt={imageAlt}
				/>
			</div>
			<CardHeader className="text-center">
				<CardTitle className="text-3xl font-bold">{name}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-center text-xl text-muted-foreground">{role}</p>
			</CardContent>
		</Card>
	);
}

export default TeamMemberCard;
