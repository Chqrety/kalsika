"use client"

import LinkNextPage from "@/components/LinkNextPage"
import Navbar from "@/components/Navbar"
import { Button, Input, Select, SelectItem } from "@nextui-org/react"
import Link from "next/link"
import React, { useState } from "react"

const gravitations = [
    { key: "9,8", label: "9,8 m/s²" },
    { key: "10", label: "10 m/s²" },
]

export default function Page() {
    const [massa, setMassa] = useState(null)
    const [gravitasi, setGravitasi] = useState(null)
    const [tinggi, setTinggi] = useState(null)
    const [hasil, setHasil] = useState(null)

    const hitungPotensial = () => {
        if (massa !== null && gravitasi !== null && tinggi !== null) {
            const energi = massa * parseFloat(gravitasi.replace(",", ".")) * tinggi
            setHasil(energi.toFixed(2))
        }
    }
    return (
        <main className="flex flex-col items-center">
            <Navbar />
            <div className="flex flex-col items-center w-full justify-center min-h-[85dvh] p-10 gap-y-5 max-w-5xl">
                <div className="flex w-full gap-x-5">
                    <div className="flex w-full py-5 pl-8 text-xl font-bold bg-gray-200 rounded-xl">Gaya Potensial</div>
                    <LinkNextPage href={"/kalkulator/simpel-vektor"} name={"Simpel Vektor"} />
                </div>
                <div className="flex w-full gap-x-5">
                    <div className="flex flex-col w-2/3 px-8 py-5 text-lg font-semibold bg-gray-200 gap-y-8 rounded-xl">
                        <p>Isi Sendiri Ya Ndes!!</p>
                        <div className="flex flex-col max-w-lg gap-y-5">
                            <Input
                                label="m (Massa)"
                                type="number"
                                onChange={(e) => setMassa(parseFloat(e.target.value))}
                                endContent={<p className="text-sm text-gray-400">kg</p>}
                            />
                            <Select label="Mo gravitasi brapa?" onChange={(e) => setGravitasi(e.target.value)}>
                                {gravitations.map((gravitation) => (
                                    <SelectItem key={gravitation.key}>{gravitation.label}</SelectItem>
                                ))}
                            </Select>
                            <Input
                                label="h (Tinggi)"
                                type="number"
                                onChange={(e) => setTinggi(parseFloat(e.target.value))}
                                endContent={<p className="text-sm text-gray-400">m</p>}
                            />
                        </div>
                        <div className="flex justify-end">
                            <Button color="primary" className="bg-black" onClick={hitungPotensial}>
                                <p className="font-bold">Wess</p>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/3 bg-gray-200 rounded-xl">
                        {hasil ? (
                            <>
                                <p className="text-base font-bold md:text-2xl lg:text-5xl">
                                    {hasil ? `Eₚ = ${hasil} J` : ""}
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
