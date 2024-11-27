import { Category } from "@/types"

const URL = `${process.env.PUBLIC_API_URL}/categories`

const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(URL, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error(`Failed to fetch categories: ${res.statusText}`);
    }

    return res.json();
};

export default getCategories;