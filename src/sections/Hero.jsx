import {Button} from "../components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {shoes, statistics} from "../constants/index.js";
import {bigShoe1} from "../assets/images/index.js";
import {ShoeCard} from "../components/ShoeCard.jsx";
import {useState} from "react";

export function Hero() {
    const [bigShoe, setBigShoe] = useState(bigShoe1);


    return (
        <section id="home" className="w-full flex xl:flex-row  flex-col justify-center min-h-screen max-container">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
                <p className="text-xl font-montserrat text-coral-red">Our Summer collections</p>

                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold" >
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                    <br/>
                    <span className="text-coral-red mt-5 inline-block">Nike</span> Shoes
                </h1>

                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life</p>
                <Button label="Shop now" iconURL={arrowRight}/>

                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-6">
                    {statistics.map((item) => (
                        <div key={item.label}>
                            <p className="font-palanquin font-bold text-4xl">{item.value}</p>
                            <p className="font-montserrat leading-7 text-slate-gray">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex-1 flex justify-center items-center bg-primary bg-hero bg-cover bg-center max-xl:py-40 xl:min-h-screen">
                <img src={bigShoe} alt="Shoe collenctoin" width={610} height={500} className="object-contain relative z-10"/>
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[7%] sm:left-[10%]">
                    {shoes.map((shoe) => (
                        <div key={shoe}>
                            <ShoeCard
                                imgURL={shoe}
                                changeBigShoeImage={ (shoe) => setBigShoe(shoe)}
                                bigShoeImg={bigShoe}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}