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


export async function fetchAllShoppingItems(category: string | string[] | undefined) {
    try {
        connectToDB();
    
        const categoryCards = await ShoppingCard.find({ category: category });

        return categoryCards;
    } catch (error: any) {
        throw new Error(`Failed to fetch shopping cards: ${error.message}`);
    }
}