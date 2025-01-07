"use client"

import React, { useState } from "react"
import { Select, SelectItem } from "@nextui-org/react"
import LinkNextPage from "@/components/LinkNextPage"
import Navbar from "@/components/Navbar"
import GayaMassa from "@/components/newton-1/GayaMassa"
import Eksternal from "@/components/newton-1/Eksternal"
import Konstan from "@/components/newton-1/Konstan"
import Kecepatan from "@/components/newton-1/Kecepatan"
import Percepatan from "@/components/newton-1/Percepatan"

export const answers = [
    { key: 1, label: "Gaya berdasarkan Massa" },
    { key: 2, label: "Percepatan dengan Gaya Eksternal dan Gesekan" },
    { key: 3, label: "Penghitungan Gaya untuk Kecepatan Konstan" },
    { key: 4, label: "Perubahan Kecepatan dengan Gaya Eksternal" },
    { key: 5, label: "Gaya yang Diperlukan untuk Percepatan" },
]

export default function Page() {
    const [activeMenu, setActiveMenu] = useState(null)
    const [massa, setMassa] = useState(null)
    const [gesek, setGesek] = useState(null)
    const [eksternal, setEksternal] = useState(null)
    const [kecepatan, setKecepatan] = useState(null)
    const [gravitasi, setGravitasi] = useState(null)
    const [percepatan, setPercepatan] = useState(null)
    const [waktu, setWaktu] = useState(null)
    const [hasil, setHasil] = useState(null)

    const hitungGayaMassa = () => {
        if (massa && gravitasi && activeMenu === 1) {
            const hasil = massa * gravitasi
            setHasil(`${hasil.toFixed(2)} N`)
        }
    }

    const hitungGesekEksternal = () => {
        if (massa && gesek && eksternal && activeMenu === 2) {
            const gayaTotal = eksternal - gesek
            const percepatan = gayaTotal / massa
            setHasil(`${percepatan.toFixed(2)} m/s²`)
        }
    }

    const hitungKonstan = () => {
        if (massa && kecepatan && gesek && activeMenu === 3) {
            setHasil(`${gesek.toFixed(2)} N`)
        }
    }

    const hitungKecepatan = () => {
        if (massa && eksternal && waktu && activeMenu === 4) {
            const percepatan = eksternal / massa
            const perubahan = percepatan * waktu
            setHasil(`${perubahan.toFixed(2)} m/s`)
        }
    }

    const hitungPercepatan = () => {
        if (massa && gesek && percepatan && activeMenu === 5) {
            const gayaTotal = massa * percepatan
            const gayaTambahan = gayaTotal + gesek
            setHasil(`${gayaTambahan.toFixed(2)} N`)
        }
    }

    return (
        <main className="flex flex-col items-center">
            <Navbar />
            <div className="flex flex-col items-center w-full justify-center min-h-[85dvh] p-10 gap-y-5 max-w-5xl">
                <div className="flex w-full gap-x-5">
                    <div className="flex w-full py-5 pl-8 text-xl font-bold bg-gray-200 rounded-xl">
                        Hukum Newton 1
                    </div>
                    <LinkNextPage
                        href={"/kalkulator/newton-2"}
                        name={"Hukum Newton 2"}
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
                        <GayaMassa
                            className={activeMenu === 1 ? "flex" : "hidden"}
                            setMassa={setMassa}
                            setGravitasi={setGravitasi}
                            hitungGayaMassa={hitungGayaMassa}
                        />
                        <Eksternal
                            className={activeMenu === 2 ? "flex" : "hidden"}
                            setMassa={setMassa}
                            setGesek={setGesek}
                            setEksternal={setEksternal}
                            hitungGesekEksternal={hitungGesekEksternal}
                        />
                        <Konstan
                            className={activeMenu === 3 ? "flex" : "hidden"}
                            setMassa={setMassa}
                            setKecepatan={setKecepatan}
                            setGesek={setGesek}
                            hitungKonstan={hitungKonstan}
                        />
                        <Kecepatan
                            className={activeMenu === 4 ? "flex" : "hidden"}
                            setMassa={setMassa}
                            setEksternal={setEksternal}
                            setWaktu={setWaktu}
                            hitungKecepatan={hitungKecepatan}
                        />
                        <Percepatan
                            className={activeMenu === 5 ? "flex" : "hidden"}
                            setMassa={setMassa}
                            setGesek={setGesek}
                            setPercepatan={setPercepatan}
                            hitungPercepatan={hitungPercepatan}
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
