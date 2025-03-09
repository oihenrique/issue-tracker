'use client'

import { Button, TextField } from '@radix-ui/themes'
import { MdOutlineTitle } from 'react-icons/md'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root placeholder="Add a title…">
            <TextField.Slot>
                <MdOutlineTitle />
            </TextField.Slot>
        </TextField.Root>
        <SimpleMDE placeholder="Add a description…" />
        <Button>Submit new issue</Button>
    </div>
  )
}

export default NewIssuePage