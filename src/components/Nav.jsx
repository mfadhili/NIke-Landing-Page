import {headerLogo} from "../assets/images/index.js";
import {navLinks} from "../constants/index.js";
import {hamburger} from "../assets/icons/index.js";

export function Nav() {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={129} height={29} className="m-0 w-[129px] h-[29px]"/>
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {
                        navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray" >
                                    {item.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <a href="#Sign-in" className=" flex justify-center items-center gap-16 max-lg:hidden font-montserrat text-lg text-black leading-normal"> Sign in / Explore now</a>
                <div className="">
                    <img src={hamburger} alt="hamburger menu" height={25} width={25} className="hidden max-lg:block"/>
                </div>
            </nav>
        </header>
    )
}