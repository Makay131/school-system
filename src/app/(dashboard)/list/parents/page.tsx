import Pagination from "@/components/Pagination"
import TableSearch from "@/components/search/TableSearch"
import Table from "@/components/Table"
import { role, parentsData } from "@/lib/data";
import Image from "next/image"
import Link from "next/link";

const columns = [
    {
        header: "Info",
        accessor: "info"
    },
    {
        header: "Student Names",
        accessor: "students",
        className: "hidden md:table-cell"
    },
    {
        header: "Phone",
        accessor: "phone",
        className: "hidden lg:table-cell"
    },
    {
        header: "Address",
        accessor: "address",
        className: "hidden lg:table-cell"
    },
    {
        header: "Actions",
        accessor: "actions"
    },
];

type Parent = {
    id: string;
    name: string;
    email?: string;
    students: string[];
    phone: string;
    address: string;
}

const ParentsListPage = () => {
    const renderRow = (item: Parent) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-schoolify-purple-light">
            <td className="flex items-center gap-2 p-2">
                <div className="flex flex-col">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item?.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.students.join(",")}</td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td className="hidden md:table-cell">{item.address}</td>
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
            <h3 className="hidden md:block text-lg font-semibold">All Parents</h3>
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
        <Table columns={columns} renderRow={renderRow} data={parentsData} />
        <Pagination />
    </div>
  )
}

export default ParentsListPage