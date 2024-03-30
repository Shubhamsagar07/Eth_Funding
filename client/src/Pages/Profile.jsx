import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import axios from "axios";
import FundCard from "../components/FundCard/FundCard";

export default function Profile(user) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [campaign, setCampaign] = useState(null);

  async function getActiveCompaign() {
    axios
      .get("http://localhost:5000/userCampaign", {
        params: { email: user.user.email },
      })
      .then((res) => {
        console.log(res);
        setCampaign(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getActiveCompaign();
  }, []);


  function deleteFund(id) {
    axios.post("http://127.0.0.1:5000/deleteFund", {id: id})
         .then((res) => {
           if (res) {
             setCampaign(res.data);
             getActiveCompaign()
           }
         })

  }

  return (
    <div className="w-full min-h-screen text-white gradient-bg-welcome">
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
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white font-semibold mb-4">
          User Dashboard
        </h1>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="font-semibold">Username:</span>
            <span className="ml-2">{user.user.name}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">Email:</span>
            <span className="ml-2">{user.user.email}</span>
          </div>
        </div>
      </div>
      <hr className="w-[30rem] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10" />
      <h1 className="text-3xl text-white text-center underline">
        ALL Active Campaign
      </h1>
      <div className="flex flex-col items-center justify-center m-10">
        {campaign != null ?
          campaign.map((data) => {
            return (
              <FundCard
                _id={data._id}
                title={data.problem}
                username={data.username}
                desc={data.description}
                verified={data.verified}
                deleteFund={deleteFund}
                User={true}
              />
            );
          }):<></>}
      </div>
    </div>
  );
}
