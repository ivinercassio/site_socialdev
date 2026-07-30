"use client"

import { useState } from "react"
import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../components/ui/drawer"
import { useMediaQuery } from "../hooks/use-mobile"

interface ReportModalProps {
  type: "post" | "comment"
  onConfirm?: (reason: string) => void
  trigger?: React.ReactNode
}

export function ReportModal({ type, onConfirm, trigger }: ReportModalProps) {
  const [open, setOpen] = useState(false)
  const [reason, setReason] = useState("")
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm(reason)
    }
    setReason("")
    setOpen(false)
  }

  const handleCancel = () => {
    setReason("")
    setOpen(false)
  }

  const title = `Report ${type === "post" ? "Post" : "Comment"}`
  const description = `Are you sure you want to report this ${type}? Please briefly describe your reason. Our administrators will review your report.`

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {trigger || <Button variant="destructive">Report</Button>}
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] bg-neutral-900 border-neutral-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-white text-lg font-semibold">
              {title}
            </DialogTitle>
            <DialogDescription className="pt-2 text-neutral-400 text-sm leading-relaxed">
              {description}
            </DialogDescription>
          </DialogHeader>

          {/* Campo de Motivação */}
          <div className="py-2">
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Type your reason here..."
              rows={3}
              className="w-full rounded-md bg-neutral-800 border border-neutral-700 p-3 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400 resize-none"
            />
          </div>

          <ReportActions onConfirm={handleConfirm} onCancel={handleCancel} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        {trigger || <Button variant="destructive">Report</Button>}
      </DrawerTrigger>

      <DrawerContent className="bg-neutral-900 border-neutral-800 text-white p-4">
        <DrawerHeader className="text-left p-0 mb-4">
          <DrawerTitle className="text-white text-lg font-semibold">
            {title}
          </DrawerTitle>
          <DrawerDescription className="pt-2 text-neutral-400 text-sm leading-relaxed">
            {description}
          </DrawerDescription>
        </DrawerHeader>

        {/* Campo de Motivação */}
        <div className="mb-4">
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Type your reason here..."
            rows={3}
            className="w-full rounded-md bg-neutral-800 border border-neutral-700 p-3 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400 resize-none"
          />
        </div>

        <DrawerFooter className="p-0 flex flex-col gap-2">
          <Button
            onClick={handleConfirm}
            className="bg-red-600 text-white hover:bg-red-700 font-medium"
          >
            Confirm Report
          </Button>
          <DrawerClose asChild>
            <Button
              variant="outline"
              onClick={handleCancel}
              className="border-neutral-700 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white"
            >
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ReportActions({
  onConfirm,
  onCancel,
  className,
}: {
  onConfirm: () => void
  onCancel: () => void
  className?: string
}) {
  return (
    <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end gap-2 pt-2", className)}>
      <Button
        variant="outline"
        onClick={onCancel}
        className="border-neutral-700 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white"
      >
        Cancel
      </Button>
      <Button
        onClick={onConfirm}
        className="bg-red-600 text-white hover:bg-red-700 font-medium"
      >
        Confirm Report
      </Button>
    </div>
  )
}