const pizzas = [
	{
		id: 'cheese',
		name: 'Cheese Pizza 🧀',
		description: 'Cheese! Cheese everywhere! So much cheese!',
		toppings: '🧀. What else were you expecting?',
		src: '/assets/Cheese-pizza-1.jpeg',
		price: {
			"Small": "$8.99",
            "Medium": "$10.99",
            "Large": "$12.99",
            "X-Large": "$14.99"
		},
	},
	{
		id: 'all',
		name: 'All Dressed Pizza 💃',
		description: 'The classic all dressed is here with literally 0 changes!',
		toppings: 'Cheese, peperoni, green peppers, and mushrooms.',
		src: '/assets/all-dressed.jpeg',
		price: {
      "Small": "$9.99",
      "Medium": "$11.99",
      "Large": "$13.99",
      "X-Large": "$15.99"
		},
	},
	{
		id: 'vegetarian',
		name: 'Vegetarian Pizza 🍅',
		description:
			'For a healthier alternative! (well... as healthy as pizza can get)',
		toppings: 'Cheese, green peppers, mushrooms, olives, and onions.',
		src: '/assets/veggie-pizza.jpeg',
		price: {
			"Small": "$9.99",
            "Medium": "$11.99",
            "Large": "$13.99",
            "X-Large": "$15.99"
		},
	},
	{
		id: 'hawaiian',
		name: 'Hawaiian Pizza 🍍',
		description: 'The infamous pizza with a tropical twist!',
		toppings: 'Cheese, ham, and pineapple.',
		src: '/assets/pizza_hawaiana.jpg',
		price: {
			Small: '$9.99',
			Medium: '$11.99',
			Large: '$13.99',
			X_Large: '$15.99',
		},
	},
	{
		id: 'meat',
		name: 'Meat Lovers 🍖',
		description: 'All the meats you can legally put on a pizza!',
		toppings:
			'Cheese, peperoni, Italian sausage, bacon crumble, and buffalo style chicken.',
		src: '/assets/meat-pizza.jpeg',
		price: {
      "Small": "$10.99",
      "Medium": "$12.99",
      "Large": "$14.99",
      "X-Large": "$16.99"
		},
	},
	{
		id: 'diet',
		name: 'The American Diet ☠',
		description: 'Minimum 1 lbs of toppings guaranteed, or your money back!',
		toppings:
			'Cheese, peperoni, green peppers, mushrooms, Italian sausage, and bacon crumble.',
		src: '/assets/diet-pizza.jpeg',
		price: {
			"Small": "$12.99",
            "Medium": "$14.99",
            "Large": "$16.99",
            "X-Large": "$18.99"
		},
	},
];

const orders = [];

module.exports = { pizzas, orders };
