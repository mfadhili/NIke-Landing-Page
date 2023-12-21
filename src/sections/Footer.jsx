import {footerLogo} from "../assets/images/index.js";
import {footerLinks, socialMedia} from "../constants/index.js";
import {copyrightSign} from "../assets/icons/index.js";

export const Footer = () => {
    return (
        <footer className="max-container" >
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <a href="/">
                        <img src={footerLogo} alt="Footer Logo"  width={150} height={46}/>
                    </a>
                    <p className="mt-6 text-base font-montserrat text-white-400 leading-7 sm:max-w-sm ">
                        Get shoes ready for the new term at your latest Nike store.
                        Find Your perfect Size In Store. Get Rewards
                    </p>
                    <div className="flex items-center gap-5 mt-8 ">
                        {socialMedia.map((item) => (
                            <div className=" flex justify-center items-center w-12 h-12 bg-white rounded-full">
                                <img src={item.src} alt={item.alt} width={24} height={24}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                    {footerLinks.map((footerLink) => (
                        <div key={footerLink} className="" >
                            <h4 className="text-white font-montserrat text-xl font-medium leading-normal mb-6">{footerLink.title}</h4>
                            <ul className="">
                                {footerLink.links.map((link) => (
                                    <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer ">
                                        <a href="" className="">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-white-400 flex justify-between mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                    <img src={copyrightSign} alt="copyright sign"  height={20} width={20} className="rounded-full m-0"/>
                    <p>Copyright. All rights reserved</p>
                </div>
                <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
            </div>
        </footer>
    )
}