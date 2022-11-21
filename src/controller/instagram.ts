import { Request, Response } from "express";
import * as axios from "axios";

const LIMIT = 5;
const TARGET = "media_url, permalink";
export const getMyFeed = async (req: Request, res: Response) => {
  try {
    const { data } = await axios.default.get(
      `https://graph.instagram.com/me?access_token=${process.env.INSTA_TOKEN}`
    );
    const id = data.id;

    const { data: feed } = await axios.default.get(
      `https://graph.instagram.com/${id}/media?fields=${TARGET}&limit=${LIMIT}&access_token=${process.env.INSTA_TOKEN}`
    );
    res.json({ data: feed.data });
  } catch (error) {
    console.log(error);
  }
};
