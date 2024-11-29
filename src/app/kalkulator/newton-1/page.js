"use client"

import LinkNextPage from "@/components/LinkNextPage"
import Navbar from "@/components/Navbar"
import { Button, Input, Select, SelectItem } from "@nextui-org/react"
import React, { useState } from "react"

const gravitations = [
    { key: 9.8, label: "9,8 m/s²" },
    { key: 10, label: "10 m/s²" },
]

export default function Page() {
    const [massa, setMassa] = useState(null)
    const [gravitasi, setGravitasi] = useState(null)
    const [hasil, setHasil] = useState(null)

    const hitungNewton1 = () => {
        if (massa !== null && gravitasi !== null) {
            const hasil = massa * gravitasi
            setHasil(hasil.toFixed(2))
        }
    }

    return (
        <main className="flex flex-col items-center">
            <Navbar />
            <div className="flex flex-col items-center w-full justify-center min-h-[85dvh] p-10 gap-y-5 max-w-5xl">
                <div className="flex w-full gap-x-5">
                    <div className="flex w-full py-5 pl-8 text-xl font-bold bg-gray-200 rounded-xl">Hukum Newton 1</div>
                    <LinkNextPage href={"/kalkulator/newton-2"} name={"Hukum Newton 2"} />
                </div>
                <div className="flex flex-col w-full h-full gap-5 lg:flex-row">
                    <div className="flex flex-col w-full px-8 py-5 text-lg font-semibold bg-gray-200 lg:w-2/3 gap-y-8 rounded-xl">
                        <p>Isi Sendiri Ya Ndes!!</p>
                        <div className="flex flex-col max-w-full gap-y-5">
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
                        </div>
                        <div className="flex justify-end">
                            <Button color="primary" className="bg-black" onClick={hitungNewton1}>
                                <p className="font-bold">Wess</p>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-16 bg-gray-200 lg:h-auto lg:w-1/3 rounded-xl">
                        {hasil ? (
                            <>
                                <p className="text-base font-bold md:text-2xl lg:text-5xl">
                                    {hasil ? `${hasil} N` : ""}
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
