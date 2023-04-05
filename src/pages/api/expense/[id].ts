// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { expense } = prisma;
  const {
    method,
    body,
    query: { id },
  } = req;

  const selectedId = parseInt(id as string);

  if (method === "DELETE") {
    const data = await expense.delete({
      where: {
        id: selectedId,
      },
    });
    return res.status(200).json(data);
  }

  if (method === "GET") {
    const data = await expense.findFirst({
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
      where: {
        id: selectedId,
      },
    });

    //Return the content of the data file in json format

    return res.status(200).json(data);
  }
  if (method === "PUT") {
    const updateThisData = body as Prisma.ExpenseUpdateWithoutCategoryInput;

    const data = await expense.update({
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
      where: {
        id: selectedId,
      },
      data: updateThisData,
    });

    //Return the content of the data file in json format

    return res.status(200).json(data);
  }
};

export default handler;
