import Navbar from "@/components/Navbar"
import Image from "next/image"
import React from "react"

export default function Page() {
    return (
        <main className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-[90dvh] gap-y-10">
                <Image src={"/images/Wajarlah.png"} alt="wajarlah" width={300} height={300} />
                <p className="text-3xl italic">
                    &quot;Karena manusia tempatnya salah dan lupa, Wajarlah manusia bukan nabi boyy&#33;&#33;&#33;&quot;
                </p>
            </div>
        </main>
    )
}
