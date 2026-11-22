import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { profile } from "../data/index.js";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-transparent text-gray-200 shadow-lg p-[15px] relative z-[20]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <h2 className="font-bold text-2xl mb-6">Contact Me</h2>
        <div className="flex flex-row items-center justify-around flex-wrap gap-8 mb-8">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-purple-300">
            <FaEnvelope /> <span>{profile.email}</span>
          </a>
          <a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:text-purple-300">
            <FaPhoneAlt /> <span>{profile.phone}</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-purple-300">
            <FaGithub /> <span>GitHub</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-purple-300">
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          &copy; {new Date().getFullYear()} {profile.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
