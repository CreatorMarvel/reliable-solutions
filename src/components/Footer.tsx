import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
	return (
		<footer className="bg-gray-100 pt-16 pb-8">
			<div className="container w-[90%] mx-auto px-4">
				<div className="flex flex-wrap text-center justify-between mb-8 ">
					<div className="w-full md:w-1/3 mb-8 md:mb-0">
						<h3 className="text-2xl font-semibold mb-4">About Us</h3>
						<p className="text-lg leading-relaxed text-gray-600 mb-2">
							We are a micro-enterprise that has its main focuses on general
							building, construction, construction projects, steel works,
							infrastructure development and electrical work.
						</p>

						<p className="text-lg leading-relaxed text-gray-600">
							The company is centrally located in Wesselsbron yet has the
							capability of delivering high-level service to clients anywhere
							across the country
						</p>
					</div>
					<div className="w-full md:w-1/3 mb-8 md:mb-0">
						<h3 className="text-2xl font-semibold mb-4">Contact</h3>
						<h6 className="text-xl">Managing Director</h6>
						<p className="text-lg text-gray-600 mb-2">
							Email: leratoseboks@gmail.com
						</p>
						<p className="text-lg text-gray-600">Phone: (076) 996-7842</p>

						<h6 className="mt-6 text-xl">Operations Director</h6>
						<p className="text-lg text-gray-600 mb-2">
							Email: sebokoloditidimalo93@gmail.com
						</p>
						<p className="text-lg text-gray-600">Phone: (067) 291-3764</p>
					</div>
					<div className="w-full md:w-1/3">
						<h3 className="text-2xl font-semibold mb-4">Navigation</h3>
						<ul className="text-sm text-gray-600">
							<li className="mb-2">
								<a href="/" className="hover:text-gray-900 text-lg">
									Home
								</a>
							</li>
							<li className="mb-2">
								<a href="/about" className="hover:text-gray-900 text-lg">
									About
								</a>
							</li>
							<li className="mb-2">
								<a href="/contact" className="hover:text-gray-900 text-lg">
									Contact
								</a>
							</li>
							<li className="mb-2">
								<a href="/members" className="hover:text-gray-900 text-lg">
									Members
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-200 pt-8 text-center">
					<p className="text-sm text-gray-600 mb-4">
						&copy; {new Date().getFullYear()} Reliable Solutions Trading. All
						rights reserved
					</p>
					<div className="flex justify-center space-x-4">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-gray-600"
						>
							<Facebook className="h-6 w-6" />
							<span className="sr-only">Facebook</span>
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-gray-600"
						>
							<Twitter className="h-6 w-6" />
							<span className="sr-only">X</span>
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-gray-600"
						>
							<Instagram className="h-6 w-6" />
							<span className="sr-only">Instagram</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
