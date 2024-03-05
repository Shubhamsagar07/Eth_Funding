import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function About({ user }) {

  return (
    <div className="gradient-bg-welcome min-h-screen">
      <div className=" text-white font-semibold text-4xl px-36 py-14 hover:text-5xl cursor-pointer text-center ">
        Eth-Funding
      </div>
      <div className=" text-justify font-extralight text-red-200 px-72 justify-end cursor-pointer hover:text-slate-100 ">
      Eth-Funding is an online platform which is designed to support the people those who are in need of funds
      With our easy-to-use platform, you can create a campaign  and rally support from people who believe in your project. 
      This project is developed as a Final year project to understand more about block-chain technology, how it can be introduced in more easy way
      in people's life. Any one who wish to take donation for their need can simply connect their wallets. and then fill a form to register a campaign. Then their request is broadcasted in the platform to all the users 
            To ensure that the request is from the legal sites a varification process is done in which the user is asked for certaion documents related to campaign.
            The users whose data has been varified successfully will be provided with a varification tick in front of their campaign they people who fails to provide the documents will not be provided with the varification tick.
            This will ensure the donators to have a clear vision about the campaign being safe or not!. 
            Currently the system only supports transactions through etheriums as its currently in testing version soon more option will be added
            As the transaction is done through the blockchain one can easily trace the transaction through their wallets 
            More over their is also a profile page for the registered users to maintain their account where they can easily change their passwords and user names .
            Our community is made up of individuals who are eager to discover new ideas and be a part of something meaningful.
            Join us in shaping the future and turning dreams into reality. Together, we can make a difference. 
      </div>
    </div>
  );
}
