"use client";

import {
  AdvisorDropdown,
  AdvisorDropdownMenuItem,
  Button,
  HeaderButton,
  Header as HeaderComponent,
  Location,
  Menu,
  NavItem,
  Search,
  SectionSeparator,
  SkeletonContainer,
  SkeletonDropdownItem,
  SkeletonHeadline,
  SkeletonText,
  Typography,
  User,
  Vorwerk,
} from "@vorwerk/fibre-react";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  const darkThemePaths = [
    "/flagship/home-page",
    "/flagship/division-landing-page",
    "/flagship/division-landing-page-tm",
  ];
  const isBackgroundGradient = darkThemePaths.includes(pathname);

  const [currentSearchValue, setCurrentSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(undefined);

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
            icon={<Search />}
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
      searchFlyout={{
        darkMode: false,
        currentSearchValue,
        onValueChange: (value: string) => {
          setIsLoading(true);
          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            setIsLoading(false);
          }, 1000);
          setCurrentSearchValue(value);
        },
        placeholder: "Search",
        isLoading,
        searchLabel: "Search products",
        searchSuggestions: [
          {
            name: "Products",
            suggestions: [
              {
                name: "Thermo<strong>mix TM6</strong>",
                value: "Thermomix TM6",
                onClick: () =>
                  setTimeout(() => {
                    setCurrentSearchValue("Thermomix TM6");
                  }, 100),
              },
              {
                name: "<strong>Cookbook “Fit with</strong> Thermo<strong>mix®”</strong>",
                value: "Cookbook “Fit with Thermomix®”",
                onClick: () =>
                  setTimeout(() => {
                    setCurrentSearchValue("Cookbook “Fit with Thermomix®”");
                  }, 100),
              },
            ],
          },
          {
            name: "Articles",
            suggestions: [
              {
                name: "<strong>Tips and tricks for</strong> Thermo<strong>mix®</strong>",
                value: "Tips and tricks for Thermomix®",
                onClick: () =>
                  setTimeout(() => {
                    setCurrentSearchValue("Tips and tricks for Thermomix®");
                  }, 100),
              },
              {
                name: "<strong>How Star chefs use</strong> Thermo<strong>mix®</strong>",
                value: "How Star chefs use Thermomix®",
                onClick: () =>
                  setTimeout(() => {
                    setCurrentSearchValue("How Star chefs use Thermomix®");
                  }, 100),
              },
            ],
          },
        ],
        oftenSearchedHeadline: "Searched most often",
        oftenSearchedTags: [
          {
            label: "Thermomix TM6",
            onClick: () =>
              setTimeout(() => {
                setCurrentSearchValue("Thermomix TM6");
              }, 100),
          },
          {
            label: "Kobold VK7",
            onClick: () =>
              setTimeout(() => {
                setCurrentSearchValue("Kobold VK7");
              }, 100),
          },
          {
            label: "Robot",
            onClick: () =>
              setTimeout(() => {
                setCurrentSearchValue("Robot");
              }, 100),
          },
          {
            label: "Hotline",
            onClick: () =>
              setTimeout(() => {
                setCurrentSearchValue("Hotline");
              }, 100),
          },
          {
            label: "Accessories",
            onClick: () =>
              setTimeout(() => {
                setCurrentSearchValue("Accessories");
              }, 100),
          },
        ],
        loadingSkeleton: (
          <SkeletonContainer>
            <SkeletonDropdownItem type="heading">
              <SkeletonHeadline size="large" />
            </SkeletonDropdownItem>
            <SkeletonDropdownItem type="option">
              <SkeletonText size="extraLarge" />
            </SkeletonDropdownItem>
            <SkeletonDropdownItem type="option">
              <SkeletonText size="large" />
            </SkeletonDropdownItem>
            <SkeletonDropdownItem type="heading">
              <SkeletonHeadline size="small" />
            </SkeletonDropdownItem>
            <SkeletonDropdownItem type="option">
              <SkeletonText size="medium" />
            </SkeletonDropdownItem>
            <SkeletonDropdownItem type="option">
              <SkeletonText size="small" />
            </SkeletonDropdownItem>
          </SkeletonContainer>
        ),
      }}
    />
  );
};
