import React, { useState, useEffect } from "react";


type Product = {
    id: number
    thumbnail: string,
    title: string,
}

type ApiResponse = {
    products: Product[],
    total: number,
    skip: number,
    limit: number
}

const InfiniteScrolling: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const fetchProducts = async () => {
        try {
            const LIMIT = 10;
            const skip = page * LIMIT
            setLoading(true);
            setError(null)
            const response = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`);
            const result: ApiResponse = await response.json();
            if (!response.ok) {
                throw new Error(`Http error showing:${response.status}`)
            }
            setProducts((prev: Product[]) => [...prev, ...result.products]);
            if (result.products.length === 0) return setHasMore(false)
            console.log(result.products)
        }
        catch (error) {
            if (error instanceof Error) {
                setError(`Please resolve: ${error.message}`)
            }

        }
        finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchProducts()
    }, [page]);
    const handleScroll = () => {
        const Height = document.documentElement.scrollHeight;
        const Top = document.documentElement.scrollTop;
        const innerHeight = window.innerHeight;
        if (innerHeight + Top + 100 >= Height && !loading && hasMore) {
            setPage((prev) => prev + 1)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[loading,hasMore])



    return (
        <div>
            {error && (
                <h2>error:{error}</h2>
            )}
            {
                <div>


                    {products.map((product) => (
                        <div key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                        </div>
                    ))}


                </div>
            }

            {loading && (
                <h2>Loading.....</h2>
            )}


        </div>
    )
}

export default InfiniteScrolling;