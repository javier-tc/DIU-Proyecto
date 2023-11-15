import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home';
import CalendarPage from '../pages/calendar_page';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/calendar' element={<CalendarPage />} />
			</Routes>
		</BrowserRouter>
	)
}
export default AppRouter;