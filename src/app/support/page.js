import Navbar from "@/components/Navbar"
import Image from "next/image"
import React from "react"

export default function Page() {
    return (
        <main className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-[90dvh] gap-y-10">
                <div className="px-5 py-3 bg-gray-200 rounded shadow">
                    <p className="text-lg font-bold">Website ini dibuat menggunakan:</p>
                    <ul className="pl-3">
                        <li>
                            <span className="font-bold">Next.JS</span> <span className="italic">v15.0.3</span>
                        </li>
                        <li>
                            <span className="font-bold">Tailwind</span> <span className="italic">v3.4.15</span>
                        </li>
                        <li>
                            <span className="font-bold">Next UI</span> <span className="italic">v2.4.8</span>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}
