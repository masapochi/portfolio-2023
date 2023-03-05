import { useState } from "react";
import Menus from "./Menus";
import TitleLink from "./TitleLink";
import Toggler from "./Toggler";

export default function Navbar(): JSX.Element {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-gray-200 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <TitleLink />
              <Toggler
                isNavbarOpen={isNavbarOpen}
                setIsNavbarOpen={setIsNavbarOpen}
              />
            </div>
          </div>
          <div>
            <Menus isNavbarOpen={isNavbarOpen} />
          </div>
        </div>
      </nav>
    </>
  );
}
