"use client"

import { Button, Input } from "@nextui-org/react"
import React from "react"

export default function Jumlah({
    className,
    setTitikA,
    setTitikB,
    hitungJumlahVektor,
}) {
    return (
        <div className={`flex-col w-full px-8 py-5 gap-y-8 ${className}`}>
            <p>Masukkan nilai yang dibutuhkan!!</p>
            <div className="flex flex-col max-w-lg gap-y-5">
                <Input
                    label="Ttitk A"
                    onChange={(e) => setTitikA(e.target.value)}
                    endContent={<p className="text-sm text-gray-400">N</p>}
                />
                <Input
                    label="Ttitk B"
                    onChange={(e) => setTitikB(e.target.value)}
                    endContent={<p className="text-sm text-gray-400">N</p>}
                />
            </div>
            <div className="flex justify-end">
                <Button
                    color="primary"
                    className="bg-black"
                    onClick={hitungJumlahVektor}
                >
                    <p className="font-bold">Cari</p>
                </Button>
            </div>
        </div>
    )
}
