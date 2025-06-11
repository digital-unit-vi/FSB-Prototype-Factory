import {
  AdvisorDropdown,
  AdvisorDropdownMenuItem,
  AdvisorUnassigned,
  Button,
  HeaderButton,
  Header as HeaderComponent,
  Location,
  Menu,
  NavItem,
  SectionSeparator,
  Typography,
  User,
  Vorwerk,
} from "@vorwerk/fibre-react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const darkThemePaths = [
    "/flagship/home-page",
    "/flagship/division-landing-page",
  ];
  const isBackgroundGradient = darkThemePaths.includes(pathname);
  return (
    <HeaderComponent
      stickyMode="sticky"
      advisor={
        <AdvisorDropdown
          advisorHeadline="Your Thermomix® advisor"
          buttonLabel="Advisor"
          buttonAriaLabel="Your advisors: Thermomix advisor Lisa connected"
          buttonAvatars={[
            <img
              alt="avatar"
              src="/library/images/avatars/avatar2.png"
              key="1"
            />,
          ]}
        >
          <AdvisorDropdownMenuItem
            avatar={
              <img alt="avatar" src="/library/images/avatars/avatar2.png" />
            }
            href="#"
            labels={
              <>
                <Typography
                  component="p"
                  fontWeight="medium"
                  variant="paragraph16"
                >
                  Lisa Neureuther
                </Typography>
                <Typography
                  component="p"
                  fontWeight="medium"
                  variant="paragraph14"
                >
                  Thermomix® Advisor
                </Typography>
              </>
            }
            type="advisor"
          />
          <AdvisorDropdownMenuItem
            href="#"
            icon={<AdvisorUnassigned />}
            labels={
              <Typography
                component="p"
                fontWeight="medium"
                variant="paragraph16"
              >
                Kobold Advisor
              </Typography>
            }
          />
          <SectionSeparator />
          <AdvisorDropdownMenuItem
            href="#"
            icon={<Location />}
            labels={
              <Typography
                component="p"
                fontWeight="medium"
                variant="paragraph16"
              >
                Find your Vorwerk store
              </Typography>
            }
          />
        </AdvisorDropdown>
      }
      logo={<Vorwerk aria-label="Go to home page" />}
      menu={
        <HeaderButton label="Menu">
          <Menu />
        </HeaderButton>
      }
      mobileAccountButton={
        <Button icon={<User />} size="large" buttonStyle="secondary">
          Login
        </Button>
      }
      navigation={[
        <NavItem
          key="Products"
          href="#"
          label="Products"
          level={1}
          navItems={[
            <NavItem
              href="#"
              label="Thermomix®"
              level={2}
              key="tm"
              navItems={[
                <NavItem
                  href="#"
                  label="Thermomix® TM6"
                  level={3}
                  key="tm-tm6"
                />,
                <NavItem
                  href="#"
                  label="Accessories"
                  level={3}
                  key="tm-accessories"
                />,
                <NavItem
                  href="#"
                  label="Specials"
                  level={3}
                  key="tm-specials"
                />,
                <NavItem
                  href="#"
                  label="Spare Parts"
                  level={3}
                  key="tm-parts"
                />,
                <NavItem
                  href="#"
                  label="Cooking books"
                  level={3}
                  key="tm-books"
                />,
                <NavItem
                  href="#"
                  label="Current offers"
                  level={3}
                  key="tm-offers"
                />,
              ]}
            />,
            <NavItem
              href="#"
              label="Kobold"
              level={2}
              key="kobold"
              navItems={[
                <NavItem
                  href="#"
                  label="Accessories"
                  level={3}
                  key="kb-accessories"
                />,
                <NavItem
                  href="#"
                  label="Specials"
                  level={3}
                  key="kb-specials"
                />,
                <NavItem
                  href="#"
                  label="Spare Parts"
                  level={3}
                  key="kb-parts"
                />,
                <NavItem
                  href="#"
                  label="Current offers"
                  level={3}
                  key="kb-offers"
                />,
              ]}
            />,
            <NavItem
              href="#"
              label="Kobold Configurator"
              level={2}
              key="kobold-configurator"
              navItems={[
                <NavItem
                  href="#"
                  label="Configure vacuum cleaner"
                  level={3}
                  key="kc-configure"
                />,
                <NavItem
                  href="#"
                  label="Hard floor cleaning"
                  level={3}
                  key="kc-hard-floor"
                />,
                <NavItem
                  href="#"
                  label="Carpet cleaning"
                  level={3}
                  key="kc-carpet"
                />,
                <NavItem
                  href="#"
                  label="Upholstery & mattress cleaning"
                  level={3}
                  key="kc-upholstery"
                />,
                <NavItem
                  href="#"
                  label="Other fields of application"
                  level={3}
                  key="kc-other"
                />,
              ]}
            />,
            <NavItem
              href="#"
              label="E-shop"
              level={2}
              key="shop"
              navItems={[
                <NavItem
                  href="#"
                  label="Thermomix® products"
                  level={3}
                  key="shop-thermomix"
                />,
                <NavItem
                  href="#"
                  label="Kobold products"
                  level={3}
                  key="shop-kobold"
                />,
                <NavItem
                  href="#"
                  label="Vouchers"
                  level={3}
                  key="shop-vouchers"
                />,
              ]}
            />,
          ]}
        />,
        <NavItem key="Product Demo" href="#" label="Product Demo" level={1} />,
        <NavItem
          key="Recipes and Ideas"
          href="#"
          label="Recipes and Ideas"
          level={1}
          navItems={[
            <NavItem
              href="#"
              label="column 1"
              level={2}
              key="col-1"
              navItems={[
                <NavItem
                  href="col1-1"
                  label="col1-1"
                  level={3}
                  key="col-1-1"
                />,
                <NavItem
                  href="col1-2"
                  label="col1-2"
                  level={3}
                  key="col-1-2"
                />,
                <NavItem
                  href="col1-3"
                  label="col1-3"
                  level={3}
                  key="col-1-3"
                />,
              ]}
            />,
            <NavItem href="#" label="column 2" level={2} key="col-2" />,
          ]}
        />,
        <NavItem
          key="Support"
          href="#"
          label="Support"
          level={1}
          navItems={[
            <NavItem
              href="#"
              key="support"
              label="column 1"
              level={2}
              navItems={[
                <NavItem
                  href="col1-1"
                  label="col1-1"
                  level={3}
                  key="support-1-1"
                />,
                <NavItem
                  href="col1-2"
                  label="col1-2"
                  level={3}
                  key="support-1-2"
                />,
                <NavItem
                  href="col1-3"
                  label="col1-3"
                  level={3}
                  key="support-1-3"
                />,
              ]}
            />,
          ]}
        />,
        <NavItem key="Career" href="#" label="Career" level={1} />,
        <NavItem key="E-shop" href="#" label="E-shop" level={1} />,
      ]}
      backgroundType={isBackgroundGradient ? "blackGradient" : "transparent"}
    />
  );
};
