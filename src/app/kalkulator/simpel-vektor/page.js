"use client"

import React, { useState } from "react"
import { Select, SelectItem } from "@nextui-org/react"
import Navbar from "@/components/Navbar"
import LinkNextPage from "@/components/LinkNextPage"
import GayaSudut from "@/components/vektor/GayaSudut"
import Jumlah from "@/components/vektor/Jumlah"
import Magnitudo from "@/components/vektor/Magnitudo"
import Skalar from "@/components/vektor/Skalar"
import Searah from "@/components/vektor/Searah"

export const answers = [
    { key: 1, label: "Analisis Gaya dan Sudut" },
    { key: 2, label: "Operasi Penjumlahan Vektor" },
    { key: 3, label: "Magnitudo Vektor" },
    { key: 4, label: "Perkalian Skalar" },
    { key: 5, label: "Vektor Searah" },
]

export default function Page() {
    const [gaya, setGaya] = useState(null)
    const [sudut, setSudut] = useState(null)
    const [titikA, setTitikA] = useState(null)
    const [titikB, setTitikB] = useState(null)
    const [vektor, setVektor] = useState(null)
    const [titikSkalarA, setTitikSkalarA] = useState(null)
    const [titikSkalarB, setTitikSkalarB] = useState(null)
    const [vektorF, setVektorF] = useState(null)
    const [panjang, setPanjang] = useState(null)
    const [hasil, setHasil] = useState(null)
    const [activeMenu, setActiveMenu] = useState(null)

    const handleInputChange = (e) => {
        let value = parseFloat(e.target.value)

        // Batasi nilai antara 0 dan 360
        if (value > 360) value = 360
        if (value < 0) value = 0

        setSudut(value)
    }

    const hitungGayaSudut = () => {
        if (gaya !== null && sudut !== null) {
            const radian = (Math.PI / 180) * sudut
            const x = gaya * Math.cos(radian)
            const y = gaya * Math.sin(radian)
            setHasil(`
                x: ${x.toFixed(2)} N,
                y: ${y.toFixed(2)} N,
            `)
        }
    }

    const parsevektor = (input) => {
        if (typeof input !== "string") {
            throw new Error("Input harus berupa string.")
        }

        const [x, y] = input.split(",").map(Number)
        if (isNaN(x) || isNaN(y)) {
            throw new Error("Input harus dalam format x,y dengan nilai angka.")
        }
        return { x, y }
    }

    const hitungJumlahVektor = () => {
        if (titikA !== null && titikB !== null) {
            const vektorA = parsevektor(titikA)
            const vektorB = parsevektor(titikB)
            const jumlahx = vektorA.x + vektorB.x
            const jumlahy = vektorA.y + vektorB.y

            setHasil(`(${jumlahx},${jumlahy})`)
        }
    }

    const hitungMagnitudo = () => {
        if (vektor !== null) {
            const vektorSplit = parsevektor(vektor)
            const magnitudo = Math.sqrt(
                Math.pow(vektorSplit.x, 2) + Math.pow(vektorSplit.y, 2),
            )
            setHasil(magnitudo.toFixed(2))
        }
    }

    const hitungPerkalianSkalar = () => {
        if (titikSkalarA !== null && titikSkalarB !== null) {
            const vektorA = parsevektor(titikSkalarA)
            const vektorB = parsevektor(titikSkalarB)
            const hasilPerkalian = vektorA.x * vektorB.x + vektorA.y * vektorB.y
            setHasil(hasilPerkalian.toFixed(2))
        }
    }

    const hitungVektorSearah = () => {
        if (vektorF !== null && panjang !== null) {
            const vektorSplit = parsevektor(vektorF)
            const magnitudoF = Math.sqrt(
                Math.pow(vektorSplit.x, 2) + Math.pow(vektorSplit.y, 2),
            )
            const unitVektorF = {
                x: vektorSplit.x / magnitudoF,
                y: vektorSplit.y / magnitudoF,
            }
            const vektorG = {
                x: unitVektorF.x * panjang,
                y: unitVektorF.y * panjang,
            }

            setHasil(`(${vektorG.x.toFixed(2)}, ${vektorG.y.toFixed(2)})`)
        }
    }
    return (
        <main className="flex flex-col items-center">
            <Navbar />
            <div className="flex flex-col items-center w-full justify-center min-h-[85dvh] p-10 gap-y-5 max-w-5xl">
                <div className="flex w-full gap-x-5">
                    <div className="flex w-full py-5 pl-8 text-xl font-bold bg-gray-200 rounded-xl">
                        Simpel Vektor
                    </div>
                    <LinkNextPage
                        href={"/kalkulator/newton-1"}
                        name={"Hukum Newton 1"}
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
                        <GayaSudut
                            className={activeMenu === 1 ? "flex" : "hidden"}
                            handleInputChange={handleInputChange}
                            sudut={sudut}
                            hitungGayaSudut={hitungGayaSudut}
                            setGaya={setGaya}
                        />
                        <Jumlah
                            className={activeMenu === 2 ? "flex" : "hidden"}
                            setTitikA={setTitikA}
                            setTitikB={setTitikB}
                            hitungJumlahVektor={hitungJumlahVektor}
                        />
                        <Magnitudo
                            className={activeMenu === 3 ? "flex" : "hidden"}
                            setVektor={setVektor}
                            hitungMagnitudo={hitungMagnitudo}
                        />
                        <Skalar
                            className={activeMenu === 4 ? "flex" : "hidden"}
                            setTitikSkalarA={setTitikSkalarA}
                            setTitikSkalarB={setTitikSkalarB}
                            hitungPerkalianSkalar={hitungPerkalianSkalar}
                        />
                        <Searah
                            className={activeMenu === 5 ? "flex" : "hidden"}
                            setVektorF={setVektorF}
                            setPanjang={setPanjang}
                            hitungVektorSearah={hitungVektorSearah}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-16 bg-gray-200 lg:h-auto lg:w-1/3 rounded-xl">
                        {hasil ? (
                            <>
                                <p className="text-base font-bold md:text-2xl lg:text-5xl">
                                    {hasil ? `${hasil}` : ""}
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
