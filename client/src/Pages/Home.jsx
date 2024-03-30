import React, { useContext, useState, useEffect } from "react";
import { Navbar, Footer, Services, Welcome } from "../components";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { TransactionContext } from "../context/TransactionContext";
import FundCard from "../components/FundCard/FundCard";
import axios from "axios";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

export default function Home(user) {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [fundData, setFundData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      axios
        .get("http://localhost:5000/fund")
        .then((res) => {
          setFundData(res.data);
          console.log(fundData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);

  const {
    connectWallet,
    currentAccount,
    formData,
    setFormData,
    handleChange,
    sendTransaction,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, keyword, message } = formData;
    console.log(amount, keyword, message);

    if (!amount || !message) return;

    sendTransaction();
  };
  console.log(user);
  return (
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
                <p>Hello {user?.user?.name}</p>
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
          <Welcome />

          <div className="flex flex-row flex-wrap flex-1 items-center justify-start w-full px-52 mf:mt-0 mt-10">
            <h1 className="text-white text-[2.5rem] pt-10 px-52">
              Active Crowd Funding.
            </h1>
            <div className="flex flex-row flex-wrap">
              {/* Card for funding */}

              {fundData.map((data) => {
                return (
                  <FundCard
                    title={data.problem}
                    username={data.username}
                    desc={data.description}
                    verified={data.verified}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
