import Link from "next/link"
import React from "react"

export default function LinkNextPage({ href, name, className = "text-xs lg:text-base" }) {
    return (
        <div className="flex items-center justify-center w-56 px-5 italic bg-gray-200 rounded-xl">
            <Link href={href} className={className}>
                {name} &gt;
            </Link>
        </div>
    )
}
