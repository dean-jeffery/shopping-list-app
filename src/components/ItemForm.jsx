// import React from 'react';

function ItemForm() {
	return (
		<>
			<div className='addItem-wrapper'>
				<form action=''>
					<label htmlFor='item'>New item:</label>
					<input type='text' id='item' />
					<button>Add</button>
				</form>
			</div>
		</>
	);
}

export default ItemForm;
