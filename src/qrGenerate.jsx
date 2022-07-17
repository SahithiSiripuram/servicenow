import QRCode from 'react-qr-code';
import { useState } from 'react';
import './app.css';
import logo from './servicenowlogo.png'

function QRGenerate() {
	let value;
	const [formatedValue, setFormatedValue] = useState(); 

	function generate(){
		value = document.getElementById("rollNo").value;
		setFormatedValue(value.toLowerCase().replaceAll(/\s/g,''));
		// setFormatedValue(value.toUpperCase().replaceAll(/\s/g,''));
	}

	return (
		<div className="App">
			<center>
				<img src={logo} alt="servicenow logo"/>
				<h1>Servicenow Student Day</h1>
				<label htmlFor="rollNo">Enter your full Roll No (Example:  18H51A0584)</label>
				<br />
				<br />
				<input
				id="rollNo"
				type="text"
				placeholder="Roll Number"
				/>
				<br/>
				<br/>
				<button onClick={generate}>Generate QR Code</button>
				<br />
				<br />
				{formatedValue && (
				<QRCode
					value={"https://servicenowstudentday.herokuapp.com/scan/"+formatedValue}
					bgColor={'#FFFFFF'}
					fgColor={'#000000'}
					size={256}
				/>
				)}
			</center>
		</div>
	);
}

export default QRGenerate;