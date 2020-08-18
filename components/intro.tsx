import React from "react";
import Header from '../components/header'

const Intro = () => {
    return (
        <>
            {/*<Header/>*/}
            <section className="flex-col flex items-center max-w-lg mx-auto py-40">
                <div className="bg-cover h-48 w-48 rounded-full" style={{backgroundImage: `url("/images/profile.jpg")`}}/>
                <h1 className="text-4xl font-bold tracking-tighter leading-tight mt-8">
                    Hey, I’m Jalal Azimi.
                </h1>
                <p className="text-center text-lg mt-5 md:pl-8">
                    I’m a developer and designer living in Dublin, Ireland. You've found my personal slice of the
                    internet – everything you want to know and more is here.
                </p>
            </section>
        </>
    )
}

export default Intro
