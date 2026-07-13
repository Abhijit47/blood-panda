import { IconLogout, IconMenu4 } from "@tabler/icons-react"
import { ShoppingBasketIcon } from "lucide-react"
import { useState } from "react"
import { Link, NavLink, useLocation, useNavigate } from "react-router"

import { Button, buttonVariants } from "~/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"

import { cn } from "~/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu"

import { toast } from "sonner"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { miniPackagesLink, navLinks, packagesLink } from "~/constants"
import { signOut, useSession } from "~/lib/auth-client"
import { useCart } from "~/stores/useCart"
import { ModeToggle } from "./mode-toggle"
import { Badge } from "./ui/badge"
import { Skeleton } from "./ui/skeleton"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { items } = useCart()

  const { data, isPending, isRefetching } = useSession()

  // check the splat
  // /packages/*
  const isPackagesRoute = pathname.startsWith("/packages")

  function handleClose() {
    setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  function handleSignOut() {
    toast.promise(signOut(), {
      loading: "Signing out...",
      success: ({ data }) => {
        if (data?.success) {
          setTimeout(() => {
            navigate("/", {
              viewTransition: true,
              replace: true,
              state: { from: window.location.pathname },
            })
          }, 1200)
        }
        return "Signed out successfully"
      },
      error: (err) => {
        return err.message || "Error signing out"
      },
    })
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <IconMenu4 className={"size-4"} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className={"flex flex-col items-center justify-center py-2"}>
              <img src="/logo-idol.png" alt="logo" width={70} height={49} />
              <img src="/logo-txt.png" alt="logo" width={196} height={34} />
            </div>
          </SheetTitle>
          <SheetDescription className={"sr-only"}>&nbsp;</SheetDescription>
        </SheetHeader>
        <div className={"grid grid-cols-1 gap-4 px-4 py-2"}>
          <div>
            <NavigationMenu>
              <NavigationMenuList className={"flex-col items-start gap-2"}>
                {navLinks.map((link) => {
                  if (link.href === "/packages") {
                    return (
                      <DropdownMenu key={link.id}>
                        <DropdownMenuTrigger asChild>
                          <NavigationMenuLink
                            active={isPackagesRoute}
                            asChild
                            className={cn(
                              "hover:bg-transparent focus:bg-transparent",
                              "p-1",
                              "rounded-none",
                              "border-primary",
                              "data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent",
                              "data-active:border-b-2 data-active:hover:border-b-2 data-active:focus:border-b-2"
                            )}
                          >
                            <NavLink to={link.href} viewTransition>
                              {link.label}
                            </NavLink>
                          </NavigationMenuLink>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuGroup>
                            <DropdownMenuLabel>Our Packages</DropdownMenuLabel>
                            {packagesLink.map((pkg) => (
                              <DropdownMenuItem key={pkg.id} asChild>
                                <NavLink
                                  to={pkg.href}
                                  viewTransition
                                  onClick={handleClose}
                                >
                                  {pkg.label}
                                </NavLink>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuGroup>
                          <DropdownMenuSeparator />
                          <DropdownMenuGroup>
                            <DropdownMenuLabel>Mini Packages</DropdownMenuLabel>
                            <DropdownMenuSub>
                              <DropdownMenuSubTrigger>
                                Explore...
                              </DropdownMenuSubTrigger>
                              <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                  {miniPackagesLink.map((pkg) => (
                                    <DropdownMenuItem key={pkg.id} asChild>
                                      <NavLink
                                        to={pkg.href}
                                        viewTransition
                                        onClick={handleClose}
                                      >
                                        {pkg.label}
                                      </NavLink>
                                    </DropdownMenuItem>
                                  ))}
                                </DropdownMenuSubContent>
                              </DropdownMenuPortal>
                            </DropdownMenuSub>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )
                  }

                  return (
                    <NavigationMenuItem key={link.id}>
                      <NavigationMenuLink
                        active={link.href === pathname}
                        asChild
                        className={cn(
                          "hover:bg-transparent focus:bg-transparent",
                          "p-1",
                          "rounded-none",
                          "border-primary",
                          "data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent",
                          "data-active:border-b-2 data-active:hover:border-b-2 data-active:focus:border-b-2"
                        )}
                      >
                        <NavLink
                          to={link.href}
                          viewTransition
                          onClick={handleClose}
                        >
                          {link.label}
                        </NavLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div>
            <p className={"text-sm font-semibold"}>Contact the owner:</p>
            <address>
              <p className={"text-sm"}>
                123 Main Street, Suite 456
                <br />
                Cityville, ST 12345
                <br />
                Phone: (123) 456-7890
                <br />
                Email:{" "}
                <a href="mailto:someone@email.com" className={"text-primary"}>
                  Email us
                </a>
              </p>
            </address>
          </div>
        </div>

        <SheetFooter>
          <ul className={"flex items-center gap-3 self-end"}>
            {isPending || isRefetching ? (
              <li className={"mt-auto"}>
                <Skeleton
                  className={buttonVariants({
                    size: "lg",
                    variant: "ghost",
                    className: "size-8 rounded-full",
                  })}
                />
              </li>
            ) : !data ? (
              <li>
                <Button
                  type="button"
                  variant={"outline"}
                  size={"icon-sm"}
                  asChild
                  className={"relative"}
                >
                  <NavLink to="/login" viewTransition>
                    <ShoppingBasketIcon className={"size-4"} />
                    <Badge
                      variant={"destructive"}
                      className={"absolute -top-2.5 -right-1.5 px-0.5 text-xs"}
                    >
                      {items.length}
                    </Badge>
                  </NavLink>
                </Button>
              </li>
            ) : (
              <li>
                <Button
                  type="button"
                  variant={"outline"}
                  size={"icon-sm"}
                  asChild
                  className={"relative"}
                >
                  <NavLink to="/cart" viewTransition>
                    <ShoppingBasketIcon className={"size-4"} />
                    <Badge
                      variant={"destructive"}
                      className={"absolute -top-2.5 -right-1.5 px-0.5 text-xs"}
                    >
                      {items.length}
                    </Badge>
                  </NavLink>
                </Button>
              </li>
            )}

            <li>
              <ModeToggle />
            </li>
          </ul>
          {isPending || isRefetching ? (
            <Skeleton
              className={buttonVariants({
                // size: "lg",
                variant: "ghost",
              })}
            />
          ) : !data ? (
            <Button asChild>
              <Link to="/login" viewTransition>
                Login
              </Link>
            </Button>
          ) : (
            <Button type="button" onClick={handleSignOut}>
              LogOut <IconLogout className={"size-4"} />
            </Button>
          )}

          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
