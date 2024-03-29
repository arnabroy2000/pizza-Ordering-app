import Image from "next/image";
import Right from "./icons/Right";
export default function Hero(){
    return(
        <section className="grid grid-cols-2">
            <div>
                <h1 className="text-4xl font-semibold">
                    Everything is better with a Pizza
                </h1>
                <p className= "my-4 text-gray-500">
                    Pizza is the missing piece that makes
                    everday complete,a simple yet 
                    delicious joy in life.
                </p>
                <div className="flex gap-4">
                    <button className="bg-primary uppercase flex gap-2 text-white
                     px-4 py-2 rounded-full">
                        Order Now
                        <Right />
                        </button>
                    <button className="flex gap-2 py-2 text-gray-600 font-semibold ">
                        Learn More
                        <Right />
                    </button>
                </div>
            </div>
            <div className="relative mx-9">
                <Image src='/pizzza1.jpg' alt='PiZZA' height={180} width={180}/>
            </div>
            
        </section>
    );

}