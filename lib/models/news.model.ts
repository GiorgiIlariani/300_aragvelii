import mongoose from "mongoose";

const newsChema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})


const News = mongoose.models.News || mongoose.model('News', newsChema);

export default News;