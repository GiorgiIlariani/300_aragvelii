'use server';

import { revalidatePath } from "next/cache";
import Result from "../models/result.model";
import { connectToDB } from "../mongoose";

interface createResultProps {
    id: string;
    title: string;
    content: string;
    prizepool: string;
    image: string;
    path: string;
    date: string;
}

export async function createResult ({ id, title, content, prizepool, image, path, date }: createResultProps) {
    connectToDB();

    try {
        await Result.create({
            id,
            title,
            content,
            prizepool,
            image,
            date,
        })
        
        revalidatePath(path);
    } catch (error: any) {
        throw new Error(`Failed to create/update result: ${error.message}`)
    }
}


export async function fetchResults() {
    try {
        connectToDB();

        const allResult = await Result.find({}).sort({
            createdAt: 'desc'
        });

        return allResult;
    } catch (error: any) {
        throw new Error(`Failed to fetch all result: ${error.message}`)
    }
}