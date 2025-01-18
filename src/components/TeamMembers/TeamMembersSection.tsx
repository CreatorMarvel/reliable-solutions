import TeamMemberCard from "./TeamMemberCard";

interface TeamMembers {
	image: string;
	imageAlt: string;
	name: string;
	role: string;
}

const teamMembers: TeamMembers[] = [
	{
		name: "Lerato Sebokolodi",
		role: "Managing Director",
		image:
			"https://scontent.fjnb9-1.fna.fbcdn.net/v/t39.30808-6/289993088_3377026252532065_5400682390227540939_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG6Rfv6lJ73a3p1Jwd86Go25l6mCrGlRr_mXqYKsaVGv-FN804nD9PzhNW9Ib2jjbtm7j6sYZDgLda8PC5wNx-_&_nc_ohc=qrFBlppdl6IQ7kNvgFKV2GJ&_nc_zt=23&_nc_ht=scontent.fjnb9-1.fna&_nc_gid=AF_GA1n_l7ABg849yd3kz7c&oh=00_AYCZMm8Drp_EzPKjvdy_KYdPj3r8s4f1x68682qjnbb6NA&oe=678E7F16",
		imageAlt: "Lerato Sebokolodi",
	},
	{
		name: "Tidimalo Sebokolodi",
		role: "Operations Director",
		image:
			"https://scontent.fjnb9-1.fna.fbcdn.net/v/t1.6435-9/92965807_225951405134325_299017530112999424_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGkuQ7NnCXHE1wmm0LkjHQ-Hog_oiYW0U8eiD-iJhbRTwr1qrWm241u5WBRPOhuLEGb1J2zvJXtG05Za71sTqdn&_nc_ohc=46ou7VZJ6Z4Q7kNvgGhDzQA&_nc_zt=23&_nc_ht=scontent.fjnb9-1.fna&_nc_gid=AXv4BbFfEQ6DFYtEyIh0Aty&oh=00_AYBkX57_OyAka6DGXFZ3rob_XwOrWgJbTUrYGKxSu7Fkhg&oe=67B039D9",
		imageAlt: "Tidimalo Sebokolodi",
	},
];

export function TeamMembersSection() {
	return (
		<section className="py-44">
			<div className="container mx-auto px-4">
				<h2 className="text-6xl text-center mb-20 font-bold">
					Our{" "}
					<span
						style={{
							color: "var(--primary-blue)",
						}}
					>
						Team
					</span>{" "}
					Members
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
					{teamMembers.map((member, index) => (
						<TeamMemberCard
							key={index}
							index={index}
							name={member.name}
							role={member.role}
							image={member.image}
							imageAlt={member.imageAlt}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
