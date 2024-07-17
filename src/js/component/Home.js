import React, { useState } from "react";

const Home = () => {
	const [todos, setTodos] = useState([]);
	const count = todos.length

	const [hoverMouse, setHoverMouse] = useState(null);

	return (
		<>
			<div className="text-center container mt-5">
				<div className="mb-3">
					<h2 for="exampleInputEmail1" className="form-label" style={{marginBottom: '15px'}}>Daily Tasks</h2>
					<input className="form-control" id="inputTodos"
						placeholder="What needs to be done?"
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								setTodos([...todos, e.target.value]);
								e.target.value = '';
							}
						}} />

					<ul className="list-group shadow">
						{todos.map((item, index) => {
							return (
								<li className="list-group-item d-flex justify-content-between align-items-center" key={index}
									onMouseEnter={() => setHoverMouse(item)}
									onMouseLeave={() => setHoverMouse(null)}>
									{item}
									<i className="fa-solid fa-xmark" style={{ border: 'none', background: 'none', color: hoverMouse === item ? 'black' : 'white' }}
										onClick={() => setTodos(todos.filter((_, i) => i !== index))}
									/>
								</li >
							)
						})}
						<div className="list-group-item d-flex align-items-start">
							<p className="fw-light"> {count} task{count != 1 ? 's' : ''}</p>
						</div>
					</ul>
				</div>
				<div className="container position-absolute bottom-0">
				<footer className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
					<p>&copy; Made by Silvia Moraga with <i className="fa-regular fa-heart" style={{color: '#eaa9de'}} /> !  2024</p>
				</footer>
			</div>
			</div>
		</>
	);

};

export default Home;
