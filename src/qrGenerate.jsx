import QRCode from 'react-qr-code';
import { useState } from 'react';

function QRGenerate() {
	let value;
	const [formatedValue, setFormatedValue] = useState(); 

	function generate(){
		value = document.getElementById("rollNo").value;
		setFormatedValue(value.toLowerCase().replaceAll(/\s/g,''));
	}

	return (
		<div className="App">
			<center>
				<h2>Servicenow Student Day</h2>
				<label htmlFor="rollNo">Enter your Roll No</label>
				<br />
				<br />
				<input
				id="rollNo"
				type="text"
				placeholder="Value of Qr-code"
				/>
				<br/>
				<br/>
				<button onClick={generate}>Generate QR Code</button>
				<br />
				<br />
				{formatedValue && (
				<QRCode
					value={""+formatedValue}
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