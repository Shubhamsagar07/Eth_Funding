import { MdVerified } from "react-icons/md";

export default function AdminCampanignCard({ title, username, desc, verified }) {
  return (
    <div>
      {/* Card for funding */}

      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism mt-10 m-1">
        {verified ? (
          <div className="w-20 text-white flex items-center justify-evenly">
            <p>Verified</p>
            <MdVerified />
          </div>
        ) : (
          <></>
        )}
        <h1 className="text-white text-xl">{title}</h1>
        <h3 className="text-white">Author: {username}</h3>
        <p className="text-white my-5">{desc}</p>
        {/* <Input
           placeholder="Address To"
           name="addressTo"
           type="text"
           handleChange={handleChange}
           /> */}
        {/*
        <Input
          placeholder="Amount (ETH)"
          name="amount"
          type="number"
          handleChange={handleChange}
        />

        <Input
          placeholder="Enter Message"
          name="message"
          type="text"
          handleChange={handleChange}
        />

          * */}
        {/* <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} /> */}
        <div className="h-[1px] w-full bg-gray-400 my-2" />
        <button
          type="button"
          onClick={(e) => handleSubmit(e)}
          className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
        >
          Donate
        </button>
      </div>
    </div>
  )
}
