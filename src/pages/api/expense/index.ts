// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { roundAmount } from "@/utils/formatNumbers";

import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";

type CreateType = Prisma.ExpenseCreateWithoutCategoryInput & {
  category: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { expense } = prisma;
  const { method, body, query } = req;
  if (method === "POST") {
    const { amount, date, info, category } = body as CreateType;

    const data = await expense.create({
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
    return res.status(200).json(data);
  }

  if (method === "GET") {
    const { page, perPage } = query;
    const PAGE = (parseInt(page as string) - 1) * parseInt(perPage as string);
    const data = await prisma.$transaction([
      prisma.expense.count(),
      prisma.expense.aggregate({
        _sum: {
          amount: true,
        },
      }),
      prisma.expense.findMany({
        skip: PAGE ?? 1,
        take: parseInt(perPage as string),
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
          date: "desc",
        },
      }),
    ]);
    const [total, totalAmount, returnedData] = data;

    const totalAmount2 = roundAmount(totalAmount._sum.amount as number);

    //Return the content of the data file in json format

    return res.status(200).json({
      totalItems: total,
      totalAmount: totalAmount2,
      data: returnedData,
    });
  }
};

export default handler;
