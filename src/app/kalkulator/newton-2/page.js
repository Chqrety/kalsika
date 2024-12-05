"use client"

import LinkNextPage from "@/components/LinkNextPage"
import Navbar from "@/components/Navbar"
import { Button, Input } from "@nextui-org/react"
import Link from "next/link"
import React, { Children, useState } from "react"

export default function Page() {
    const [usaha, setUsaha] = useState(null)
    const [massa1, setMassa1] = useState(null)
    const [massa2, setMassa2] = useState(null)
    const [hasil, setHasil] = useState(null)

    const hitungNewton2 = () => {
        if (usaha !== null && massa1 !== null && massa2 !== null) {
            const totalMassa = massa1 + massa2
            const percepatan = usaha / totalMassa
            const resultanGaya = usaha - massa2 * percepatan
            setHasil({ percepatan: percepatan.toFixed(2), resultanGaya: resultanGaya.toFixed(2) })
        }
    }
    return (
        <main className="flex flex-col items-center">
            <Navbar />
            <div className="flex flex-col items-center w-full justify-center min-h-[85dvh] p-10 gap-y-5 max-w-5xl">
                <div className="flex w-full gap-x-5">
                    <div className="flex w-full py-5 pl-8 text-xl font-bold bg-gray-200 rounded-xl">Hukum Newton 2</div>
                    <LinkNextPage href={"/kalkulator/newton-3"} name={"Hukum Newton 3"} />
                </div>
                <div className="flex flex-col w-full h-full gap-5 lg:flex-row">
                    <div className="flex flex-col w-full px-8 py-5 text-lg font-semibold bg-gray-200 lg:w-2/3 gap-y-8 rounded-xl">
                        <p>Masukkan nilai yang dibutuhkan!!</p>
                        <div className="flex flex-col max-w-lg gap-y-5">
                            <Input
                                label="W (Usaha)"
                                type="number"
                                onChange={(e) => setUsaha(parseFloat(e.target.value))}
                                endContent={<p className="text-sm text-gray-400">N</p>}
                            />
                            <Input
                                label="m₁ (Massa₁)"
                                type="number"
                                onChange={(e) => setMassa1(parseFloat(e.target.value))}
                                endContent={<p className="text-sm text-gray-400">kg</p>}
                            />
                            <Input
                                label="m₂ (Massa₂)"
                                type="number"
                                onChange={(e) => setMassa2(parseFloat(e.target.value))}
                                endContent={<p className="text-sm text-gray-400">kg</p>}
                            />
                        </div>
                        <div className="flex justify-end">
                            <Button color="primary" className="bg-black" onClick={hitungNewton2}>
                                <p className="font-bold">Cari</p>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-16 bg-gray-200 lg:h-auto lg:w-1/3 rounded-xl">
                        {hasil ? (
                            <>
                                <p className="text-base font-bold md:text-2xl lg:text-5xl">
                                    {hasil ? `a = ${hasil.percepatan} m/s²` : ""}
                                </p>
                                <p className="text-base font-bold md:text-2xl lg:text-5xl">
                                    {hasil ? `∑F = ${hasil.resultanGaya} N` : ""}
                                </p>
                            </>
                        ) : (
                            <p className="text-sm font-semibold md:text-base lg:text-xl">...</p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}
