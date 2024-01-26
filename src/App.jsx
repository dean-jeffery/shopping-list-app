import Header from './components/Header';
import ItemForm from './components/ItemForm';
import ShoppingList from './components/ShoppingList';
import './styles/App.css';

function App() {
	return (
		<>
			<Header />

			<div className='card'>
				<ItemForm />
				<ShoppingList />
			</div>
		</>
	);
}

export default App;
