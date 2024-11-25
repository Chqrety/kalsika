"use client"

import LinkNextPage from "@/components/LinkNextPage"
import Navbar from "@/components/Navbar"
import { Button, Input } from "@nextui-org/react"
import Link from "next/link"
import React, { useState } from "react"

export default function Page() {
    const [gaya, setGaya] = useState(null)
    const [sudut, setSudut] = useState(null)
    const [hasil, setHasil] = useState(null)

    const handleInputChange = (e) => {
        let value = parseFloat(e.target.value)

        // Batasi nilai antara 0 dan 360
        if (value > 360) value = 360
        if (value < 0) value = 0

        setSudut(value)
    }

    const hitungVektor = () => {
        if (gaya !== null && sudut !== null) {
            const radian = (Math.PI / 180) * sudut
            const x = gaya * Math.cos(radian)
            const y = gaya * Math.sin(radian)
            setHasil({ x: x.toFixed(2), y: y.toFixed(2) })
        }
    }
    return (
        <main className="flex flex-col items-center">
            <Navbar />
            <div className="flex flex-col items-center w-full justify-center min-h-[85dvh] p-10 gap-y-5 max-w-5xl">
                <div className="flex w-full gap-x-5">
                    <div className="flex w-full py-5 pl-8 text-xl font-bold bg-gray-200 rounded-xl">Simpel Vektor</div>
                    <LinkNextPage href={"/kalkulator/newton-1"} name={"Hukum Newton 1"} />
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
                                value={sudut}
                                onChange={handleInputChange}
                                label="&#952; (Sudut)"
                                type="number"
                                endContent={<p className="text-sm text-gray-400">&deg;</p>}
                            />
                        </div>
                        <div className="flex justify-end">
                            <Button color="primary" className="bg-black" onClick={hitungVektor}>
                                <p className="font-bold">Wess</p>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/3 bg-gray-200 rounded-xl">
                        {hasil ? (
                            <>
                                <p className="text-base font-bold md:text-2xl lg:text-5xl">
                                    {hasil ? `x: ${hasil.x} N` : ""}
                                </p>
                                <p className="text-base font-bold md:text-2xl lg:text-5xl">
                                    {hasil ? `y: ${hasil.y} N` : ""}
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
