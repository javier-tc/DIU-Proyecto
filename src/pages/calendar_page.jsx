import React, { useState, useEffect } from 'react';
import { format, addWeeks, startOfWeek, endOfWeek, addDays } from 'date-fns';
import NavBar from '../components/nav_bar';
import App from '../components/app_calendar';

const CalendarPage = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [weekOptions, setWeekOptions] = useState([]);

	useEffect(() => {
		// Generar el arreglo de opciones de semanas al montar el componente
		const options = [null, ...[0, 1, 2, 3].map((index) => {
			const startDate = startOfWeek(addWeeks(new Date(), index), { weekStartsOn: 2 });
			return format(startDate, "yyyy-MM-dd");
		})];
		setWeekOptions(options);
	}, []);

	const handleWeekChange = (event) => {
		const newSelectedDate = new Date(event.target.value);
		setSelectedDate(newSelectedDate);
	};

	const getWeekInfo = (startDate) => {
		if (!startDate) {
			return "Seleccione una semana";
		}

		const endDate = endOfWeek(addDays(startDate, 6), { weekStartsOn: 1 });
		return `${format(startDate, 'MMMM')} - Desde ${format(startDate, 'd')} ${format(startDate, 'MMM')} hasta ${format(endDate, 'd')} ${format(endDate, 'MMM')}`;
	};


	return (
		<div id='fill-container' className='layout_shift_spacer tomato_background tomato_background_left'>
			<div className="home-container">
				<NavBar />
				<h1 className="calendar-title">Tu Calendario</h1>
				<div className='calendar-body'>
					<select value={format(selectedDate, "yyyy-MM-dd")} onChange={handleWeekChange} className='select-week'>
						{weekOptions.map((option, index) => {
							return (
								<option className='select-week' key={index} value={option} hidden={index === 0}>
									{index === 0 ? "Seleccione una semana" : `Semana desde ${format(startOfWeek(new Date(option), { weekStartsOn: 1 }), 'd MMM')} hasta ${format(endOfWeek(new Date(option), { weekStartsOn: 1 }), 'd MMM')}`}
								</option>
							);
						})}
					</select>
					<div className='week-body'>
						<h3 className="mt-3 text-black">{getWeekInfo(startOfWeek(selectedDate, { weekStartsOn: 1 }))}</h3>
						<App />
					</div>
				</div>
			</div>
			<footer className="main-footer">
				<p>&copy; 2023 Meal Planner</p>
			</footer>
		</div>
	);
};

export default CalendarPage;
