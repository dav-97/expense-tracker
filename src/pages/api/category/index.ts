// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@/utils/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { category } = prisma;
  const { method, body } = req;
  if (method === "POST") {
    const { name } = body;

    const data = await category.create({
      data: {
        name,
      },
    });
    return res.status(200).json(data);
  }

  if (method === "GET") {
    const returnedData = await category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    //Return the content of the data file in json format

    return res.status(200).json(returnedData);
  }
};

export default handler;
