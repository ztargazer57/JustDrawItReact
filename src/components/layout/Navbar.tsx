import { Menu, MenuButton, MenuItem, MenuItems, } from "@headlessui/react";
import { Search } from "lucide-react";
export default function Navbar() {
  return (
    <nav className="w-screen bg-jdwhite shadow-sm px-6 py-2 pl-6 md:pl-20 fixed z-40">
      <div className="flex">
        {/* Push search + profile to the right */}
        <div className="flex gap-50 ml-auto">
          {/* Search */}
          <div className="flex bg-jdchocomilk text-white rounded-full px-4 py-2 w-120">
            <Search className="text-white/50"/>
            <input
              type="search"
              placeholder="Search challenges..."
              className="bg-transparent outline-none ml-2 w-full text-sm"
            />
          </div>

          {/* Profile */}

          <div className="flex gap-3 bg-jdchocomilk text-jdbrown rounded-full pl-4">
            <div className="m-auto">
              <p>John Doe</p>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
              <Menu as="div" className=" inline-block">
                <MenuButton className="">
                  <img
                    src="https://i.pravatar.cc/100"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-white/10 rounded-md bg-jdbrown shadow-md outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-jdwhite data-focus:bg-jdchocomilk/5 data-focus:text-white data-focus:outline-hidden"
                      >
                        Profile Settings
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-jdwhite data-focus:bg-jdchocomilk/5 data-focus:text-white data-focus:outline-hidden"
                      >
                        Sign Out
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
