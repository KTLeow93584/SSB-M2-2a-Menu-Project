const categories = [
    {
        categoryName: "Main Course",
        catalogues: [
            {
                name: "Laksa",
                src: "assets/main-course/laksa.webp",
                description: "Savor the bold flavors of the spicy and tangy Malaysian noodle soup that tantalizes your taste buds with a symphony of aromatic herbs and fresh seafood.",
                nutritionalInfo: {
                    calorie: 613,
                    carb: 64,
                    protein: 23,
                    fat: 31
                },
                cost: 6,
                inStock: false
            },
            {
                name: "Prawn Noodle 🌶️🌶️🌶️",
                src: "assets/main-course/prawn-noodle.webp",
                description: "Dive into a bowl of Prawn Noodle, where succulent prawns meet flavorful broth and springy noodles for a seafood lover's delight.",
                nutritionalInfo: {
                    calorie: 210,
                    carb: 23,
                    protein: 18,
                    fat: 5.1
                },
                cost: 5,
                inStock: true
            },
            {
                name: "Mac N' Cheese",
                src: "assets/main-course/mac-n-cheese.webp",
                description: "Indulge in the creamy comfort of Mac and Cheese, a classic dish that combines perfectly cooked pasta with a rich and gooey cheese sauce.",
                nutritionalInfo: {
                    calorie: 376,
                    carb: 47,
                    protein: 9.7,
                    fat: 16
                },
                cost: 10.5,
                inStock: true
            }
        ]
    },
    {
        categoryName: "Appetizer",
        catalogues: [
            {
                name: "Caesar Salad",
                src: "assets/appetizers/caesar-salad.webp",
                description: "Elevate your dining experience with a Caesar Salad, a crisp and refreshing ensemble of fresh romaine lettuce, parmesan cheese, croutons, and zesty Caesar dressing.",
                nutritionalInfo: {
                    calorie: 481,
                    carb: 23,
                    protein: 10,
                    fat: 40
                },
                cost: 6,
                inStock: true
            },
            {
                name: "Fruit Salad",
                src: "assets/appetizers/fruit-salad.webp",
                description: "Experience the bliss of freshness with our Fruit Salad, a vibrant medley of seasonal fruits that promises a burst of natural sweetness in every bite.",
                nutritionalInfo: {
                    calorie: 97,
                    carb: 24,
                    protein: 1.4,
                    fat: 0.5
                },
                cost: 5,
                inStock: true
            },
            {
                name: "Vegetarian Salad",
                src: "assets/appetizers/vegetarian-salad.webp",
                description: "Nourish your body with the goodness of a Vegetarian Salad, a colorful and nutrient-packed mix of fresh vegetables, greens, and delectable dressings.",
                nutritionalInfo: {
                    calorie: 114,
                    carb: 11,
                    protein: 3.7,
                    fat: 6.8
                },
                cost: 4.5,
                inStock: true
            }
        ]
    },
    {
        categoryName: "Dessert",
        catalogues: [
            {
                name: "Durian Ais Kacang",
                src: "assets/desserts/durian-ice-kacang.webp",
                description: "Beat the heat with the exotic delight of Malaysian Durian Shaved Ice, a chilly treat featuring shaved ice crowned with the king of fruits - durian.",
                nutritionalInfo: {
                    calorie: 83,
                    carb: 19,
                    protein: 1,
                    fat: 0.7
                },
                cost: 6,
                inStock: false
            },
            {
                name: "Nyonya Chendul",
                src: "assets/desserts/chendul.webp",
                description: "Quench your dessert cravings with Nyonya Cendol, a traditional Malaysian delight that combines pandan-flavored jelly, coconut milk, and gula Melaka for a sweet and refreshing experience.",
                nutritionalInfo: {
                    calorie: 355,
                    carb: 49,
                    protein: 3.1,
                    fat: 18
                },
                cost: 2.5,
                inStock: true
            },
            {
                name: "Signature Ice Cream Biscuit (3pc)",
                src: "assets/desserts/ice-cream-biscoff-sandwich.webp",
                description: "Unleash your sweet tooth on the Signature Ice Cream Biscuit, a delightful combination of premium ice cream sandwiched between two perfectly baked biscuits.",
                nutritionalInfo: {
                    calorie: 212,
                    carb: 28,
                    protein: 4,
                    fat: 9.5
                },
                cost: 3.5,
                inStock: true
            },
            {
                name: "Sundae Crepe (2pc)",
                src: "assets/desserts/sundae-crepe.webp",
                description: "Tantalize your taste buds with the Sundae Crepe, a luscious dessert that wraps velvety ice cream and delightful toppings in a delicate crepe.",
                nutritionalInfo: {
                    calorie: 880,
                    carb: 118.3,
                    protein: 12,
                    fat: 31.3
                },
                cost: 3.5,
                inStock: true
            }
        ],
    },
    {
        categoryName: "Beverage",
        catalogues: [
            {
                name: "Barley (Homemade)",
                src: "assets/drinks/barley-water.webp",
                description: "Sip on the comforting warmth of Homemade Barley, a wholesome beverage crafted with care to bring you the nourishing goodness of barley.",
                nutritionalInfo: {
                    calorie: 97,
                    carb: 22,
                    protein: 2,
                    fat: 0
                },
                cost: 2.5
            },
            {
                name: "Chrysanthemum Tea",
                src: "assets/drinks/chrysanthenum-tea.webp",
                description: "Soothe your senses with the delicate flavors of Homemade Chrysanthemum Tea, a fragrant and calming brew that offers a moment of tranquility.",
                nutritionalInfo: {
                    calorie: 70,
                    carb: 18,
                    protein: 0,
                    fat: 0
                },
                cost: 3
            },
            {
                name: "Pearl Milk Boba Tea",
                src: "assets/drinks/bubble-tea-boba.webp",
                description: "Indulge in the addictive pleasure of Pearl Milk Boba Tea, a Taiwanese sensation featuring chewy pearls in a creamy and sweet milk tea concoction.",
                nutritionalInfo: {
                    calorie: 120,
                    carb: 28,
                    protein: 0,
                    fat: 1.5
                },
                cost: 4
            },
            {
                name: "Oregano Tea",
                src: "assets/drinks/oregano-tea.webp",
                description: "Experience the aromatic charm of Oregano Tea, a herbal infusion that not only delights the palate but also provides a host of health benefits.",
                nutritionalInfo: {
                    calorie: 3,
                    carb: 0.6,
                    protein: 0.1,
                    fat: 0
                },
                cost: 3.5
            },
            {
                name: "Sky Juice",
                src: "assets/drinks/sky-juice.webp",
                description: "Stay refreshed with Sky Juice, a pure and crisp elixir that hydrates and invigorates, offering a taste of nature's purity in every sip.",
                nutritionalInfo: {
                    calorie: 0,
                    carb: 0,
                    protein: 0,
                    fat: 0
                },
                cost: 0.5
            }
        ],
    }
];

export default categories;