'use server';

import Roster from "../models/roster.model";
import { connectToDB } from "../mongoose";
import { RosterConstants as rosterData } from "@/constants";


export const createRoster = async () => {
    try {
        connectToDB();
        // Create a new Roster document in the database
        await Roster.create(rosterData);
        // No need to revalidate the path for roster data (assuming you are using Next.js revalidation for other data)
    } catch (error: any) {
        throw new Error(`Failed to create/update roster data: ${error.message}`);
    }
}

export const fetchAllPlayer = async () => {
    try {
        connectToDB();
        await new Promise((resolve) => setTimeout(resolve, 4000))
        const allPlayers = await Roster.find({});

        if(!allPlayers) return;

        return allPlayers;
    } catch (error: any) {
        throw new Error(`Failed to fetch roster data: ${error.message}`);
    }
}