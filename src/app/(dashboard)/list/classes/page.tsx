import FormModal from "@/components/form/FormModal";
import Pagination from "@/components/Pagination"
import TableSearch from "@/components/search/TableSearch"
import Table from "@/components/Table"
import { role, classesData} from "@/lib/data";
import Image from "next/image"
import Link from "next/link";

const columns = [
    {
        header: "Class Name",
        accessor: "name"
    },
    {
        header: "Capacity",
        accessor: "capacity",
        className: "hidden md:table-cell"
    },
    {
        header: "Grade",
        accessor: "grade",
        className: "hidden md:table-cell"
    },
    {
        header: "Supervisor",
        accessor: "supervisor",
        className: "hidden md:table-cell"
    },
    {
        header: "Actions",
        accessor: "actions"
    },
];

type Class = {
    id: string;
    name: string;
    capacity: number;
    grade: number;
    supervisor: string;
}

const ClassesListPage = () => {
    const renderRow = (item: Class) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-schoolify-purple-light">
            <td className="flex items-center gap-2 p-2">
                {item.name}
            </td>
            <td className="hidden md:table-cell">{item.capacity}</td>
            <td className="hidden md:table-cell">{item.grade}</td>
            <td className="hidden md:table-cell">{item.supervisor}</td>
            <td>
                <div className="flex items-center gap-2">
                {role === "admin" && 
                    <>
                        <FormModal table="class" type="update" data={item} />
                        <FormModal table="class" type="delete" id={+item.id} />
                    </>
                }
                </div>
            </td>
        </tr>
    );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
        <div className="flex items-center justify-between">
            <h3 className="hidden md:block text-lg font-semibold">All Classes</h3>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <TableSearch />
                <div className="flex items-center gap-4 self-end">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-schoolify-yellow">
                        <Image src="/filter.png" alt="" width={14} height={14} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-schoolify-yellow">
                        <Image src="/sort.png" alt="" width={14} height={14} />
                    </button>
                    {role === "admin" && <FormModal table="class" type="create" />}
                </div>
            </div>
        </div>
        <Table columns={columns} renderRow={renderRow} data={classesData} />
        <Pagination />
    </div>
  )
}

export default ClassesListPage