import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

interface Data {
  id: number;
  title: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const data:  = prisma.post.findMany();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
