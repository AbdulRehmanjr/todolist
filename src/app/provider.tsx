'use client'
import { PrimeReactProvider } from "primereact/api";

export function Provider({ children }: { children: React.ReactNode }) {
    return (
            <PrimeReactProvider>
                    {children}
            </PrimeReactProvider>
    )
}