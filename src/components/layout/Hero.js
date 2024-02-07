import Image from "next/image";
export default function Hero(){
    return(
        <section>
            <h1>
                Everything is better with a Pizza
            </h1>
            <p>
                Pizza is the missing piece that makes
                everday complete,a simple yet 
                delicious joy in life.
            </p>
            <Image src='/pizza1.png' alt='PiZZA' height={100} width={500}/>
        </section>
    );

}