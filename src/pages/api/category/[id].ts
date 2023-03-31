// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@/utils/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { category } = prisma;
  const {
    method,
    body: { name },
    query: { id },
  } = req;

  const selectedId = id as string;

  if (method === "DELETE") {
    const data = await category.delete({
      where: {
        id: selectedId,
      },
    });
    return res.status(200).json(data);
  }

  if (method === "GET") {
    const data = await category.findFirst({
      select: {
        id: true,
        name: true,
      },
      where: {
        id: selectedId,
      },
    });

    //Return the content of the data file in json format

    return res.status(200).json(data);
  }
  if (method === "PUT") {
    const data = await category.update({
      select: {
        name: true,
      },
      where: {
        id: selectedId,
      },
      data: {
        name,
      },
    });

    //Return the content of the data file in json format

    return res.status(200).json(data);
  }
};

export default handler;
