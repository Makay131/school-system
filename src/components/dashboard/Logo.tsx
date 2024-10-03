import Image from "next/image";
import Link from "next/link";
import Styles from "./styles/Logo.module.css";

export const Logo = () => {
  return (
    <Link href="/" className={Styles["logo-container"]}>
        <Image src="/logo.png" alt="logo" width={32} height={32} />
        <h1 className={Styles["logo-title"]}>Schoolify</h1>
    </Link>
  )
}