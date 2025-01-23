import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";

interface Items {
	title: string;
	description: string;
	image: string;
}

const items: Items[] = [
	{
		title: "Electrical Wiring and Installation Services",
		description:
			"We provide reliable, safe, and efficient wiring installation for residential and commercial spaces.",
		image:
			"https://images.unsplash.com/photo-1600102463163-a14d3668fc46?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Circuit Breakers and Panel Upgrades",
		description:
			"Upgrade to a safer, more reliable electrical system. We specialize in installing and upgrading circuit.",
		image: "/images/bg.avif",
	},
	{
		title: "LED Lighting Solutions",
		description:
			"Brighten up your space while saving energy. Our LED lighting installations offer long-lasting.",
		image:
			"https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

export function HeroSection() {
	const plugin = React.useRef(
		Autoplay({
			delay: 3000, // Change slides after 3sec
			stopOnInteraction: true,
			rootNode: (emblaRoot) => emblaRoot.parentElement,
		})
	);

	return (
		<Carousel
			plugins={[plugin.current]}
			className="w-full"
			opts={{
				align: "start",
				loop: true,
			}}
		>
			<CarouselContent>
				{items.map((item, index) => (
					<CarouselItem key={index} className="h-full">
						<Card className="w-full h-full">
							<CardContent className="p-0 h-full relative">
								<img
									src={item.image}
									alt={`Slide ${index + 1} background`}
									style={{
										borderRadius: "none",
										width: "100%",
										height: "500px",
										objectFit: "cover",
									}}
								/>
								<div className="absolute justify-end inset-0 flex flex-col bg-black bg-opacity-40 p-16 md:p-24 ">
									<h2 className="text-3xl font-bold text-white mb-2">
										{item.title}
									</h2>
									<p className="text-lg text-white mb-4">{item.description}</p>
									<Button
										style={{
											backgroundColor: "var(--primary-blue)",
										}}
										size={"lg"}
										variant="outline"
										className="border-none text-white font-bold hover:text-black transition-colors inline-block w-[100px]"
									>
										Learn more
									</Button>
								</div>
								<CarouselPrevious className="absolute bg-transparent text-white p-8 left-4 top-1/2 -translate-y-1/2" />
								<CarouselNext className="absolute p-8 bg-transparent text-white right-4 top-1/2 -translate-y-1/2" />
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
