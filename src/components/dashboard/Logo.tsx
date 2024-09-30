import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
        <Image src="/logo.png" alt="logo" width={32} height={32} />
        <h1 className="hidden lg:block font-bold">Schoolify</h1>
    </Link>
  )
}