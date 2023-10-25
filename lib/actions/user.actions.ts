'use server';

import { createNewsProps, updateUserProps } from "@/types";
import { connectToDB } from "../mongoose";
import User from "../models/user.model";


export async function updateUser ({
    name,
    path,
    pubgUsername,
    pubgId,
    userId,
    bio,
    image,
}: updateUserProps): Promise<void> {
    connectToDB();

    try {
        await User.findOneAndUpdate(
            { id: userId },
            {
              name, 
              bio,
              image,
              onboarded: true,
              pubgId,
              pubgUsername,
            },
            { upsert: true }
        )
        
    } catch (error: any) {
        throw new Error(`failed to create/update user: ${error.message}`)
    }
}

export const fetchUser = async (userId: string) => {
    connectToDB();

    try {
        return User.findOne({ id: userId });
    } catch (error: any) {
        throw new Error(`Failed to fetch user: ${error.message}`)
    }
}


