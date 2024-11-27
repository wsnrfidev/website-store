import { Product } from "@/types"

const URL = `${process.env.PUBLIC_API_URL}/products`

const getProduct = async (id: string): Promise<Product> => {
    const res = await fetch(`${URL}/${id}`, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error(`Failed to fetch product with ID: ${id}, ${res.statusText}`);
    }

    return res.json();
};

export default getProduct;