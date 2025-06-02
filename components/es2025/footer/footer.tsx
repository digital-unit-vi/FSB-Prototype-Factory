import {
  FooterLinks,
  FooterLinksBlock,
  FooterLogo,
  FooterSection,
  Typography,
  VorwerkWhite,
} from "@vorwerk/fibre-react";

export const Footer = () => {
  return (
    <footer data-observe="footer">
      <FooterSection variant="spacingLogo" borderBottom={true}>
        <FooterLogo logo={<VorwerkWhite size="medium" />} />
      </FooterSection>
      <FooterSection variant="spacingVertical" borderBottom={true}>
        <FooterLinks>
          <FooterLinksBlock
            header={
              <Typography variant="paragraph18" fontWeight="bold">
                Get in touch
              </Typography>
            }
            links={[
              <Typography variant="paragraph16" key="contact-us">
                <a href="#contact">Contact us</a>
              </Typography>,
              <Typography variant="paragraph16" key="vorwerk-support-center">
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
              <Typography key="experience-live" variant="paragraph16">
                <a href="#experience-live">Experience live</a>
              </Typography>,
              <Typography key="vorwerk-stores" variant="paragraph16">
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
              <Typography variant="paragraph16" key="payment-methods">
                <a href="#paymentmethods">Payment methods</a>
              </Typography>,
              <Typography variant="paragraph16" key="shipping-and-delivery">
                <a href="#shipping-delivery">Shipping & delivery</a>
              </Typography>,
              <Typography variant="paragraph16" key="security">
                <a href="#security">Security</a>
              </Typography>,
            ]}
          />
        </FooterLinks>
      </FooterSection>
      <FooterSection variant="spacingMetaLink">
        <FooterLinks>
          <ul>
            <li key="about-us">
              <Typography variant="paragraph12">
                <a href="#about-us">About us</a>
              </Typography>
            </li>
            <li key="press">
              <Typography variant="paragraph12">
                <a href="#press">Press</a>
              </Typography>
            </li>
            <li key="privacy">
              <Typography variant="paragraph12">
                <a href="#privacy">Privacy</a>
              </Typography>
            </li>
            <li key="imprint">
              <Typography variant="paragraph12">
                <a href="#imprint">Imprint</a>
              </Typography>
            </li>
            <li key="cookies">
              <Typography variant="paragraph12">
                <a href="#cookies">Cookies</a>
              </Typography>
            </li>
            <li key="terms">
              <Typography variant="paragraph12">
                <a href="#terms">Terms of service</a>
              </Typography>
            </li>
            <li key="cancellation">
              <Typography variant="paragraph12">
                <a href="#cancellation">Cancellation</a>
              </Typography>
            </li>
            <li key="disposal">
              <Typography variant="paragraph12">
                <a href="#disposal">Disposal of batteries & old devices</a>
              </Typography>
            </li>
            <li key="mandatory">
              <Typography variant="paragraph12">
                <a href="#mandatory">Mandatory information</a>
              </Typography>
            </li>
          </ul>
        </FooterLinks>
      </FooterSection>
    </footer>
  );
};
