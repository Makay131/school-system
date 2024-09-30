import EventCalendar from "@/components/calendar/EventCalendar"
import UserCard from "@/components/card/UserCard"
import BarChart from "@/components/chart/BarsChart"
import LineChart from "@/components/chart/LinesChart"
import RadialChart from "@/components/chart/RadialChart"
import Announcements from "@/components/dashboard/Announcements"

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <div className="flex gap-4 justify-between flex-wrap">
                <UserCard type="student" />
                <UserCard type="teacher" />
                <UserCard type="parent" />
                <UserCard type="staff" />
            </div>
            <div className="flex gap-4 flex-col lg:flex-row">
                <div className="w-full lg:w-1/3 h-[450px]">
                    <RadialChart />
                </div>
                <div className="w-full lg:w-2/3 h-[450px]">
                    <BarChart />
                </div>
            </div>
            <div className="w-full h-[500px]">
                <LineChart />
            </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <EventCalendar />
            <Announcements />
        </div>
    </div>
  )
}

export default AdminPage