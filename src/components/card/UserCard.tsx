import Image from "next/image";
import styles from "./UserCard.module.css";

type UserCardProps = {
    type: string;
}

const UserCard = ({ type }: UserCardProps) => {
  return (
    <div className={styles['card-container']}>
        <div className={styles['card-header']}>
            <span className={styles['card-header__year']}>
                2024/25
            </span>
            <Image src="/more.png" alt="" width={20} height={20} />
        </div>
        <h3 className={styles['card-detail__amount']}>1,234</h3>
        <h4 className={styles['card-detail__type']}>{type}s</h4>
    </div>
  )
}

export default UserCard