"use client"

import LinkNextPage from "@/components/LinkNextPage"
import Navbar from "@/components/Navbar"
import Gaya from "@/components/pegas/Gaya"
import Konstanta from "@/components/pegas/Konstanta"
import Panjang from "@/components/pegas/Panjang"
import { Button, Input, Select, SelectItem } from "@nextui-org/react"
import React, { useState } from "react"

export const answers = [
    { key: 1, label: "Resultan Gaya Pegas" },
    { key: 2, label: "Perubahan Panjang Pegas" },
    { key: 3, label: "Efektif Pegas Seri dan Paralel" },
]

export default function Page() {
    const [konstanta, setKonstanta] = useState(null)
    const [panjang, setPanjang] = useState(null)
    const [gaya, setGaya] = useState(null)
    const [hasil, setHasil] = useState(null)
    const [activeMenu, setActiveMenu] = useState(null)

    const hitungGaya = () => {
        if (konstanta && panjang && activeMenu === 1) {
            const gaya = konstanta * panjang
            setHasil(`${gaya.toFixed(2)} N`)
        }
    }

    const hitungPanjang = () => {
        if (konstanta && gaya && activeMenu === 2) {
            const panjang = gaya / konstanta
            setHasil(`${panjang.toFixed(2)} m`)
        }
    }

    const hitungKonstanta = () => {
        if (gaya && panjang && activeMenu === 3) {
            const konstanta = gaya / panjang
            setHasil(`${konstanta.toFixed(2)} N/m`)
        }
    }

    return (
        <main className="flex flex-col items-center">
            <Navbar />
            <div className="flex flex-col items-center w-full justify-center min-h-[85dvh] p-10 gap-y-5 max-w-5xl">
                <div className="flex w-full gap-x-5">
                    <div className="flex w-full py-5 pl-8 text-xl font-bold bg-gray-200 rounded-xl">
                        Gaya Pegas
                    </div>
                    <LinkNextPage
                        href={"/kalkulator/gesek"}
                        name={"Gaya Gesek"}
                    />
                </div>
                <div className="flex flex-col w-full h-full gap-5 lg:flex-row">
                    <div className="flex flex-col w-full px-8 py-5 text-lg font-semibold bg-gray-200 lg:w-2/3 gap-y-8 rounded-xl">
                        <div className="flex px-8 mt-5">
                            <Select
                                label="Pilih jawaban apa yang akan dicari"
                                onChange={(e) => {
                                    setActiveMenu(parseInt(e.target.value))
                                    setHasil(null)
                                }}
                            >
                                {answers.map((answer) => (
                                    <SelectItem
                                        key={answer.key}
                                        value={answer.key}
                                    >
                                        {answer.label}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                        <Gaya
                            className={activeMenu === 1 ? "flex" : "hidden"}
                            setKonstanta={setKonstanta}
                            setPanjang={setPanjang}
                            hitungGaya={hitungGaya}
                        />
                        <Panjang
                            className={activeMenu === 2 ? "flex" : "hidden"}
                            setKonstanta={setKonstanta}
                            setGaya={setGaya}
                            hitungPanjang={hitungPanjang}
                        />
                        <Konstanta
                            className={activeMenu === 3 ? "flex" : "hidden"}
                            setGaya={setGaya}
                            setPanjang={setPanjang}
                            hitungKonstanta={hitungKonstanta}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-16 bg-gray-200 lg:h-auto lg:w-1/3 rounded-xl">
                        {hasil ? (
                            <>
                                <p className="text-base font-bold md:text-2xl lg:text-5xl">
                                    {hasil ? hasil : ""}
                                </p>
                            </>
                        ) : (
                            <p className="text-sm font-semibold md:text-base lg:text-xl">
                                ...
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}
