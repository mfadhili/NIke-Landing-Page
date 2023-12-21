import {star} from "../assets/icons/index.js";

export function ReviewCard({imgURL,feedback,rating,customerName}) {
    return (
        <div className="flex justify-center items-center flex-col">
            <img src={imgURL} alt="custonmer" className=" rounded-full object-cover w-[120px] h-[120px]"/>
            <p className="mt-4 text-center info-text">{feedback}</p>
            <div className="flex my-2 gap-3">
                <img src={star} alt="" className="object-contain m-0" width={24} height={24}/>
                <p className="info-text">({rating})</p>
            </div>
            <h3 className="font-palanquin font-bold text-2xl">{customerName}</h3>
        </div>
    )
}