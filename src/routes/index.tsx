import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../app/home';
import Task from '../pages/task/page';
import QrCode from '../app/qrcode/page'

export default function App() {
	return(
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />		
				<Route path="/task" element={<Task />} />		
				<Route path="/task/:id" element={<Task />} />		
				<Route path="/qrcode" element={<QrCode />} />		
			</Routes>
		</Router>
	)
}