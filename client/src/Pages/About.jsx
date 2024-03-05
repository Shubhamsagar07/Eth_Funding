import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

export default function About(user) {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="gradient-bg-welcome min-h-screen">
      <nav className="w-full flex md:justify-center justify-between items-center p-4">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          {/* <img src={logo} alt="logo" className="w-32 cursor-pointer" /> */}
          <h1 className="text-white text-3xl font-bold">ETH Funding.</h1>
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {/* {["About Us", "Team", "Vision"].map((item, index) => (
                <NavBarItem key={item + index} title={item} />
              ))} */}
          <li className="py-2 px-7 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="py-2 px-7 cursor-pointer">
            <Link to="/vision">Vision</Link>
          </li>
          <li className="py-2 px-7 cursor-pointer">
            <Link to="/team">Team</Link>
          </li>
          {/* <li className={`mx-4 cursor-pointer`}> <Link to="/tools">Tool</Link> </li> */}
          <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            <Link to="/addFunding">Add Funding</Link>
          </li>
          <div className="px-2">
            <p>Hello {user.user.name}</p>
          </div>
          <div className="px-2">
            <Link to="/profile">Visit Dashboard</Link>
          </div>
          <div>
            <Link to="/">Logout</Link>
          </div>
        </ul>
        <div className="flex relative">
          {!toggleMenu && (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {["Market", "Exchange", "Tutorials", "Wallets"].map(
                (item, index) => (
                  <NavBarItem
                    key={item + index}
                    title={item}
                    classprops="my-2 text-lg"
                  />
                )
              )}
            </ul>
          )}
        </div>
      </nav>
      <div className=" text-white font-semibold text-4xl px-36 py-14 hover:text-5xl cursor-pointer text-center ">
        Eth-Funding
      </div>
      <div className=" text-justify font-extralight text-red-200 px-72 justify-end cursor-pointer hover:text-slate-100 ">
        Eth-Funding is an online platform which is designed to support the
        people those who are in need of funds With our easy-to-use platform, you
        can create a campaign and rally support from people who believe in your
        project. This project is developed as a Final year project to understand
        more about block-chain technology, how it can be introduced in more easy
        way in people's life. Any one who wish to take donation for their need
        can simply connect their wallets. and then fill a form to register a
        campaign. Then their request is broadcasted in the platform to all the
        users To ensure that the request is from the legal sites a varification
        process is done in which the user is asked for certaion documents
        related to campaign. The users whose data has been varified successfully
        will be provided with a varification tick in front of their campaign
        they people who fails to provide the documents will not be provided with
        the varification tick. This will ensure the donators to have a clear
        vision about the campaign being safe or not!. Currently the system only
        supports transactions through etheriums as its currently in testing
        version soon more option will be added As the transaction is done
        through the blockchain one can easily trace the transaction through
        their wallets More over their is also a profile page for the registered
        users to maintain their account where they can easily change their
        passwords and user names . Our community is made up of individuals who
        are eager to discover new ideas and be a part of something meaningful.
        Join us in shaping the future and turning dreams into reality. Together,
        we can make a difference.
      </div>
    </div>
  );
}
