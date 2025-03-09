"use client";

import { Button, Callout, TextField } from "@radix-ui/themes";
import { MdOutlineTitle } from "react-icons/md";
import { useForm, Controller } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "../../validationSchemas";
import { z } from "zod";
import { Text } from "@radix-ui/themes";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });  

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root className="mb-3">
          <Callout.Icon></Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError('An error occurred. Error code: ' + error.response.status);
          }
        })}
      >
        <TextField.Root placeholder="Add a title…" {...register("title")}>
          <TextField.Slot>
            <MdOutlineTitle />
          </TextField.Slot>
        </TextField.Root>
        {errors.title && (<Text color="red" as="p">{errors.title.message}</Text>)}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Add a description…" {...field} />
          )}
        />
        {errors.description && (<Text color="red" as="p">{errors.description.message}</Text>)}
        <Button>Submit new issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;