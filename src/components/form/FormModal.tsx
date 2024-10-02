import Image from "next/image";

type FormModalProps = {
    table: "teacher" | "parent" | "student" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "attendance" | "event" | "announcement";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number;
}

const FormModal = ({table, type, data, id}: FormModalProps) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor = type === "create" ? "bg-schoolify-yellow" : type === "update" ? "bg-schoolify-sky" : "bg-schoolify-purple"
  return (
    <>
        <button className={`${size} ${bgColor} flex items-center justify-center rounded-full`}>
            <Image src={`/${type}.png`} alt="" width={16} height={16} />
        </button>
    </>
  )
}

export default FormModal