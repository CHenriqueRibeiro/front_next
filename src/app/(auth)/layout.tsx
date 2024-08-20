import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <p>Login</p>
            <div>{children}</div>
        </>
    )
}