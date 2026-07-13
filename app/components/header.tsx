import { ShoppingBasketIcon } from "lucide-react"
import { NavLink, useLocation, useNavigate } from "react-router"
import { Button, buttonVariants } from "./ui/button"

import { cn } from "~/lib/utils"
import { Badge } from "./ui/badge"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu"

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
import { useSession } from "~/lib/auth-client"
import { useCart } from "~/stores/useCart"
import MobileMenu from "./mobile-menu"
import { Skeleton } from "./ui/skeleton"
import UserButton from "./user-button"

export default function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { data, isPending, isRefetching } = useSession()

  const { items } = useCart()

  // check the splat
  // /packages/*
  const isPackagesRoute = pathname.startsWith("/packages")

  return (
    <header
      className={
        "sticky top-0 left-0 z-50 mx-auto flex w-full max-w-(--breakpoint-xl) items-center justify-between bg-background px-4"
      }
    >
      <div className={"flex flex-col items-center justify-center py-2"}>
        <img src="/logo-idol.png" alt="logo" width={70} height={49} />
        <img src="/logo-txt.png" alt="logo" width={196} height={34} />
      </div>

      <nav className={"hidden items-center gap-4 md:flex"}>
        <NavigationMenu>
          <NavigationMenuList className={"gap-4"}>
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
                        <DropdownMenuLabel>Popular Packages</DropdownMenuLabel>
                        {packagesLink.map((pkg) => (
                          <DropdownMenuItem key={pkg.id} asChild>
                            <NavLink to={pkg.href} viewTransition>
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
                                  <NavLink to={pkg.href} viewTransition>
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
                    <NavLink to={link.href} viewTransition>
                      {link.label}
                    </NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <ul className={"flex items-center gap-3"}>
          {isPending || isRefetching ? (
            <li className={"mt-auto"}>
              <Skeleton
                className={buttonVariants({
                  size: "lg",
                  variant: "ghost",
                  className: "h-9 w-24",
                })}
              />
            </li>
          ) : !data ? (
            <li>
              <Button
                type="button"
                variant={"outline"}
                // size={"icon-sm"}
                className={"relative"}
                onClick={() =>
                  navigate("/login", {
                    viewTransition: true,
                    state: `123456`,
                  })
                }
              >
                Add to cart
                <ShoppingBasketIcon className={"size-4"} />
                <Badge
                  variant={"default"}
                  className={"absolute -top-2.5 -right-1.5 z-10 px-1 text-xs"}
                >
                  {items.length}
                </Badge>
              </Button>
            </li>
          ) : (
            <li>
              <Button
                type="button"
                variant={"outline"}
                // size={"icon-sm"}
                className={"relative"}
                onClick={() =>
                  navigate("/cart", {
                    viewTransition: true,
                    state: `123456`,
                  })
                }
              >
                Add to cart
                <ShoppingBasketIcon className={"size-4"} />
                <Badge
                  variant={"default"}
                  className={"absolute -top-2.5 -right-1.5 z-10 px-1 text-xs"}
                >
                  {items.length}
                </Badge>
              </Button>
            </li>
          )}

          {isPending || isRefetching ? (
            <li>
              <Skeleton
                className={buttonVariants({
                  size: "lg",
                  variant: "ghost",
                  className: "size-8",
                })}
              />
            </li>
          ) : !data ? null : (
            <li>
              <UserButton user={data.user} />
            </li>
          )}
        </ul>
      </nav>

      <div className={"block md:hidden"}>
        <MobileMenu />
      </div>
    </header>
  )
}
