import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

export default function Team(user) {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className="gradient-bg-welcome min-h-screen ">
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
      <div className=" text-white text-4xl px-6 py-12 text-center font-bold">
        Team Members
      </div>

      <div className="w-full text-white flex flex-col justify-center items-center ">
        <div className="w-96 m-5 py-12 flex flex-col items-center px-10 top-24 border-t-2 border-b-2 border-l-2 border-r-2 rounded-2xl ">
          <h2>
            <img src="/image1.jpeg " className="rounded-lg w-40 h-40"></img>
          </h2>
          <h2 className="p-1 text-white hover:border-blue-500 hover:bg-blue-500 max-w-2xl rounded hover:font-semibold">
            Name: Shubhamsagar Prasad
          </h2>
          <br></br>
          <h2 className="p-1 text-white hover:border-blue-500 hover:bg-blue-500 max-w-2xl rounded hover:font-semibold">
            Position : Frontend/ backend development and research paper work.
          </h2>
          <br></br>
          <h2 className="p-1 text-white hover:border-blue-500 hover:bg-blue-500 max-w-2xl rounded hover:font-semibold">
            Description : The task of developing the frontend along with work of
            research papers with writing the solidity code has been done .
          </h2>
        </div>
        <div className="w-96 m-5 py-12 px-10 flex flex-col items-center font-body border-t-2 border-b-2 border-l-2 border-r-2 rounded-2xl">
          <h2>
            <img src="/image 6.jpeg " className=" w-40 h-44 rounded-lg"></img>
          </h2>
          <h2 className="p-1 text-white hover:border-blue-500 hover:bg-blue-500 w-40 rounded hover:font-semibold">
            Name : Raju Jakkani
          </h2>{" "}
          <br></br>
          <h2 className=" p-1 text-white hover:border-blue-500 hover:bg-blue-500 w-56 rounded hover:font-semibold">
            Position : Frontend and backend developer{" "}
          </h2>{" "}
          <br></br>
          <p className="p-1 text-white hover:border-blue-500 hover:bg-blue-500 max-w-2xl rounded hover:font-semibold">
            Description : Passionate about building scalable web applications
            and connecting the web app with mongodb database."
          </p>
        </div>
        <div className="w-96 m-5 py-12 flex flex-col items-center px-10 top-24 border-t-2 border-b-2 border-l-2 border-r-2 rounded-2xl ">
          <h2 className="">
            <img src="/image4.jpeg " className="rounded-xl w-40 h-40"></img>
          </h2>
          <h2 className="p-1 text-white hover:border-blue-500 hover:bg-blue-500 max-w-2xl rounded hover:font-semibold">
            Name : Harsh Gupta
          </h2>
          <br></br>
          <h2 className="p-1 text-white hover:border-blue-500 hover:bg-blue-500 max-w-2xl rounded hover:font-semibold">
            Position : UI/UX Designer and frontend development{" "}
          </h2>
          <br></br>
          <h2 className="p-1 text-white hover:border-blue-500 hover:bg-blue-500 max-w-2xl rounded hover:font-semibold">
            Description : Creative designer with a focus on user-centered design
            and developing great frontends.
          </h2>
        </div>
        <div className="w-96 m-5 py-12 flex flex-col items-center px-10 top-24 border-t-2 border-b-2 border-l-2 border-r-2 rounded-2xl ">
          <h2>
            <img src="/image2.jpg " className="rounded-lg w-36 h-48"></img>
          </h2>
          <h2 className="p-1 text-white hover:border-blue-500 hover:bg-blue-500 max-w-2xl rounded hover:font-semibold">
            Name : Jinal Patel{" "}
          </h2>
          <br></br>
          <h2 className="p-1 text-white hover:border-blue-500 hover:bg-blue-500 max-w-2xl rounded hover:font-semibold">
            Position : UI/UX Designer/frontend development{" "}
          </h2>
          <br></br>
          <h2 className="p-1 text-white hover:border-blue-500 hover:bg-blue-500 max-w-2xl rounded hover:font-semibold">
            {" "}
            Description :Creative designer with a focus on user-centered design.
          </h2>
        </div>
      </div>
    </div>
  );
}
