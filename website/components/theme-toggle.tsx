import * as React from "react"
import { Laptop, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import {
  Button
} from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export function ThemeToggle(props: any) {
  const { setTheme, theme } = useTheme()

  const setThemeClick = (theme: string) => {
    setTheme(theme);
    props.onMenuPopoverOpenUpdate(false);
  }
  return (    
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="px-2">
            <Sun className="h-5 w-5" />
            <span className="mx-1">|</span>
            <Moon className="h-5 w-5" />
            <span className="sr-only">Select theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setThemeClick("light")}> <Sun className="mr-2 h-4 w-4" /> Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeClick("dark")}> <Moon className="mr-2 h-4 w-4" /> Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeClick("system")}><Laptop className="mr-2 h-4 w-4" /> System</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>    
  )
}
