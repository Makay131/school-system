const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
        <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Announcements</h3>
            <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-schoolify-sky-light rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Lorem ipsum dolor sit amet consectetur</h4>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, fugiat.</p>
            </div>
        </div>
    </div>
  )
}

export default Announcements