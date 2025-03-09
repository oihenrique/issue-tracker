'use client'

import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'
import { MdOutlineTitle } from 'react-icons/md'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root placeholder="Add a title…">
            <TextField.Slot>
                <MdOutlineTitle />
            </TextField.Slot>
        </TextField.Root>
        <TextArea placeholder="Add a description…" />
        <Button>Submit new issue</Button>
    </div>
  )
}

export default NewIssuePage