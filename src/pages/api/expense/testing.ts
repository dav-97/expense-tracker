// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@/utils/prisma";

type Data = {
  id: number;
  amount: number;
  date: string;
  info: string;
  category: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { expense } = prisma;
  const { method, body, query } = req;
  if (method === "POST") {
    const test = body as Data[];

    test.forEach(async ({ amount, category, date, info }) => {
      await expense.create({
        data: {
          amount,
          date: date || new Date(),
          info,
          category: {
            connectOrCreate: {
              create: {
                name: category,
              },
              where: {
                name: category,
              },
            },
          },
        },
      });
    });

    return res.status(200).json(body);
  }
};

export default handler;
