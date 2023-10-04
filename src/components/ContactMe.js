import { useState } from "react";

export default function ContacktMe() {
  const [send, setSend] = useState({
    sender:'',
    mail:'',
    message: '',
  })

  const hundelSubmit = (e) =>{
    ...send,
    setSend(e.target.value)
  }
  return (
    <div className=" h-full flex justify-center items-center bg-[#050046]">
      <form className=" w-[60%] flex flex-col mt-10 gap-5 text-white">
        <input type="text" placeholder="Name" className="  bg-transparent border-[0.5px] border-black p-1 rounded-lg placeholder:text-white/50 placeholder:text-ml-3" />
        <input type="email" placeholder="E-mail" className=" bg-transparent border-[0.5px] border-black p-1 rounded-lg placeholder:text-white/50" />
        <textarea type="text" placeholder="text" className="h-[200px]  bg-transparent border-[0.5px] border-black p-1 rounded-lg placeholder:text-white/50" />
        <button className="bg-white text-black font-bold bg-transparent border-[0.5px] border-black p-1 rounded-lg placeholder:text-white/50">Submit</button>
      </form>
    </div>
  );
}
