"use client"

import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "../components/ui/dialog"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../components/ui/drawer" 
import { useState } from "react"
import { useMediaQuery } from "../hooks/use-mobile"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

interface ChangeVisibilityModalProps {
  isPublic?: boolean
  onConfirm?: (newVisibility: boolean, password: string) => void
  trigger?: React.ReactNode 
}

export function ChangeVisibilityModal({
  isPublic,
  onConfirm,
  trigger,
}: ChangeVisibilityModalProps) {
  const [open, setOpen] = useState(false)
  const [password, setPassword] = useState("")
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm(!isPublic, password)
    }
    setPassword("")
    setOpen(false)
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        { trigger ? (
          <DialogTrigger asChild>{trigger}</DialogTrigger>
        ) : (
          <DialogTrigger asChild>
            <Button variant="outline">Change Visibility</Button>
          </DialogTrigger>
        ) }
        <DialogContent className="sm:max-w-[425px] bg-neutral-800 border-neutral-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-white text-lg font-semibold">
              Current Visibility: {isPublic ? "Public" : "Private"}
            </DialogTitle>
            <DialogDescription className="pt-2 text-neutral-400 text-sm leading-relaxed">
              {isPublic
                ? "You sure that want to change profile visibility? If you active private profile, just who is your friend can see you."
                : "You sure that want to change profile visibility? If you desactivite private profile, all users can see your profile."}
            </DialogDescription>
            <div className="flex flex-col gap-2 pt-4">
              <Label htmlFor="password">Confirm typing your password:</Label>
              <Input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="bg-neutral-900 border-neutral-700 text-white" />
            </div>
          </DialogHeader>
          <VisibilityActions onConfirm={handleConfirm} onCancel={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      { trigger ? (
        <DrawerTrigger asChild>{trigger}</DrawerTrigger> 
      ) : (
        <DrawerTrigger asChild> 
          <Button variant="outline">Change Visibility</Button>
        </DrawerTrigger>
      ) }
      <DrawerContent className="bg-neutral-800 border-neutral-800 text-white">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-white text-lg font-semibold">
            Current Visibility: {isPublic ? "Public" : "Private"}
          </DrawerTitle>
          <DrawerDescription className="pt-2 text-neutral-400 text-sm leading-relaxed">
            {isPublic
              ? "You sure that want to change profile visibility? If you active private profile, just who is your friend can see you."
              : "You sure that want to change profile visibility? If you desactivite private profile, all users can see your profile."}
          </DrawerDescription>
          <div className="flex flex-col gap-2 pt-4">
            <Label htmlFor="password">Confirm typing your password:</Label>
            <Input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="bg-neutral-900 border-neutral-700 text-white" />
          </div>
        </DrawerHeader>
        <DrawerFooter className="pt-2 flex flex-col gap-2">
          <Button 
            onClick={handleConfirm}
            className="bg-white text-black hover:bg-neutral-200 font-medium"
          >
            Confirm
          </Button>
          <DrawerClose asChild>
            <Button 
              variant="outline" 
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

function VisibilityActions({
  onConfirm,
  onCancel,
  className,
}: {
  onConfirm: () => void
  onCancel: () => void
  className?: string
}) {
  return (
    <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end gap-2 pt-4", className)}>
      <Button 
        variant="outline" 
        onClick={onCancel}
        className="border-neutral-700 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white"
      >
        Cancel
      </Button>
      <Button 
        onClick={onConfirm}
        className="bg-white text-black hover:bg-neutral-200 font-medium"
      >
        Confirm
      </Button>
    </div>
  )
}