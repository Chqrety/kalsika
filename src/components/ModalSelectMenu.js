"use client"

import React from "react"
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react"
import Link from "next/link"

export default function ModalSelectMenu() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    return (
        <>
            <Button
                onPress={onOpen}
                className="font-semibold bg-black"
                color="primary"
                size="lg"
            >
                Kalkulator
            </Button>
            <Modal
                backdrop="blur"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="2xl"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Pilih kalkulator
                            </ModalHeader>
                            <ModalBody>
                                <div className="grid grid-cols-4 gap-4">
                                    <Button
                                        href="/kalkulator/simpel-vektor"
                                        as={Link}
                                        className="text-[0.60rem] bg-gray-200 md:text-sm"
                                    >
                                        Simpel Vektor
                                    </Button>
                                    <Button
                                        href="/kalkulator/newton-1"
                                        as={Link}
                                        className="text-[0.60rem] bg-gray-200 md:text-sm"
                                    >
                                        Hukum Newton 1
                                    </Button>
                                    <Button
                                        href="/kalkulator/newton-2"
                                        as={Link}
                                        className="text-[0.60rem] bg-gray-200 md:text-sm"
                                    >
                                        Hukum Newton 2
                                    </Button>
                                    <Button
                                        href="/kalkulator/newton-3"
                                        as={Link}
                                        className="text-[0.60rem] bg-gray-200 md:text-sm"
                                    >
                                        Hukum Newton 3
                                    </Button>
                                    <Button
                                        href="/kalkulator/pegas"
                                        as={Link}
                                        className="text-[0.60rem] bg-gray-200 md:text-sm"
                                    >
                                        Gaya Pegas
                                    </Button>
                                    <Button
                                        href="/kalkulator/gesek"
                                        as={Link}
                                        className="text-[0.60rem] bg-gray-200 md:text-sm"
                                    >
                                        Gaya Gesek
                                    </Button>
                                    <Button
                                        href="/kalkulator/potensial"
                                        as={Link}
                                        className="text-[0.60rem] bg-gray-200 md:text-sm"
                                    >
                                        Gaya Potensial
                                    </Button>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Batal
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
