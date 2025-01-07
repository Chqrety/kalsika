"use client"

import react from "react"
import { Button, Input, Select, SelectItem } from "@nextui-org/react"

export default function Pegas({
    setKonstanta,
    setKompresi,
    hitungPegas,
    className,
}) {
    return (
        <div className={`flex-col w-full px-8 py-5 gap-y-8 ${className}`}>
            <p>Masukkan nilai yang dibutuhkan!!</p>
            <div className="flex flex-col max-w-lg gap-y-5">
                <Input
                    label="Konstanta"
                    type="number"
                    onChange={(e) => setKonstanta(parseFloat(e.target.value))}
                    endContent={<p className="text-sm text-gray-400">N/m</p>}
                />
                <Input
                    label="Kompresi"
                    type="number"
                    onChange={(e) => setKompresi(parseFloat(e.target.value))}
                    endContent={<p className="text-sm text-gray-400">m</p>}
                />
            </div>
            <div className="flex justify-end">
                <Button
                    color="primary"
                    className="bg-black"
                    onClick={hitungPegas}
                >
                    <p className="font-bold">Cari</p>
                </Button>
            </div>
        </div>
    )
}
