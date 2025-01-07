"use client"

import react from "react"
import { Button, Input } from "@nextui-org/react"

export default function Resultan({
    setUsaha,
    setMassa1,
    setMassa2,
    hitungResultan,
    className,
}) {
    return (
        <div className={`flex-col w-full px-8 py-5 gap-y-8 ${className}`}>
            <p>Masukkan nilai yang dibutuhkan!!</p>
            <div className="flex flex-col max-w-lg gap-y-5">
                <Input
                    label="W (Usaha)"
                    type="number"
                    onChange={(e) => setUsaha(parseFloat(e.target.value))}
                    endContent={<p className="text-sm text-gray-400">N</p>}
                />
                <Input
                    label="m₁ (Massa₁)"
                    type="number"
                    onChange={(e) => setMassa1(parseFloat(e.target.value))}
                    endContent={<p className="text-sm text-gray-400">kg</p>}
                />
                <Input
                    label="m₂ (Massa₂)"
                    type="number"
                    onChange={(e) => setMassa2(parseFloat(e.target.value))}
                    endContent={<p className="text-sm text-gray-400">kg</p>}
                />
            </div>
            <div className="flex justify-end">
                <Button
                    color="primary"
                    className="bg-black"
                    onClick={hitungResultan}
                >
                    <p className="font-bold">Cari</p>
                </Button>
            </div>
        </div>
    )
}
