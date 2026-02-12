"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'


const Short = () => {

    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [Generate, setGenerate] = useState("")
    const [slug, setSlug] = useState("");

    const submit = () => {
        console.log("slug =", shorturl);
        console.log("generated =", `${window.location.origin}/${shorturl}`);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            url: url,        // make sure these are defined
            shorturl: shorturl.trim().toLowerCase()
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw
        };

        fetch("/api/short", requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Server error: " + response.status);
                }
                return response.json();
            })
            .then((result) => {
                setSlug(shorturl); // SAVE slug FIRST
                // setGenerate(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
                setGenerate(`${window.location.origin}/${shorturl}`);
                setshorturl("");
                seturl("");
                console.log(result);
                alert(result.message);
            })
            .catch((error) => console.error("Fetch error:", error));
    }

    return (
        <main>
            <section className="grid md:grid-cols-2 h-[75vh] md:h-[92vh] justify-center items-center">
                <div className="flex flex-col justify-center items-center relative py-5 px-5 md:h-[50vh] gap-4 bg-blue-50 md:mx-25 my-auto rounded-2xl">
                    <h1 className="font-bold text-2xl md:text-4xl text-blue-700 text-center py-4">
                        Generate Your Short URL's</h1>
                    <div className='flex  items-center flex-col gap-4'>

                        <input
                            className='text-xl outline outline-blue-500 rounded-lg px-4 w-75 md:w-90'
                            onChange={e => { seturl(e.target.value) }}
                            value={url}
                            type="text"
                            placeholder='Enter your URL' />

                        <input
                            className='text-xl outline outline-blue-500 rounded-lg px-4 w-75 md:w-90'
                            onChange={e => { setshorturl(e.target.value.toLowerCase()) }}
                            value={shorturl}
                            type="text"
                            placeholder='Enter your Preference URL' />

                        <button onClick={submit} className='bg-blue-700 text-white px-2 py-1 rounded-lg font-bold text-xl w-fit flex my-4'>
                            Generate . . /</button>
                        {Generate && (
                            <>
                                <span className="font-bold text-lg">Click below to use your short URL:</span>
                                <code className='text-lg font-mono text-blue-700 bg-gray-100 px-4 py-2 rounded-lg w-fit'>
                                    <Link
                                        href={`/${slug}`}
                                        target={'_blank'}
                                    >
                                        {Generate}
                                    </Link>
                                </code>
                            </>
                        )}

                    </div>                  
                </div>
                <div className="hidden md:inline-block justify-center items-center relative h-full">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/Website.mp4"
                        autoPlay
                        loop
                        muted
                    />
                </div>
            </section>
        </main>
    )
}


export default Short
