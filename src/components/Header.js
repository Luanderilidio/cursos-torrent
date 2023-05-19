import { useState } from "react";
import { Bell, List, MagnifyingGlass, X } from "phosphor-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleDrawer() {
    setIsOpen(!isOpen);
  }
  const handleMenu = () => setShowMenu(!showMenu);
  return (
    <>
      <div className=" bg-[#191732] shadow-lg shadow-black/50 text-white border-red-500 ">
        <div className="grid grid-cols-12 py-3">
          <div className="col-span-1" />
          <div className="col-span-5 sm:col-span-7  flex items-center justify-between ">
            <Image src={Logo} />
            <div className="hidden sm:block flex-col group hover:text-[#2beff2] transition-all ease-in  active:scale-95">
              <button className="py-1 text-sm font-Inter font-bold">
                HOME
              </button>
              <div className="transition-all ease-in-out w-0 group-hover:w-full h-1 bg-[#2beff2]" />
            </div>
            <div className="hidden sm:block flex-col group hover:text-[#2beff2] transition-all ease-in  active:scale-95">
              <button className="py-1 text-sm font-Inter font-bold">
                HOME
              </button>
              <div className="transition-all ease-in-out w-0 group-hover:w-full h-1 bg-[#2beff2]" />
            </div>
            <div className="hidden sm:block flex-col group hover:text-[#2beff2] transition-all ease-in  active:scale-95">
              <button className="py-1 text-sm font-Inter font-bold">
                HOME
              </button>
              <div className="transition-all ease-in-out w-0 group-hover:w-full h-1 bg-[#2beff2]" />
            </div>
            <div className="hidden sm:block flex-col group hover:text-[#2beff2] transition-all ease-in  active:scale-95">
              <button className="py-1 text-sm font-Inter font-bold">
                HOME
              </button>
              <div className="transition-all ease-in-out w-0 group-hover:w-full h-1 bg-[#2beff2]" />
            </div>
            <div className="hidden sm:block flex-col group hover:text-[#2beff2] transition-all ease-in  active:scale-95">
              <button className="py-1 text-sm font-Inter font-bold">
                HOME
              </button>
              <div className="transition-all ease-in-out w-0 group-hover:w-full h-1 bg-[#2beff2]" />
            </div>
            <div />
          </div>
          <div className="hidden sm:flex col-span-5 sm:col-span-3 ">
            <input
              type="text"
              placeholder="Pesquisar curso"
              className="input input-ghost w-full max-w-xs focus:text-white focus:ring-2 focus:ring-[#2beff2] focus:bg-gray-600/30"
            />
          </div>
          <div className="flex items-center justify-end gap-5 sm:hidden col-span-5 ">
            <Bell size={25} weight="bold" />

            <MagnifyingGlass size={25} weight="bold" />

            <List onClick={toggleDrawer} size={25} weight="bold" />
          </div>
          <div className="col-span-1 " />
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="w-full bg-black"
        size="100%"
        style={{ background: "#141943" }}
      >
        <div className="h-screen w-screen p-6 font-Inter">
          <div className="flex items-center justify-between">
            <img alt="logo_viplink" className="w-28" src={Logo} />
            <X
              onClick={toggleDrawer}
              className="transition-colors text-white ease-in-out hover:text-red-600"
              size={25}
              weight="bold"
            />
          </div>
          <div className="w-full flex h-screen flex-col items-center justify-evenly gap-5">
            <div />
            <div className="flex flex-col gap-6 items-center justify-center">
              <div className=" flex-col group hover:text-[#4F46E5] transition-all ease-in-out  active:scale-95">
                <button className=" py-1 text-2xl font-Inter text-white  font-bold">
                  For influencers
                </button>
                <div className="transition-all ease-in-out w-0 group-hover:w-full h-1 bg-[#4F46E5]" />
              </div>
              <div className="flex-col group hover:text-[#4F46E5] transition-all ease-in active:scale-95">
                <button className="py-1 text-2xl font-Inter text-white  font-bold">
                  About us
                </button>
                <div className="transition-all ease-in-out w-0 group-hover:w-full h-1 bg-[#4F46E5]" />
              </div>
              <div className="flex-col group hover:text-[#4F46E5] transition-all ease-in active:scale-95">
                <button className="py-1 text-2xl font-Inter text-white font-bold">
                  Terms of Use
                </button>
                <div className="transition-all ease-in-out w-0 group-hover:w-full h-1 bg-[#4F46E5]" />
              </div>
            </div>
            <div className="w-full gap-7 flex flex-col items-center justify-center">
              <button className="btn btn-outline  text-lg w-full border-violet-700 hover:border-violet-700 hover:bg-transparent active:bg-transparent shadow-lg hover:shadow-violet-700/40 shadow-violet-700/20 active:text-violet-700 hover:text-violet-700 text-violet-700 rounded-xl sm:flex items-center gap-2 capitalize">
                Sign Up
              </button>
              <button className="btn  text-whitetext-lg w-full bg-violet-700 border-violet-700 hover:bg-violet-600 active:bg-violet-700 shadow-lg hover:shadow-violet-700/40 shadow-violet-700/20 text-white rounded-xl sm:flex items-center gap-2 capitalize">
                Sign In
              </button>
            </div>
            <div />
          </div>
        </div>
      </Drawer>
    </>
  );
}
