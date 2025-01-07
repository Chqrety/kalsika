"use client"

import react from "react"
import { Button, Input } from "@nextui-org/react"

export default function Panjang({
    setKonstanta,
    setGaya,
    hitungPanjang,
    className,
}) {
    return (
        <div className={`flex-col w-full px-8 py-5 gap-y-8 ${className}`}>
            <p>Masukkan nilai yang dibutuhkan!!</p>
            <div className="flex flex-col max-w-lg gap-y-5">
                <Input
                    label="k (Konstanta Pegas)"
                    type="number"
                    onChange={(e) => setKonstanta(parseFloat(e.target.value))}
                    endContent={<p className="text-sm text-gray-400">N/m</p>}
                />
                <Input
                    label="Gaya"
                    type="number"
                    onChange={(e) => setGaya(parseFloat(e.target.value))}
                    endContent={<p className="text-sm text-gray-400">N</p>}
                />
            </div>
            <div className="flex justify-end">
                <Button
                    color="primary"
                    className="bg-black"
                    onClick={hitungPanjang}
                >
                    <p className="font-bold">Cari</p>
                </Button>
            </div>
        </div>
    )
}
