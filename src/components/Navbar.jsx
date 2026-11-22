import { profile, socials } from "../data/index.js";

const links = [
  { label: "About me", href: "#about-me" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="flex flex-row items-center">
          <div className="h-10 w-10 rounded-full border border-[#7042f88b] flex items-center justify-center text-white font-bold bg-[#0300145e]">
            AD
          </div>
          <span className="font-bold ml-[8px] hidden lg:block text-gray-300">
            {profile.name}
          </span>
        </a>

        <div className="hidden md:flex items-center border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="cursor-pointer hover:text-purple-300">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex flex-row gap-5 text-gray-200 text-2xl">
          {socials.map(({ name, href, Icon }) => (
            <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} className="hover:text-purple-300">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
