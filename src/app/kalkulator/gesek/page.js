"use client"

import React, { useState } from "react"
import { Select, SelectItem } from "@nextui-org/react"
import LinkNextPage from "@/components/LinkNextPage"
import Navbar from "@/components/Navbar"
import Gesek from "@/components/gesek/Gesek"
import Dorong from "@/components/gesek/Dorong"
import Miring from "@/components/gesek/Miring"

export const answers = [
    { key: 1, label: "Gaya Gesekan Statis/Kinetis" },
    { key: 2, label: "Gaya Dorong dengan Gesekan" },
    { key: 3, label: "Gaya Gesek pada Bidang Miring" },
]

export default function Page() {
    const [massa, setMassa] = useState(null)
    const [koefisien, setKoefisien] = useState(null)
    const [gravitasi, setGravitasi] = useState(null)
    const [dorong, setDorong] = useState(null)
    const [percepatan, setPercepatan] = useState(null)
    const [sudut, setSudut] = useState(null)
    const [hasil, setHasil] = useState(null)
    const [activeMenu, setActiveMenu] = useState(null)

    const handleSudut = (e) => {
        let value = parseFloat(e.target.value)

        // Batasi nilai antara 0 dan 360
        if (value > 360) value = 360
        if (value < 0) value = 0

        setSudut(value)
    }

    const hitungGesek = () => {
        if (massa && koefisien && gravitasi && activeMenu === 1) {
            const gaya = koefisien * (massa * gravitasi)
            setHasil(`${gaya.toFixed(2)} N`)
        }
    }

    const hitungDorong = () => {
        if (massa && koefisien && gravitasi && dorong && activeMenu === 2) {
            const kinetis = koefisien * (massa * gravitasi)
            const gayaTotal = dorong - kinetis
            const percepatan = gayaTotal / massa
            setHasil(`${percepatan.toFixed(2)} m/s²`)
        }
    }

    const hitungMiring = () => {
        if (massa && koefisien && gravitasi && sudut && activeMenu === 3) {
            const radian = (Math.PI / 180) * sudut
            const teta = Math.cos(sudut)
            const gaya = koefisien * (massa * gravitasi * teta)
            setHasil(`${gaya.toFixed(2)} N`)
        }
    }

    return (
        <main className="flex flex-col items-center">
            <Navbar />
            <div className="flex flex-col items-center w-full justify-center min-h-[85dvh] p-10 gap-y-5 max-w-5xl">
                <div className="flex w-full gap-x-5">
                    <div className="flex w-full py-5 pl-8 text-xl font-bold bg-gray-200 rounded-xl">
                        Gaya Gesek
                    </div>
                    <LinkNextPage
                        href={"/kalkulator/potensial"}
                        name={"Gaya Potensial"}
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
                        <Gesek
                            className={activeMenu === 1 ? "flex" : "hidden"}
                            setMassa={setMassa}
                            setKoefisien={setKoefisien}
                            setGravitasi={setGravitasi}
                            hitungGesek={hitungGesek}
                        />
                        <Dorong
                            className={activeMenu === 2 ? "flex" : "hidden"}
                            setMassa={setMassa}
                            setKoefisien={setKoefisien}
                            setDorong={setDorong}
                            setGravitasi={setGravitasi}
                            hitungDorong={hitungDorong}
                        />
                        <Miring
                            className={activeMenu === 3 ? "flex" : "hidden"}
                            setMassa={setMassa}
                            setKoefisien={setKoefisien}
                            sudut={sudut}
                            handleSudut={handleSudut}
                            setGravitasi={setGravitasi}
                            hitungMiring={hitungMiring}
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
