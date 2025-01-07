"use client"

import react from "react"
import { Button, Input, Select, SelectItem } from "@nextui-org/react"

export default function Listrik({
    setQ1,
    setQ2,
    setJarak,
    hitungListrik,
    className,
}) {
    return (
        <div className={`flex-col w-full px-8 py-5 gap-y-8 ${className}`}>
            <p>Masukkan nilai yang dibutuhkan!!</p>
            <div className="flex flex-col max-w-lg gap-y-5">
                <Input
                    label="Muatan 1"
                    type="number"
                    onChange={(e) => setQ1(parseFloat(e.target.value))}
                    endContent={<p className="text-sm text-gray-400">μC</p>}
                />
                <Input
                    label="Muatan 2"
                    type="number"
                    onChange={(e) => setQ2(parseFloat(e.target.value))}
                    endContent={<p className="text-sm text-gray-400">μC</p>}
                />
                <Input
                    label="Jarak"
                    type="number"
                    onChange={(e) => setJarak(parseFloat(e.target.value))}
                    endContent={<p className="text-sm text-gray-400">m</p>}
                />
            </div>
            <div className="flex justify-end">
                <Button
                    color="primary"
                    className="bg-black"
                    onClick={hitungListrik}
                >
                    <p className="font-bold">Cari</p>
                </Button>
            </div>
        </div>
    )
}
