"use client";

import {
	FooterLinks,
	FooterLinksBlock,
	FooterSection,
	FooterShopLogo,
	FooterShopLogos,
	FooterShopLogosBlock,
	FooterSmallLinks,
	Typography,
} from "@vorwerk/fibre-react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	const pathname = usePathname();

	// Don't render the default footer if on a specific page
	const showDefaultFooter = pathname !== "/landing-page/light/sensor-de";

	return (
		<>
			{children}
			{showDefaultFooter && (
				<footer>
					<FooterSection variant="spacingVertical">
						<FooterLinks>
							<FooterLinksBlock
								header={
									<Typography variant="paragraph18" fontWeight="bold">
										Get in touch
									</Typography>
								}
								links={[
									<Typography variant="paragraph16">
										<a href="#contact">Contact us</a>
									</Typography>,
									<Typography variant="paragraph16">
										<a href="#support">Vorwerk Support Center</a>
									</Typography>,
								]}
							/>
							<FooterLinksBlock
								header={
									<Typography variant="paragraph18" fontWeight="bold">
										Services
									</Typography>
								}
								links={[
									<Typography variant="paragraph16">
										<a href="#experience-live">Experience live</a>
									</Typography>,
									<Typography variant="paragraph16">
										<a href="#vorwerk-stores">Vorwerk Stores</a>
									</Typography>,
								]}
							/>
							<FooterLinksBlock
								header={
									<Typography variant="paragraph18" fontWeight="bold">
										Shopping
									</Typography>
								}
								links={[
									<Typography variant="paragraph16">
										<a href="#paymentmethods">Payment methods</a>
									</Typography>,
									<Typography variant="paragraph16">
										<a href="#shipping-delivery">Shipping & delivery</a>
									</Typography>,
									<Typography variant="paragraph16">
										<a href="#security">Security</a>
									</Typography>,
								]}
							/>
						</FooterLinks>
					</FooterSection>
					<FooterSection variant="spacingBottom" borderBottom={true}>
						<FooterShopLogos>
							<FooterShopLogosBlock
								header={
									<Typography variant="paragraph18" fontWeight="bold">
										Payment methods
									</Typography>
								}
								logos={[
									<FooterShopLogo caption="Mastercard" hasBackground={true}>
										<img
											src="/library/images/footer/svg/payment/Mastercard.svg"
											alt="Mastercard"
										/>
									</FooterShopLogo>,
									<FooterShopLogo caption="Visa" hasBackground={true}>
										<img
											src="/library/images/footer/svg/payment/Visa.svg"
											alt="Visa"
										/>
									</FooterShopLogo>,
									<FooterShopLogo caption="PayPal" hasBackground={true}>
										<img
											src="/library/images/footer/svg/payment/Paypal.svg"
											alt="PayPal"
										/>
									</FooterShopLogo>,
									<FooterShopLogo caption="Klarna">
										<img
											src="/library/images/footer/svg/payment/Klarna.svg"
											alt="Klarna"
										/>
									</FooterShopLogo>,
									<FooterShopLogo caption="Installment" hasBackground={true}>
										<img
											src="/library/images/footer/svg/payment/factoring-euro.svg"
											alt="Installment"
										/>
									</FooterShopLogo>,
									<FooterShopLogo caption="Invoice" hasBackground={true}>
										<img
											src="/library/images/footer/svg/payment/invoice-euro.svg"
											alt="Invoice"
										/>
									</FooterShopLogo>,
									<FooterShopLogo caption="Voucher" hasBackground={true}>
										<img
											src="/library/images/footer/svg/payment/coupon.svg"
											alt="Voucher"
										/>
									</FooterShopLogo>,
								]}
							/>
							<FooterShopLogosBlock
								header={
									<Typography variant="paragraph18" fontWeight="bold">
										Shipping methods
									</Typography>
								}
								logos={[
									<FooterShopLogo caption="DHL">
										<img
											src="/library/images/footer/svg/shipping/DHL.svg"
											alt="DHL"
										/>
									</FooterShopLogo>,
									<FooterShopLogo caption="DPD" hasBackground={true}>
										<img
											src="/library/images/footer/svg/shipping/DPD.svg"
											alt="DPD"
										/>
									</FooterShopLogo>,
								]}
							/>
							<FooterShopLogosBlock
								bigLogos={true}
								header={
									<Typography variant="paragraph18" fontWeight="bold">
										Certified quality
									</Typography>
								}
								logos={[
									<img
										src="/library/images/footer/svg/trusted/trusted1.svg"
										alt="Trusted 1"
									/>,
									<img
										src="/library/images/footer/svg/trusted/trusted2.svg"
										alt="Trusted 2"
									/>,
								]}
							/>
						</FooterShopLogos>
					</FooterSection>
					<FooterSection>
						<FooterSmallLinks>
							<ul>
								<li key="2021 Vorwerk">
									<Typography variant="paragraph12">© 2021 Vorwerk</Typography>
								</li>

								<li key="About us">
									<Typography variant="paragraph12">
										<a href="#about-us">About us</a>
									</Typography>
								</li>

								<li key="Press">
									<Typography variant="paragraph12">
										<a href="#press">Press</a>
									</Typography>
								</li>
								<li key="Privacy">
									<Typography variant="paragraph12">
										<a href="#privacy">Privacy</a>
									</Typography>
								</li>
								<li key="Imprint">
									<Typography variant="paragraph12">
										<a href="#imprint">Imprint</a>
									</Typography>
								</li>
								<li key="Cookies">
									<Typography variant="paragraph12">
										<a href="#cookies">Cookies</a>
									</Typography>
								</li>
								<li key="Terms of service">
									<Typography variant="paragraph12">
										<a href="#terms">Terms of service</a>
									</Typography>
								</li>
								<li key="Cancellation">
									<Typography variant="paragraph12">
										<a href="#cancellation">Cancellation</a>
									</Typography>
								</li>
								<li key="Disposal">
									<Typography variant="paragraph12">
										<a href="#disposal">Disposal of batteries & old devices</a>
									</Typography>
								</li>
								<li key="Mandatory">
									<Typography variant="paragraph12">
										<a href="#mandatory">Mandatory information</a>
									</Typography>
								</li>
							</ul>
						</FooterSmallLinks>
					</FooterSection>
				</footer>
			)}
		</>
	);
}
