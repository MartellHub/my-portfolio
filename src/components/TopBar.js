import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { DiStackoverflow } from "react-icons/di";

export default function topBar() {
    // window.scrollY > 250
  return (
    <nav className=" bg-slate-400 h-10 sticky top-0 flex justify-between px-40 items-center ">
      <div className="flex text-xl gap-5 ">
        <div className=" hover:cursor-pointer">
          <a href="https://github.com/">
            <AiOutlineLinkedin />
          </a>
        </div>
        <div className=" hover:cursor-pointer">
          <AiOutlineFacebook />
        </div>
        <div className=" hover:cursor-pointer">
          <AiOutlineGithub />
        </div>
        <div className=" hover:cursor-pointer">
          <DiStackoverflow />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="">Projects</div>
        <div>Contact Me</div>
      </div>
    </nav>
  );
}
