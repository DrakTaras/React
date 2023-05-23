import { useState } from 'react'

const colors = ['red', 'yellow', 'black', 'green', 'grey', 'brown']

const Color = () => {
	const [color, setcolor] = useState("red");

	return(
		<div>
			<h2>Task6</h2>
			<h1>
				I'm <span style={{color: color}}>Product</span>
			</h1>
			<select onChange={(e) => setcolor(e.target.value)}>
				{colors.map((productColor) => (
				<option value={productColor} key = {productColor}>
					{productColor}
				</option>
				))}
			</select>

		</div>
	);

}

export default Color;