'use server';

import { revalidatePath } from "next/cache";
import ShoppingCard from "../models/shoppingCard.model";
import { connectToDB } from "../mongoose";

interface shoppingCardProps {
    category: string;
    images: string[];
    title: string;
    price: string;
    description: string;
    isOutOfStock: string;
    path: string;
}

export async function createShoppingCard({ 
    category,
    images,
    title,
    price,
    description,
    isOutOfStock, 
    path,
}: shoppingCardProps) {
    try {
        connectToDB();

        await ShoppingCard.create({
            category,
            images,
            title,
            price,
            description,
            isOutOfStock,
        })
        revalidatePath(path);
    } catch (error: any) {
        throw new Error(`Failed to create/update shopping card: ${error.message}`)
    }
}


export async function fetchAllShoppingItems(
    category: string | string[] | undefined,
    search: string | string[] | undefined
) {
    try {
        connectToDB();

        let query: any = {};

        // Add category filter to the query if category is provided
        if (category) {
            query.category = category;
        }

        // Add search filter to the query if search is provided
        if (search) {
            const titleRegex = Array.isArray(search)
                ? { $in: search.map(s => new RegExp(s, 'i')) }
                : { $regex: new RegExp(search, 'i') };

            query.title = titleRegex;
        }

        const shoppingCards = await ShoppingCard.find(query);

        if (!shoppingCards) return [];

        return shoppingCards;
    } catch (error: any) {
        throw new Error(`Failed to fetch shopping cards: ${error.message}`);
    }
}

export const fetchEachShoppingItem = async (id: string) => {
    try {
        connectToDB();

        const shoppingCardDetails = await ShoppingCard.findById(id);

        if(!shoppingCardDetails) return;

        return shoppingCardDetails;
    } catch (error: any) {
        throw new Error(`Failed to fetch shopping card: ${error.message}`);
    }
}

export async function deleteShoppingCard (id: string, path: string) {
    try {
        connectToDB();

        const deletedShoppingItem = await ShoppingCard.findOneAndDelete({ _id: id });


        if (!deletedShoppingItem) {
            throw new Error(`News with ID ${id} not found`);
        }

        revalidatePath(path)
    } catch (error: any) {
       throw new Error(`Failed to delete shopping item card: ${error.message}`) 
    }
}