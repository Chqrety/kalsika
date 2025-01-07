"use client"

import react from "react"
import { Button, Input, Select, SelectItem } from "@nextui-org/react"

const gravitations = [
    { key: 9.8, label: "9,8 m/s²" },
    { key: 10, label: "10 m/s²" },
]

export default function GayaMassa({
    setGravitasi,
    setMassa,
    hitungGayaMassa,
    className,
}) {
    return (
        <div className={`flex-col w-full px-8 py-5 gap-y-8 ${className}`}>
            <p>Masukkan nilai yang dibutuhkan!!</p>
            <div className="flex flex-col max-w-full gap-y-5">
                <Input
                    label="m (Massa)"
                    type="number"
                    onChange={(e) => setMassa(parseFloat(e.target.value))}
                    endContent={<p className="text-sm text-gray-400">kg</p>}
                />
                <Select
                    label="Mo gravitasi brapa?"
                    onChange={(e) => setGravitasi(e.target.value)}
                >
                    {gravitations.map((gravitation) => (
                        <SelectItem key={gravitation.key}>
                            {gravitation.label}
                        </SelectItem>
                    ))}
                </Select>
            </div>
            <div className="flex justify-end">
                <Button
                    color="primary"
                    className="bg-black"
                    onClick={hitungGayaMassa}
                >
                    <p className="font-bold">Cari</p>
                </Button>
            </div>
        </div>
    )
}
