import CalendarCell from "../CalendarCell/CalendarCell";

const DaysOfWeekLabel = () => {
	const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

	return (
		<div className="flex text-center border-t border-r ">
			{daysOfWeek.map((day) => (
				<CalendarCell className="text-sm">{day}</CalendarCell>
			))}
		</div>
	)
}

export default DaysOfWeekLabel;