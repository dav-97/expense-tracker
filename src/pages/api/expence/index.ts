// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { roundAmount } from "@/utils/round";

import { prisma } from "@/utils/prisma";

type Data = {
  id: number;
  amount: number;
  date: string;
  info: string;
  categoryId: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data: PrismaData } = prisma;
  const { method, body } = req;
  if (method === "POST") {
    const { amount, categoryId, date, info } = body as Data;

    const data = await PrismaData.create({
      data: {
        amount,
        date: date || new Date(),
        info,
        categoryId,
      },
    });
    return res.status(200).json(data);
  }

  if (method === "GET") {
    const returnedData = await PrismaData.findMany({
      select: {
        id: true,
        amount: true,
        category: {
          select: {
            name: true,
          },
        },
        date: true,
        info: true,
      },
      orderBy: {
        date: "asc",
      },
    });

    //Return the content of the data file in json format

    let total = 0;

    returnedData.forEach(({ amount }) => (total += amount));

    return res
      .status(200)
      .json({ total: roundAmount(total), data: returnedData });
  }
};

export default handler;
