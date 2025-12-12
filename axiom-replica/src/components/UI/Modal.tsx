import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'

export default function Modal({ open, onOpenChange, title, children }: any) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded bg-white/5 p-4">
          <Dialog.Title className="font-semibold mb-2">{title}</Dialog.Title>
          <div>{children}</div>
          <Dialog.Close className="mt-4 px-3 py-1 bg-white/5 rounded">Close</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
