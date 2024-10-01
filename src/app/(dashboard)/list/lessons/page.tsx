import Pagination from "@/components/Pagination"
import TableSearch from "@/components/search/TableSearch"
import Table from "@/components/Table"
import { role, lessonsData} from "@/lib/data";
import Image from "next/image"
import Link from "next/link";

const columns = [
    {
        header: "Subject Name",
        accessor: "name"
    },
    {
        header: "Class",
        accessor: "class",
    },
    {
        header: "Teacher",
        accessor: "teacher",
        className: "hidden md:table-cell"
    },
    {
        header: "Actions",
        accessor: "actions"
    },
];

type Lesson = {
    id: string;
    subject: string;
    class: string;
    teacher: string;
}

const ClassesListPage = () => {
    const renderRow = (item: Lesson) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-schoolify-purple-light">
            <td className="flex items-center gap-2 p-2">
                {item.subject}
            </td>
            <td>{item.class}</td>
            <td className="hidden md:table-cell">{item.teacher}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-schoolify-sky">
                            <Image src="/edit.png" alt="" width={16} height={16} />
                        </button>
                    </Link>
                    {role === "admin" && <button className="w-7 h-7 flex items-center justify-center rounded-full bg-schoolify-purple">
                            <Image src="/delete.png" alt="" width={16} height={16} />
                    </button>}
                </div>
            </td>
        </tr>
    );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
        <div className="flex items-center justify-between">
            <h3 className="hidden md:block text-lg font-semibold">All Lessons</h3>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <TableSearch />
                <div className="flex items-center gap-4 self-end">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-schoolify-yellow">
                        <Image src="/filter.png" alt="" width={14} height={14} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-schoolify-yellow">
                        <Image src="/sort.png" alt="" width={14} height={14} />
                    </button>
                    {role === "admin" && <button className="w-8 h-8 flex items-center justify-center rounded-full bg-schoolify-yellow">
                        <Image src="/plus.png" alt="" width={14} height={14} />
                    </button>}
                </div>
            </div>
        </div>
        <Table columns={columns} renderRow={renderRow} data={lessonsData} />
        <Pagination />
    </div>
  )
}

export default ClassesListPage