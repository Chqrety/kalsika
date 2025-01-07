"use client"

import React, { useState } from "react"
import { Button, Input, Select, SelectItem } from "@nextui-org/react"
import Navbar from "@/components/Navbar"
import LinkNextPage from "@/components/LinkNextPage"
import Gravitasi from "@/components/potensial/Gravitasi"
import Pegas from "@/components/potensial/Pegas"
import Listrik from "@/components/potensial/Listrik"

const gravitations = [
    { key: 9.8, label: "9,8 m/s²" },
    { key: 10, label: "10 m/s²" },
]

export const answers = [
    { key: 1, label: "Potensial Gravitasi" },
    { key: 2, label: "Potensial Pegas" },
    { key: 3, label: "Potensial Listrik" },
]

export default function Page() {
    const [massa, setMassa] = useState(null)
    const [gravitasi, setGravitasi] = useState(null)
    const [tinggi, setTinggi] = useState(null)
    const [konstanta, setKonstanta] = useState(null)
    const [kompresi, setKompresi] = useState(null)
    const [hasil, setHasil] = useState(null)
    const [q1, setQ1] = useState()
    const [q2, setQ2] = useState()
    const [jarak, setJarak] = useState(null)
    const [activeMenu, setActiveMenu] = useState(null)

    const hitungGravitasi = () => {
        if (massa && gravitasi && tinggi && activeMenu === 1) {
            const energi = massa * gravitasi * tinggi
            setHasil(energi.toFixed(2))
        }
    }

    const hitungPegas = () => {
        if (konstanta && kompresi && activeMenu === 2) {
            const potensial = 0.5 * konstanta * Math.pow(kompresi, 2)
            setHasil(potensial.toFixed(2))
        }
    }

    const hitungListrik = () => {
        if (q1 && q2 && jarak && activeMenu === 3) {
            const k = 9 * Math.pow(10, 9)
            const q1Coulomb = q1 * Math.pow(10, -6)
            const q2Coulomb = q2 * Math.pow(10, -6)
            const listrik = (k * q1Coulomb * q2Coulomb) / jarak
            setHasil(listrik.toFixed(2))
        }
    }

    return (
        <main className="flex flex-col items-center">
            <Navbar />
            <div className="flex flex-col items-center w-full justify-center min-h-[85dvh] p-10 gap-y-5 max-w-5xl">
                <div className="flex w-full gap-x-5">
                    <div className="flex w-full py-5 pl-8 text-xl font-bold bg-gray-200 rounded-xl">
                        Gaya Potensial
                    </div>
                    <LinkNextPage
                        href={"/kalkulator/simpel-vektor"}
                        name={"Simpel Vektor"}
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
                        <Gravitasi
                            className={activeMenu === 1 ? "flex" : "hidden"}
                            setMassa={setMassa}
                            setGravitasi={setGravitasi}
                            setTinggi={setTinggi}
                            hitungGravitasi={hitungGravitasi}
                        />
                        <Pegas
                            className={activeMenu === 2 ? "flex" : "hidden"}
                            setKonstanta={setKonstanta}
                            setKompresi={setKompresi}
                            hitungPegas={hitungPegas}
                        />
                        <Listrik
                            className={activeMenu === 3 ? "flex" : "hidden"}
                            setQ1={setQ1}
                            setQ2={setQ2}
                            setJarak={setJarak}
                            hitungListrik={hitungListrik}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-16 bg-gray-200 lg:h-auto lg:w-1/3 rounded-xl">
                        {hasil ? (
                            <>
                                <p className="text-base font-bold md:text-2xl lg:text-3xl">
                                    {hasil ? `${hasil} J` : ""}
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
