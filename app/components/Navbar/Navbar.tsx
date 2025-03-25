import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "About us", href: "/aboutus", current: false },
  { name: "Services", href: "/services", current: false },
  { name: "Products", href: "/products", current: false },
  { name: "Performance Report", href: "/report", current: false },
  { name: "Contact us", href: "/contactus", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl px-2 lg:py-4 lg:px-2">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              {/* LOGO */}
              <div className="block lg:hidden mr-2">
                <Bars3Icon
                  className="block h-6 w-6"
                  aria-hidden="true"
                  onClick={() => setIsOpen(true)}
                />
              </div>
              <Link href={"/"} className="flex flex-shrink-0 items-center">
                <img
                  className="block h-10 w-full lg:hidden"
                  src={"/assets/logo/logo.png"}
                  alt="dsign-logo"
                />
                <img
                  className="hidden h-50 w-full lg:block"
                  src={"/assets/logo/logo.png"}
                  alt="dsign-logo"
                />
              </Link>

              {/* LINKS */}

              <div className="hidden lg:block m-auto">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " text-black hover:opacity-100"
                          : "hover:text-black hover:opacity-100",
                        "px-3 py-4 text-sm font-normal opacity-75 space-links"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href={"/ioscertificates"}
              className="flex flex-shrink-0 items-center"
            >
              <img
                className="block h-10 w-full lg:hidden"
                src={"/assets/iso/iso.png"}
                alt="iso-logo"
              />
              <img
                className="hidden h-10 w-full lg:block"
                src={"/assets/iso/iso.png"}
                alt="iso-logo"
              />
            </Link>

            {/* REGISTER DIALOG */}

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
              <div className="hidden lg:block">
                <button className="text-blue text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out leafbutton bg-lightblue hover:text-white hover:bg-blue">
                  Request a quote
                </button>
              </div>
            </div>

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
