import {Button} from "../components/Button.jsx";
import {shoe8} from "../assets/images/index.js";

export const SuperQuality = () => {
    return (
        <section className="flex  justify-between items-center max-lg:flex-col gap-10 w-full max-container " id="about-us">
            <div className="flex flex-col flex-1 ">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    We provide you <span className="text-coral-red">Super</span>
                    <br/>
                    <span className="text-coral-red">Quality</span> Shoes
                </h2>
                <p className="info-text mt-4 lg:max-w-lg">
                    Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience providing you with unmatched quality, innovation, and a touch of elegance
                </p>
                <p className="font-montserrat text-slate-gray text-lg leading-7 mt-6 lg:max-w-lg">
                    Our dedication to detail and excellence ensures your satisfaction
                </p>
                <div className="mt-11">
                    <Button label="View details"/>
                </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <img src={shoe8} alt="shoe8" className="object-contain" width={570} height={522}/>
            </div>
        </section>
    )
}