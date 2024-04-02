import React, { useState } from "react";
import { Navbar, Footer, Services, Welcome } from "../components";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

export default function AddFunding(user) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const [description, setDescription] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [toggleMenu, setToggleMenu] = useState(true);

  function handleSubmit () {
    const data = {
        email: email,
        username: fullName,
        problem: problem,
        description: description,
        walletAddress: walletAddress,
    }
    console.log(data)
    axios.post("http://localhost:5000/addFunding", data)
    .then(() => {
        alert("Request Submitted, Wait for review")
    })
    .catch(() => {
        alert("Something Went Wrong Try Again")
    })
  }
  return (
    <div>
      <div className="App">
        <div className="min-h-screen">
          <div className="gradient-bg-welcome">

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

            <div className="flex flex-col items-center justify-center py-32">
              <h1 className="text-center p-10 text-white text-2xl">Fill the form to add your crowd funding Project.</h1>
              <form class="w-full max-w-sm">
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
    class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
    for="inline-full-name"
                    >
                      Full Name
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      onChange={(e) => setFullName(e.target.value)}
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      value={fullName}
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="inline-full-name"
                    >
                      Email
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="email"
                      value={email}
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="inline-full-name"
                    >
                      Problem
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      onChange={(e) => setProblem(e.target.value)}
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      value={problem}
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="inline-full-name"
                    >
                      Description
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <textarea
                      onChange={(e) => setDescription(e.target.value)}
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      value={description}
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="inline-full-name"
                    >
                      Wallet Address
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      onChange={(e) => setWalletAddress(e.target.value)}
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      value={walletAddress}
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center">
                  <div class="md:w-1/3"></div>
                  <div class="md:w-2/3">
                    <button
                      onClick={handleSubmit}
                      class="shadow bg-blue-600 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <Services />
          <Footer />
        </div>
      </div>
    </div>
  );
}
