import { Mail, MapPin, Phone } from "lucide-react";

const divStyles = {
	display: "flex",
	alignItems: "center",
	gap: "0.6rem",
};

function ContactBar() {
	return (
		<div className="flex items-center justify-end gap-6 p-10">
			<div style={divStyles}>
				<Phone />
				<p>(000) 000-0000</p>
			</div>
			<div style={divStyles}>
				<Mail />
				<p>Email@mail.com</p>
			</div>
			<div style={divStyles}>
				<MapPin />
				<p>Monyakeng Wesselsbron</p>
			</div>
		</div>
	);
}

export default ContactBar;
