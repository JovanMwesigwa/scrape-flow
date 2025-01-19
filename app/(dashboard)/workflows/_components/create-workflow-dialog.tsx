"use client";

import CustomDialogHeader from "@/components/CustomDialogHeader";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { createWorkflowSchema } from "@/schema/workflow/createWorkflowSchema";
import { Layers2Icon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CreateWorkflowDialog = ({
  triggerText = "Create Workflow",
}: {
  triggerText?: string;
}) => {
  const [open, setOpen] = React.useState(false);

  const form = useForm<z.infer<typeof createWorkflowSchema>>({
    resolver: zodResolver(createWorkflowSchema),
    defaultValues: {},
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>{triggerText}</Button>
      </DialogTrigger>

      <DialogContent className="px-0">
        <CustomDialogHeader
          icon={Layers2Icon}
          title="Create Workflow"
          subTitle="Start building your workflow"
        />

        <div className="p-6">
          <Form {...form}>
            <form className="space-y-8 w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1">
                      Name
                      <p className="text-xs text-primary">(required)</p>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Choose a name for your workflow
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1">
                      Description
                      <p className="text-xs text-muted-foreground">
                        (optional)
                      </p>
                    </FormLabel>
                    <FormControl>
                      <Textarea className="resize-none" {...field} />
                    </FormControl>
                    <FormDescription>
                      Provide a brief description of what your workflow does.{" "}
                      <br /> This optional but can help you remember the
                      workflows purpose.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Proceed
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWorkflowDialog;
