import {Button} from "../components/Button.jsx";

export const Subscribe = () => {
    return (
        <section className="max-container flex justify-center items-center gap-10 max-lg:flex-col " id="contact-us">
            <h3 className="capitalize font-bold font-palanquin text-4xl text-center leading-[78px] lg:max-w-md">
                Sign up for <span className="text-coral-red">Updates</span> & newsletter
            </h3>
            <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full ">
                <input type="text" placeholder="subscriber@nike.com" className="input" />
                <div className="flex max-sm:justify-end items-center max-sm:w-full">
                    <Button label="Sign up" fullWidth />
                </div>
            </div>
        </section>
    )
}