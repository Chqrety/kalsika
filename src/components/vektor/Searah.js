"use client"

import { Button, Input } from "@nextui-org/react"
import React from "react"

export default function Searah({
    className,
    setVektorF,
    setPanjang,
    hitungVektorSearah,
}) {
    return (
        <div className={`flex-col w-full px-8 py-5 gap-y-8 ${className}`}>
            <p>Masukkan nilai yang dibutuhkan!!</p>
            <div className="flex flex-col max-w-lg gap-y-5">
                <Input
                    label="Vektor F"
                    onChange={(e) => setVektorF(e.target.value)}
                />
                <Input
                    label="Panjang"
                    type="number"
                    onChange={(e) => setPanjang(parseFloat(e.target.value))}
                />
            </div>
            <div className="flex justify-end">
                <Button
                    color="primary"
                    className="bg-black"
                    onClick={hitungVektorSearah}
                >
                    <p className="font-bold">Cari</p>
                </Button>
            </div>
        </div>
    )
}
