import React from "react"
import Navbar from "@/components/Navbar"
import { Button } from "@nextui-org/react"
import ModalSelectMenu from "@/components/ModalSelectMenu"

export default function Page() {
    return (
        <main className="flex flex-col">
            <div>
                <Navbar />
            </div>
            <div className="flex flex-col min-h-[91dvh] justify-between">
                <div className="flex flex-col items-center justify-center mt-48 gap-y-4 md:gap-y-7 lg:gap-y-10">
                    <p className="text-2xl font-bold md:text-3xl lg:text-6xl">Welcome, Everyone🥳</p>
                    <p className="text-sm md:text-base lg:text-xl">
                        Kalkulator fisika sederhana yang dapat memudahkan dalam kalkulasi simpel dengan cepat
                    </p>
                    <div className="flex gap-x-8">
                        <ModalSelectMenu />
                        <Button
                            className="font-semibold bg-white border border-black hover:bg-gray-200"
                            color="success"
                            size="lg"
                        >
                            Support
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center pt-4 border-t border-gray-200">
                    <p className="font-semibold uppercase">Kelompok Pertamax</p>
                    <div className="flex gap-3 text-xs italic text-gray-500 md:text-sm">
                        <p>Rafael - 15769</p>
                        <p>Husnul - 15776</p>
                        <p>Brillian - 15794</p>
                        <p>Ahmad - 15773</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
