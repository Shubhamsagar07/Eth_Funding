import React, { useState } from "react";
import { Navbar, Footer, Services, Welcome } from "../components";
import axios from "axios";

export default function Homepage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const [description, setDescription] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

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
            <Navbar />
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
