"use client";

import { Button, Callout, TextField } from "@radix-ui/themes";
import { MdOutlineTitle } from "react-icons/md";
import { useForm, Controller } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { register, control, handleSubmit } = useForm<IssueForm>();

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
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Add a description…" {...field} />
          )}
        />
        <Button>Submit new issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;