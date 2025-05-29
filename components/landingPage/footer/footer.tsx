import DHL from "@public/library/images/footer/dhl.png";
import DPD from "@public/library/images/footer/dpd.png";
import Installment from "@public/library/images/footer/installment.png";
import Invoice from "@public/library/images/footer/invoice.png";
import Klarna from "@public/library/images/footer/klarna.png";
import Mastercard from "@public/library/images/footer/mastercard.png";
import Paypal from "@public/library/images/footer/paypal.png";
import Trusted1 from "@public/library/images/footer/trusted-1.png";
import Trusted2 from "@public/library/images/footer/trusted-2.png";
import Visa from "@public/library/images/footer/visa.png";
import Voucher from "@public/library/images/footer/voucher.png";
import {
	FooterLinks,
	FooterSection,
	FooterShopLogos,
	FooterShopLogosBlock,
	FooterSmallLinks,
	Typography,
} from "@vorwerk/fibre-react";
import Image from "next/image";

const FooterLandingPage = () => {
	return (
		<footer>
			<FooterSection variant="spacingVertical">
				<FooterLinks>
					<ul>
						<li>
							<Typography variant="paragraph18" fontWeight="bold">
								Get in touch
							</Typography>
						</li>
						<li>
							<Typography variant="paragraph16">
								<a href="#contact">Contact us</a>
							</Typography>
						</li>
						<li>
							<Typography variant="paragraph16">
								<a href="#support">Vorwerk Support Center</a>
							</Typography>
						</li>
					</ul>
					<ul>
						<li>
							<Typography variant="paragraph18" fontWeight="bold">
								Services
							</Typography>
						</li>
						<li>
							<Typography variant="paragraph16">
								<a href="#experience-live">Experience live</a>
							</Typography>
						</li>
						<li>
							<Typography variant="paragraph16">
								<a href="#vorwerk-stores">Vorwerk Stores</a>
							</Typography>
						</li>
					</ul>
					<ul>
						<li>
							<Typography variant="paragraph18" fontWeight="bold">
								Shopping
							</Typography>
						</li>
						<li>
							<Typography variant="paragraph16">
								<a href="#paymentmethods">Payment methods</a>
							</Typography>
						</li>
						<li>
							<Typography variant="paragraph16">
								<a href="#shipping-delivery">Shipping & delivery</a>
							</Typography>
						</li>
						<li>
							<Typography variant="paragraph16">
								<a href="#security">Security</a>
							</Typography>
						</li>
					</ul>
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
							<Image src={Mastercard} alt="Mastercard" key="Mastercard" />,
							<Image src={Visa} alt="VISA" key="Visa" />,
							<Image src={Paypal} alt="PayPal" key="PayPal" />,
							<Image src={Klarna} alt="Klarna" key="Klarna" />,
							<Image src={Installment} alt="Installment" key="Installment" />,
							<Image src={Invoice} alt="Invoice" key="Invoice" />,
							<Image src={Voucher} alt="Voucher" key="Voucher" />,
						]}
					/>
					<FooterShopLogosBlock
						header={
							<Typography variant="paragraph18" fontWeight="bold">
								Shipping methods
							</Typography>
						}
						logos={[
							<Image src={DHL} alt="DHL" key="DHL" />,
							<Image src={DPD} alt="DPD" key="DPD" />,
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
							<Image src={Trusted1} alt="Trusted 1" key="Trusted 1" />,
							<Image src={Trusted2} alt="Trusted 2" key="Trusted 2" />,
						]}
					/>
				</FooterShopLogos>
			</FooterSection>
			<FooterSection>
				<FooterSmallLinks>
					<ul>
						<li>
							<Typography variant="paragraph12">© 2021 Vorwerk</Typography>
						</li>

						<li>
							<Typography variant="paragraph12">
								<a href="#about-us">About us</a>
							</Typography>
						</li>

						<li>
							<Typography variant="paragraph12">
								<a href="#press">Press</a>
							</Typography>
						</li>
						<li>
							<Typography variant="paragraph12">
								<a href="#privacy">Privacy</a>
							</Typography>
						</li>
						<li>
							<Typography variant="paragraph12">
								<a href="#imprint">Imprint</a>
							</Typography>
						</li>
						<li>
							<Typography variant="paragraph12">
								<a href="#cookies">Cookies</a>
							</Typography>
						</li>
						<li>
							<Typography variant="paragraph12">
								<a href="#terms">Terms of service</a>
							</Typography>
						</li>
						<li>
							<Typography variant="paragraph12">
								<a href="#cancellation">Cancellation</a>
							</Typography>
						</li>
						<li>
							<Typography variant="paragraph12">
								<a href="#disposal">Disposal of batteries & old devices</a>
							</Typography>
						</li>
						<li>
							<Typography variant="paragraph12">
								<a href="#mandatory">Mandatory information</a>
							</Typography>
						</li>
					</ul>
				</FooterSmallLinks>
			</FooterSection>
		</footer>
	);
};

export default FooterLandingPage;
