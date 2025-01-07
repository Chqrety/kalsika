"use client"

import LinkNextPage from "@/components/LinkNextPage"
import Navbar from "@/components/Navbar"
import Gaya from "@/components/newton-2/Gaya"
import Massa from "@/components/newton-2/Massa"
import Percepatan from "@/components/newton-2/Percepatan"
import Resultan from "@/components/newton-2/Resultan"
import { Select, SelectItem } from "@nextui-org/react"
import Link from "next/link"
import React, { Children, useState } from "react"

export const answers = [
    { key: 1, label: "Resultan Gaya" },
    { key: 2, label: "Massa" },
    { key: 3, label: "Gaya" },
    { key: 4, label: "Percepatan" },
]

export default function Page() {
    const [usaha, setUsaha] = useState(null)
    const [massa1, setMassa1] = useState(null)
    const [massa2, setMassa2] = useState(null)
    const [massa, setMassa] = useState(null)
    const [gaya, setGaya] = useState(null)
    const [percepatan, setPercepatan] = useState(null)
    const [hasil, setHasil] = useState(null)
    const [activeMenu, setActiveMenu] = useState(null)

    const hitungResultanGaya = () => {
        if (
            usaha !== null &&
            massa1 !== null &&
            massa2 !== null &&
            activeMenu === 1
        ) {
            const totalMassa = massa1 + massa2
            const percepatan = usaha / totalMassa
            const resultanGaya = usaha - massa2 * percepatan
            setHasil(
                `a =${percepatan.toFixed(2)} m/s²,
                ∑F = ${resultanGaya.toFixed(2)} N`,
            )
        }
    }

    const hitungPercepatan = () => {
        if (gaya && massa && activeMenu === 2) {
            const percepatan = gaya / massa
            setHasil(`${percepatan.toFixed(2)} m/s²`)
        }
    }

    const hitungMassa = () => {
        if (percepatan && gaya && activeMenu === 3) {
            const massa = gaya / percepatan
            setHasil(`${massa.toFixed(2)} kg`)
        }
    }

    const hitungGaya = () => {
        if (percepatan && massa && activeMenu === 4) {
            const gaya = massa * percepatan
            setHasil(`${gaya.toFixed(2)} kg`)
        }
    }

    return (
        <main className="flex flex-col items-center">
            <Navbar />
            <div className="flex flex-col items-center w-full justify-center min-h-[85dvh] p-10 gap-y-5 max-w-5xl">
                <div className="flex w-full gap-x-5">
                    <div className="flex w-full py-5 pl-8 text-xl font-bold bg-gray-200 rounded-xl">
                        Hukum Newton 2
                    </div>
                    <LinkNextPage
                        href={"/kalkulator/newton-3"}
                        name={"Hukum Newton 3"}
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
                        <Resultan
                            className={activeMenu === 1 ? "flex" : "hidden"}
                            setUsaha={setUsaha}
                            setMassa1={setMassa1}
                            setMassa2={setMassa2}
                            hitungResultan={hitungResultanGaya}
                        />
                        <Percepatan
                            className={activeMenu === 2 ? "flex" : "hidden"}
                            SetGaya={setGaya}
                            setMassa={setMassa}
                            hitungPercepatan={hitungPercepatan}
                        />
                        <Massa
                            className={activeMenu === 3 ? "flex" : "hidden"}
                            SetGaya={setGaya}
                            setPercepatan={setPercepatan}
                            hitungMassa={hitungMassa}
                        />
                        <Gaya
                            className={activeMenu === 4 ? "flex" : "hidden"}
                            SetMassa={setMassa}
                            setPercepatan={setPercepatan}
                            hitungGaya={hitungGaya}
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
