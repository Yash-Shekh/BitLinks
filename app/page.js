import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-full">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-3xl text-blue-700 text-center">
            BitLinks – Your Smart URL Shortener</h1>

          <div className=" text-xl text-gray-500 text-center">
            <p>Simplify long links into short, shareable URLs.</p>
            <p>Fast, reliable, and built for modern web users.</p>
            <p>Track clicks and manage your links with ease.</p>
          </div>
          <div className="flex gap-4 my-2">
            <Link href="/short" >
              <button className='bg-blue-700 text-white px-2 py-1 rounded-lg font-bold text-xl'>
                Try Now</button></Link>
            <Link href="/About" >
              <button className='bg-blue-700 text-white px-2 py-1 rounded-lg font-bold text-xl'>
                Learn More</button></Link>
          </div>
        </div>
        <div className="flex justify-center items-center relative h-[75vh] p-4">
          <Image
            className="pt-10"
            alt="An Image of Office" src={"/blue.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
