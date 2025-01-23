import { Mail, MapPin, Phone } from "lucide-react";

const divStyles = {
	display: "flex",
	alignItems: "center",
	gap: "0.6rem",
};

function ContactBar() {
	return (
		<div className="items-center justify-end hidden lg:flex gap-8 p-10 mt-32">
			<div style={divStyles}>
				<Phone />
				<p style={{ display: "flex", flexDirection: "column" }}>
					<span>(076) 996-7842</span>
					<span>(067) 291-3764</span>
				</p>
			</div>
			<div style={divStyles}>
				<Mail />
				<p style={{ display: "flex", flexDirection: "column" }}>
					<span>sebokoloditidimalo@gmail.com</span>
					<span>leratoseboks@gmail.com</span>
				</p>
			</div>
			<div style={divStyles}>
				<MapPin />
				<p>South Africa (Globaly)</p>
			</div>
		</div>
	);
}

export default ContactBar;
