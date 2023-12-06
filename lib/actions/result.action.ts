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

export async function createResult ({ id, title, content, prizepool, image, path, date }: createResultProps){
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


export const fetchResults = async ( pageNumber = 1, pageSize = 9) => {
    try {
        connectToDB();
        const skippedResults = (pageNumber - 1) * pageSize;

        const allResults = await Result.find({})
        .sort({createdAt: 'desc'})
        .skip(skippedResults)
        .limit(pageSize)

    
        const totalResultsCount = await Result.countDocuments();

        const isNextPage = totalResultsCount > skippedResults + allResults.length;

        if(!allResults) return

        return { allResults, isNextPage, totalResultsCount }
    } catch (error: any) {
        throw new Error(`Failed to fetch all result: ${error.message}`)
    }
}

export async function fetchCurrentResultDetails(id: string){
    try {
        connectToDB();

        const resultDetails = await Result.find({
            _id: id
        })

        if(!resultDetails) return false;

        return resultDetails;
    } catch (error: any) {
        throw new Error(`Failed to fetch result details: ${error.message}`)
    }
}