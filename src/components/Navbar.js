import React from "react"
import MenuHeader from "./MenuHeader"
import Link from "next/link"
import ModalMenuNavbar from "@/components/ModalMenuNavbar"

export default function navbar() {
    return (
        <header className="flex justify-between w-full px-3 bg-white shadow-md min-h-16">
            <div className="flex items-center min-h-full cursor-pointer">
                <p className="font-bold">KALSIKA</p>
            </div>
            <div className="flex items-center justify-around w-full max-w-xl font-semibold">
                <MenuHeader href="/home">Home</MenuHeader>
                <ModalMenuNavbar />
                <MenuHeader href="/support">Supports</MenuHeader>
            </div>
            <div className="flex items-center min-h-full cursor-pointer">
                <Link href="https://quika.vercel.app" target="_blank" rel="noopener noreferrer">
                    <p className="font-bold">QUIKA</p>
                </Link>
            </div>
        </header>
    )
}
