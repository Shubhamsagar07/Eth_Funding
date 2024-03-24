import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AdminCampanignCard from "../components/AdminCampanignCard/AdminCampanignCard"

export default function Admin() {
  const [admin, setAdmin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [campaign, setCampaign] = useState([]);
  const [user, setUser] = useState([]);
  const [activeFund, setActiveFund] = useState(0);
  function getActiveCompaign() {
    axios
      .get("http://localhost:5000/fund")
      .then((res) => {
        if (res.data) {
          setCampaign(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:5000/user")
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:5000/activeFund")
      .then((res) => {
        console.log(res);
        setActiveFund(res.data.No)
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

  function updateVerification(id, verified) {
    axios.post("http://127.0.0.1:5000/updateVerification", {id: id, verified: verified})
         .then((res) => {
           if (res){
             setCampaign(res.data)
             getActiveCompaign()
           }
         })
  }

  function handleSubmit() {
    if (password === "joker") {
      setAdmin(true);
    }
  }

  if (admin == true) {
    return (
      <div className="w-full h-full text-white gradient-bg-welcome">
        <h1 className="text-3xl py-7 text-white font-bold text-center">Admin Dashboard</h1>
        <h2 className="text-xl text-white text-center">User and Compaign Data</h2>
        <hr className="w-[60rem] h-[2px] mx-auto mt-2 mb-10 bg-gray-100 border-0 rounded" />
        <div className="w-screen">
          {
            campaign
            &&
            <div className="text-white flex flex-wrap">
              <div className="w-full flex justify-evenly">
                <p className="w-[20rem] text-xl border p-10">No. of Campanign:  <span className="underline">{campaign.length}</span></p>
                <p className="w-[20rem] text-xl border p-10">No. of User: <span className="underline">{user.length}</span></p>
              </div>
              <div className="w-full py-5 flex justify-evenly">
                <p className="w-[20rem] text-xl border p-10">Unverified Campanign: <span className="underline">{campaign.length - activeFund}</span></p>
                <p className="w-[20rem] text-xl border p-10">Verified Campanign: <span className="underline">{activeFund}</span></p>
              </div>
            </div>
          }
          <hr className="w-[60rem] h-[2px] mx-auto mt-2 mb-10 bg-gray-100 border-0 rounded" />
          <div className="flex flex-wrap justify-center">
            { campaign ?
              <>
                {campaign.map((data) => {
                  return (

                    <AdminCampanignCard
                      _id={data._id}
                      title={data.problem}
                      username={data.username}
                      desc={data.description}
                      verified={data.verified}
                      deleteFund={deleteFund}
                      updateVerification={updateVerification}
                    />
                  );
                })}
              </>
              :
              <></>
            }
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="w-full h-screen p-20 text-white gradient-bg-welcome flex flex-col items-center">
        <h1 className="text-white text-2xl">Admin Login</h1>
        <div className="w-[20rem] flex flex-col">
          <label>Username</label>
          <input className="text-black" value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
          <label>Password</label>
          <input className="text-black" value={password} type="password" onChange={((e) => setPassword(e.target.value))} />
          <button onClick={() => handleSubmit()} className="border mt-6 p-1" type="submit">Submit</button>
        </div>
      </div>
    )
  }
}
