'use server';

import { createNewsProps } from "@/types";
import News from "../models/news.model";
import { connectToDB } from "../mongoose";
import { revalidatePath } from "next/cache";

export const createNews = async ({ content, title, author, id, url, path, images }: createNewsProps) => {    

    try {
        connectToDB();
        // Create a new News document in the database
        await News.create({
            id,
            images,
            title,
            content,
            author,
            url,
        })

        revalidatePath(path);
    } catch (error: any) {
        throw new Error(`Failed to create/update news: ${error.message}`)
    }
}

export const fetchAllLatestNews = async () => {
    try {
        connectToDB();

        const news = await News.find({})
        .sort({ createdAt: "desc" })
        .limit(3);

        if(!news) return;
 
        return news;
    } catch (error: any) {
        throw new Error(`Failed to fetch latest news: ${error.message}`)
    }
}

export const fetchAllNews = async ( pageNumber = 1, pageSize = 9) => {
    try {
        connectToDB();

        const skippedNews = (pageNumber - 1) * pageSize;

        const allNews = await News.find({})
        .sort({createdAt: 'desc'})
        .skip(skippedNews)
        .limit(pageSize)

    
        const totalNewsCount = await News.countDocuments();

        const isNextPage = totalNewsCount > skippedNews + allNews.length;

        if(!allNews) return

        return { allNews, isNextPage, totalNewsCount }
    } catch (error: any) {
        throw new Error(`Failed to fetch all news: ${error.message}`)
    }
}

export const fetchEachNews = async (userId: string) => {
    
    try {
        connectToDB();

        const eachNews = await News.find({
            _id: userId,
        })

        return eachNews;
    } catch (error) {
        
    }
}

export const deleteNews = async (userId: string, path: string) => {
    try {
        connectToDB();

        // Use the News model to find and delete the news item with the given userId
        const deletedNews = await News.findOneAndDelete({ _id: userId });

        if (!deletedNews) {
            throw new Error(`News with ID ${userId} not found`);
        }

        revalidatePath(path);
    } catch (error: any) {
        throw new Error(`Failed to delete news: ${error.message}`);
    }
}
