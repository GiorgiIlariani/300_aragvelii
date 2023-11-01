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
        const allPlayers = await Roster.find({});

        if(!allPlayers) return;

        return allPlayers;
    } catch (error: any) {
        throw new Error(`Failed to fetch roster data: ${error.message}`);
    }
}

export const fetchEachPlayer = async (playerId: string) => {
    try {
        connectToDB();
        const player = await Roster.find({ _id: playerId });

        return player;
    } catch (error: any) {
        throw new Error(`Failed to fetch player data: ${error.message}`);
    }
}

interface updatedDetailsProps {
    match: string; 
    kills: string; 
    damage: string; 
    survivalTime: string;
}

export const updatePlayerDetails = async (playerId: string, updatedDetails: updatedDetailsProps) => {
    try {
        // Connect to the database (if not already connected)
        connectToDB();

        // Find the existing player's details
        const existingPlayer = await Roster.findById(playerId);

        if (!existingPlayer) {
            console.log("Player not found");
            return;
        }

        // Calculate the updated details by adding the new values to the old values
        const updatedDetailsWithAddition = {
            match: (parseInt(existingPlayer.details.match || 0) + parseInt(updatedDetails.match)).toString(),
            kills: (parseInt(existingPlayer.details.kills || 0) + parseInt(updatedDetails.kills)).toString(),
            damage: (parseInt(existingPlayer.details.damage || 0) + parseInt(updatedDetails.damage)).toString(),
            survivalTime: (parseInt(existingPlayer.details.survivalTime || 0) + parseInt(updatedDetails.survivalTime)).toString(),
        };

        // Use findOneAndUpdate to update the player's details
        await Roster.findOneAndUpdate(
            { _id: playerId },
            { $set: { details: updatedDetailsWithAddition } },
            { new: true } // To get the updated document
        );
    } catch (error: any) {
        throw new Error(`Failed to update player details: ${error.message}`);
    }
}






