"use client"

import Navbar from "@/components/Navbar"
import { Button, Input } from "@nextui-org/react"
import Link from "next/link"
import React, { useState } from "react"

export default function Page() {
    const [gaya, setGaya] = useState(null)
    const [massaA, setMassaA] = useState(null)
    const [massaR, setMassaR] = useState(null)
    const [hasil, setHasil] = useState(null)

    const hitungNewton3 = () => {
        if (gaya !== null && massaA !== null && massaR !== null) {
            const percepatanAksi = gaya / massaA
            const percepatanReaksi = gaya / massaR
            setHasil({ percepatanAksi: percepatanAksi.toFixed(2), percepatanReaksi: percepatanReaksi.toFixed(2) })
        }
    }
    return (
        <main className="flex flex-col items-center">
            <Navbar />
            <div className="flex flex-col items-center w-full justify-center min-h-[85dvh] p-10 gap-y-5 max-w-5xl">
                <div className="flex w-full gap-x-5">
                    <div className="flex w-full py-5 pl-8 text-xl font-bold bg-gray-200 rounded-xl">Hukum Newton 3</div>
                    <div className="flex items-center justify-center w-56 px-5 italic bg-gray-200 rounded-xl">
                        <Link href="/kalkulator/pegas">Gaya Pegas &gt;</Link>
                    </div>
                </div>
                <div className="flex w-full gap-x-5">
                    <div className="flex flex-col w-2/3 px-8 py-5 text-lg font-semibold bg-gray-200 gap-y-8 rounded-xl">
                        <p>Isi Sendiri Ya Ndes!!</p>
                        <div className="flex flex-col max-w-lg gap-y-5">
                            <Input
                                label="F (Gaya)"
                                type="number"
                                onChange={(e) => setGaya(parseFloat(e.target.value))}
                                endContent={<p className="text-sm text-gray-400">N</p>}
                            />
                            <Input
                                label="m₁ (Massa₁)"
                                type="number"
                                onChange={(e) => setMassaA(parseFloat(e.target.value))}
                                endContent={<p className="text-sm text-gray-400">kg</p>}
                            />
                            <Input
                                label="m₂ (Massa₂)"
                                type="number"
                                onChange={(e) => setMassaR(parseFloat(e.target.value))}
                                endContent={<p className="text-sm text-gray-400">kg</p>}
                            />
                        </div>
                        <div className="flex justify-end">
                            <Button color="primary" className="bg-black" onClick={hitungNewton3}>
                                <p className="font-bold">Wess</p>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/3 bg-gray-200 rounded-xl">
                        {hasil ? (
                            <>
                                <p className="text-base font-bold md:text-2xl lg:text-5xl">
                                    {hasil ? `aₐ = ${hasil.percepatanAksi} m/s²` : ""}
                                </p>
                                <p className="text-base font-bold md:text-2xl lg:text-5xl">
                                    {hasil ? `aᵣ = ${hasil.percepatanReaksi} m/s²` : ""}
                                </p>
                            </>
                        ) : (
                            <p className="text-sm font-semibold md:text-base lg:text-xl">Hasil ntar disini</p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}
