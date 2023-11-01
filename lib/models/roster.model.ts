import mongoose from "mongoose";

const detailSchema = new mongoose.Schema({
  match: {
    type: Number,
    required: false,
  },
  kills: {
    type: Number,
    required: false,
  },
  damage: {
    type: Number,
    required: false,
  },
  survivalTime: {
    type: Number,
    required: false,
  },
});

const rosterSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  pubgUsername: {
    type: String,
    required: true,
  },
  pubgId: {
    type: String,
    required: true,
  },
  details: detailSchema, // Embed the details subdocument
});

const Roster = mongoose.models.Roster || mongoose.model('Roster', rosterSchema);

export default Roster;
