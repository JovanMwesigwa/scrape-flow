"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const deleteWorkflow = async (workflowId: string) => {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  await prisma.workflow.delete({
    where: {
      id: workflowId,
      userId,
    },
  });

  revalidatePath("/workflows");
};
