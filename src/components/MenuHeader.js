import Link from "next/link"
import React from "react"

export default function menuHeader({
    href,
    children,
    className = "flex items-center justify-center w-16 h-full transition-all duration-75 cursor-pointer md:w-28 lg:w-36 hover:text-gray-400 hover:text-lg",
}) {
    return (
        <Link href={`${href}`}>
            <p className={`${className}`}>{children}</p>
        </Link>
    )
}
