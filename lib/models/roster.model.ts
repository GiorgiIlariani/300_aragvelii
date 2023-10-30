import mongoose from "mongoose";

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
//   socialIcons: [
//     {
//       icon: {
//         type: String, // You may want to specify the type for icons appropriately
//       },
//       href: {
//         type: String,
//       },
//     },
//   ],
});

const Roster = mongoose.models.Roster || mongoose.model('Roster', rosterSchema);

export default Roster;
