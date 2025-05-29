type ProductPageProps = { params: Promise<{ slug: string[] }> };

async function getData() {
    // const res = await fetch("https://fakestoreapi.com/products");
    const res = await fetch("http://localhost:3000/api/product", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data!");
    }

    return res.json();
}

export default async function ProductPage(props: ProductPageProps) {
    const { slug } = await props.params;
    const products = await getData();
    // console.log(products);

    return (
        <div className="container mx-auto px-4 py-6">
            {/* <h1>Detail Product Page</h1> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.data && products.data.length > 0 ? (
                    products.data.map((product: any) => (
                        <div key={product.id} className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
                        >
                            <a href="#">
                                <img className="w-full h-48 object-contain p-4 rounded-t-lg" src={product.image} alt={product.title}
                                />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white truncate text-center">{product.title}</h5>
                                </a>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-2xl font-bold text-gray-900 dark:text-white">Rp {product.price}</span>
                                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Add to cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p></p>
                )}
            </div>
            {slug && slug.length >= 3 ? (
                <div className="mt-6 text-center">
                    <p>Category: {slug[0]}</p>
                    <p>Gender: {slug[1]}</p>
                    <p>Id: {slug[2]}</p>
                </div>
            ) : (
                <p></p>
            )}
        </div>
    );
}
