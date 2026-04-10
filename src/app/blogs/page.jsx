import BlogsCard from "@/Components/Ui/Blogs/BlogsCard"

export const metadata = {
    title: 'Blogs',
    description: '...',
}
const blogs=[
    {
        "id": 1,
        "title": "Cheese Burger – The King of Fast Food",
        "slug": "cheese-burger-king-fast-food",
        "category": "Food Review",
        "author": "Shanto Dev Sharma",
        "date": "2026-04-10",
        "readTime": "4 min read",
        "tags": ["Burger", "Fast Food", "Cheese"],
        "rating": 4.5,
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        "excerpt": "Cheese burger is one of the most popular fast foods worldwide.",
        "isPublished": true
    },
    {
        "id": 2,
        "title": "Chicken Biryani – A Royal Taste",
        "slug": "chicken-biryani-royal-taste",
        "category": "Food Culture",
        "author": "Shanto Dev Sharma",
        "date": "2026-04-10",
        "readTime": "6 min read",
        "tags": ["Biryani", "Rice", "Spicy"],
        "rating": 4.8,
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        "excerpt": "Biryani is more than food, it’s an emotion.",
        "isPublished": true
    },
    {
        "id": 3,
        "title": "Pepperoni Pizza – Italian Classic",
        "slug": "pepperoni-pizza-italian-classic",
        "category": "International Food",
        "author": "Shanto Dev Sharma",
        "date": "2026-04-10",
        "readTime": "5 min read",
        "tags": ["Pizza", "Cheese", "Italian"],
        "rating": 4.7,
        "image": "https://images.unsplash.com/photo-1548365328-9f547f7a8f4a",
        "excerpt": "A global favorite pizza with rich flavor.",
        "isPublished": true
    },
    {
        "id": 4,
        "title": "French Fries – Crispy Golden Delight",
        "slug": "french-fries-crispy-delight",
        "category": "Snacks",
        "author": "Shanto Dev Sharma",
        "date": "2026-04-10",
        "readTime": "3 min read",
        "tags": ["Fries", "Snacks", "Crispy"],
        "rating": 4.2,
        "image": "https://images.unsplash.com/photo-1576107232684-1279f390859f",
        "excerpt": "Simple yet addictive crispy fries loved by everyone.",
        "isPublished": true
    },
    {
        "id": 5,
        "title": "Chocolate Milkshake – Sweet Energy Drink",
        "slug": "chocolate-milkshake-sweet-energy",
        "category": "Beverage",
        "author": "Shanto Dev Sharma",
        "date": "2026-04-10",
        "readTime": "4 min read",
        "tags": ["Milkshake", "Chocolate", "Cold Drink"],
        "rating": 4.6,
        "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
        "excerpt": "A cold chocolate shake perfect for summer.",
        "isPublished": true
    },
    {
        "id": 6,
        "title": "Grilled Sandwich – Simple Healthy Snack",
        "slug": "grilled-sandwich-healthy-snack",
        "category": "Snacks",
        "author": "Shanto Dev Sharma",
        "date": "2026-04-10",
        "readTime": "3 min read",
        "tags": ["Sandwich", "Healthy", "Quick Food"],
        "rating": 4.3,
        "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
        "excerpt": "Perfect quick snack for busy people.",
        "isPublished": true
    },
    {
        "id": 7,
        "title": "Spicy Chicken Wings Guide",
        "slug": "spicy-chicken-wings-guide",
        "category": "Fast Food",
        "author": "Shanto Dev Sharma",
        "date": "2026-04-10",
        "readTime": "5 min read",
        "tags": ["Chicken", "Spicy", "Wings"],
        "rating": 4.4,
        "image": "https://images.unsplash.com/photo-1608039829572-78524f79c4c7",
        "excerpt": "Best spicy wings recipe and taste review.",
        "isPublished": true
    },
    {
        "id": 8,
        "title": "Best Street Food in Bangladesh",
        "slug": "best-street-food-bangladesh",
        "category": "Street Food",
        "author": "Shanto Dev Sharma",
        "date": "2026-04-10",
        "readTime": "7 min read",
        "tags": ["Street Food", "Bangladesh", "Culture"],
        "rating": 4.9,
        "image": "https://images.unsplash.com/photo-1604908177522-040a0a5b0b23",
        "excerpt": "Exploring delicious street food culture in Bangladesh.",
        "isPublished": true
    },
    {
        "id": 9,
        "title": "Burger vs Pizza – Ultimate Battle",
        "slug": "burger-vs-pizza-battle",
        "category": "Comparison",
        "author": "Shanto Dev Sharma",
        "date": "2026-04-10",
        "readTime": "6 min read",
        "tags": ["Burger", "Pizza", "Comparison"],
        "rating": 4.6,
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349",
        "excerpt": "Which one is better? Burger or Pizza?",
        "isPublished": true
    },
    {
        "id": 10,
        "title": "Healthy Salad for Weight Loss",
        "slug": "healthy-salad-weight-loss",
        "category": "Health Food",
        "author": "Shanto Dev Sharma",
        "date": "2026-04-10",
        "readTime": "4 min read",
        "tags": ["Salad", "Health", "Diet"],
        "rating": 4.3,
        "image": "https://images.unsplash.com/photo-1551248429-40975aa4de74",
        "excerpt": "Best salad for fitness and diet plan.",
        "isPublished": true
    },
    {
        "id": 11,
        "title": "Coffee – Developer Fuel Guide",
        "slug": "coffee-developer-fuel",
        "category": "Beverage",
        "author": "Shanto Dev Sharma",
        "date": "2026-04-10",
        "readTime": "3 min read",
        "tags": ["Coffee", "Energy", "Developer"],
        "rating": 4.8,
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        "excerpt": "Why developers love coffee so much?",
        "isPublished": true
    },
    {
        "id": 12,
        "title": "Ice Cream Summer Guide",
        "slug": "ice-cream-summer-guide",
        "category": "Dessert",
        "author": "Shanto Dev Sharma",
        "date": "2026-04-10",
        "readTime": "4 min read",
        "tags": ["Ice Cream", "Summer", "Dessert"],
        "rating": 4.7,
        "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a",
        "excerpt": "Best ice cream flavors for summer.",
        "isPublished": true
    },
    {
        "id": 13,
        "title": "Sushi – Japanese Food Culture",
        "slug": "sushi-japanese-culture",
        "category": "International Food",
        "author": "Shanto Dev Sharma",
        "date": "2026-04-10",
        "readTime": "6 min read",
        "tags": ["Sushi", "Japan", "Seafood"],
        "rating": 4.6,
        "image": "https://images.unsplash.com/photo-1553621042-f6e147245754",
        "excerpt": "Traditional Japanese sushi culture explained.",
        "isPublished": true
    },
    {
        "id": 14,
        "title": "Healthy Breakfast Ideas",
        "slug": "healthy-breakfast-ideas",
        "category": "Health Food",
        "author": "Shanto Dev Sharma",
        "date": "2026-04-10",
        "readTime": "5 min read",
        "tags": ["Breakfast", "Health", "Diet"],
        "rating": 4.5,
        "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
        "excerpt": "Start your day with healthy breakfast options.",
        "isPublished": true
    },
    {
        "id": 15,
        "title": "Top Fast Foods in 2026",
        "slug": "top-fast-foods-2026",
        "category": "Fast Food",
        "author": "Shanto Dev Sharma",
        "date": "2026-04-10",
        "readTime": "7 min read",
        "tags": ["Fast Food", "Trends", "2026"],
        "rating": 4.9,
        "image": "https://images.unsplash.com/photo-1606755962773-d324e5a0c5c1",
        "excerpt": "Latest fast food trends of 2026.",
        "isPublished": true
    }
]
const BlogsPage = () => {

    // console.log(blogs)
    return (
        <div>
            <div className="grid grid-cols-1 my-5 p-10 space-y-5">
                {
                    blogs.map(blog => <BlogsCard key={blog.id} blog={blog}></BlogsCard>)
                }
            </div>
        </div>
    )
}

export default BlogsPage