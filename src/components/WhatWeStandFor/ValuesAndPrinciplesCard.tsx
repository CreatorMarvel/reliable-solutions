import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface PrincipleCard {
	icon: ReactNode;
	index: number;
	title: string;
	description: string;
}

function ValuesAndPrinciplesCard({
	icon,
	index,
	title,
	description,
}: PrincipleCard) {
	return (
		<Card key={index} className="w-[350px] p-4">
			<CardHeader className="flex flex-col items-center gap-4">
				{icon}
				<CardTitle className="text-4xl font-bold">{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-center text-xl text-muted-foreground">
					{description}
				</p>
			</CardContent>
		</Card>
	);
}

export default ValuesAndPrinciplesCard;
