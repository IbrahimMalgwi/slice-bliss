// data/products.js
import plain from "../assets/plain.jpeg"
import coconutflakes from "../assets/coconutflakes.jpeg"
import nuttymix from "../assets/nuttymix.jpeg"
import  almond from "../assets/almonds.jpeg"
import raising from "../assets/raisingbanana.jpeg"
import raisingandalmond from "../assets/raisingsandalmonds.jpeg"
import chocolatechips from "../assets/chocolatechips.jpeg"
import chocolatechunks from "../assets/chocolatechunks.jpeg"
import marble from "../assets/marble.jpeg"
import doublechoco from "../assets/doublechoco.jpeg"
import oreos from "../assets/oreos.jpeg"
import carrotbanana from "../assets/carrotbanana.jpeg"
import orange from "../assets/orange.jpeg"

export const products = [
    {
        id: 1,
        name: "Plain Banana Bread",
        description: "Classic moist banana bread with perfect sweetness and tender crumb. Our signature recipe that started it all.",
        prices: {
            mini: 1900,
            midi: 5800,
            regular: 8700
        },
        image: plain,
        category: "banana-bread",
        featured: true,
        variants: ["mini", "midi", "regular"]
    },
    {
        id: 2,
        name: "Coconut Flakes Banana Bread",
        description: "Tropical twist with sweet coconut flakes adding texture and flavor to our classic banana bread.",
        prices: {
            mini: 2300,
            midi: 6700,
            regular: 10050
        },
        image: coconutflakes,
        category: "banana-bread",
        featured: false,
        variants: ["mini", "midi", "regular"]
    },
    {
        id: 3,
        name: "Nutty Mix Banana Bread",
        description: "Loaded with a delightful mix of walnuts, pecans, and almonds for a crunchy texture in every bite.",
        prices: {
            mini: 2900,
            midi: 7500,
            regular: 11250
        },
        image: nuttymix,
        category: "banana-bread",
        featured: true,
        variants: ["mini", "midi", "regular"]
    },
    {
        id: 4,
        name: "Almonds Banana Bread",
        description: "Premium sliced almonds baked into our banana bread for a sophisticated nutty flavor and crunch.",
        prices: {
            mini: 2250,
            midi: 6500,
            regular: 9750
        },
        image: almond,
        category: "banana-bread",
        featured: false,
        variants: ["mini", "midi", "regular"]
    },
    {
        id: 5,
        name: "Raisins Banana Bread",
        description: "Sweet, plump raisins scattered throughout for bursts of natural sweetness in our moist banana bread.",
        prices: {
            mini: 2100,
            midi: 6300,
            regular: 9450
        },
        image: raising,
        category: "banana-bread",
        featured: false,
        variants: ["mini", "midi", "regular"]
    },
    {
        id: 6,
        name: "Raisins & Almonds Banana Bread",
        description: "Perfect combination of sweet raisins and crunchy almonds for a balanced texture and flavor profile.",
        prices: {
            mini: 2400,
            midi: 6900,
            regular: 10500
        },
        image: raisingandalmond,
        category: "banana-bread",
        featured: false,
        variants: ["mini", "midi", "regular"]
    },
    {
        id: 7,
        name: "Chocolate Chips Banana Bread",
        description: "Classic banana bread loaded with rich chocolate chips that melt perfectly in every slice.",
        prices: {
            mini: 2500,
            midi: 6800,
            regular: 10200
        },
        image: chocolatechips,
        category: "banana-bread",
        featured: true,
        variants: ["mini", "midi", "regular"]
    },
    {
        id: 8,
        name: "Chocolate Chunks Banana Bread",
        description: "Generous chunks of premium chocolate create rich, gooey pockets throughout our banana bread.",
        prices: {
            mini: 2500,
            midi: 7000,
            regular: 10500
        },
        image: chocolatechunks,
        category: "banana-bread",
        featured: false,
        variants: ["mini", "midi", "regular"]
    },
    {
        id: 9,
        name: "Marble Banana Bread",
        description: "Beautiful swirls of chocolate and vanilla banana bread create this stunning marble effect.",
        prices: {
            mini: 2300,
            midi: 6500,
            regular: 9750
        },
        image: marble,
        category: "banana-bread",
        featured: false,
        variants: ["mini", "midi", "regular"]
    },
    {
        id: 10,
        name: "Double Choco Banana Bread",
        description: "For true chocolate lovers - cocoa-infused banana bread with double the chocolate chips.",
        prices: {
            mini: 2800,
            midi: 7600,
            regular: 11400
        },
        image: doublechoco,
        category: "banana-bread",
        featured: true,
        variants: ["mini", "midi", "regular"]
    },
    {
        id: 11,
        name: "Oreos Banana Bread",
        description: "Crushed Oreo cookies mixed into our banana bread for a fun, cookies-and-cream inspired treat.",
        prices: {
            mini: 2400,
            midi: 6800,
            regular: 10200
        },
        image: oreos,
        category: "banana-bread",
        featured: false,
        variants: ["mini", "midi", "regular"]
    },
    {
        id: 12,
        name: "Carrot Banana Bread",
        description: "Unique fusion of carrot cake and banana bread with warm spices and cream cheese swirls.",
        prices: {
            mini: 2300,
            midi: 6400,
            regular: 9600
        },
        image: carrotbanana,
        category: "banana-bread",
        featured: false,
        variants: ["mini", "midi", "regular"]
    },
    {
        id: 13,
        name: "Orange Banana Bread",
        description: "Zesty orange zest and juice brighten up our classic banana bread with citrusy freshness.",
        prices: {
            mini: 2100,
            midi: 6400,
            regular: 9600
        },
        image: orange,
        category: "banana-bread",
        featured: false,
        variants: ["mini", "midi", "regular"]
    }
    // Zobo Drink has been removed
];