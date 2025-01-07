"use client"

import { Button, Input } from "@nextui-org/react"
import react from "react"

export default function GayaSudut({
    handleInputChange,
    sudut,
    hitungGayaSudut,
    setGaya,
    className,
}) {
    return (
        <div className={`flex-col w-full px-8 py-5 gap-y-8 ${className}`}>
            <p>Masukkan nilai yang dibutuhkan!!</p>
            <div className="flex flex-col max-w-lg gap-y-5">
                <Input
                    label="F (Gaya)"
                    type="number"
                    onChange={(e) => setGaya(parseFloat(e.target.value))}
                    endContent={<p className="text-sm text-gray-400">N</p>}
                />
                <Input
                    value={sudut}
                    onChange={handleInputChange}
                    label="&#952; (Sudut)"
                    type="number"
                    endContent={<p className="text-sm text-gray-400">&deg;</p>}
                />
            </div>
            <div className="flex justify-end">
                <Button
                    color="primary"
                    className="bg-black"
                    onClick={hitungGayaSudut}
                >
                    <p className="font-bold">Cari</p>
                </Button>
            </div>
        </div>
    )
}
