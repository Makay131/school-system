import BigCalendar from "@/components/calendar/BigCalendar"
import Announcements from "@/components/dashboard/Announcements"

const ParentPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h3 className="text-xl font-semibold">Schedule (4A)</h3>
          <BigCalendar />
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
            <Announcements />
        </div>
    </div>
  )
}

export default ParentPage