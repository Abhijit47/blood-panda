import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: string) {
  return new Intl.NumberFormat("en-In", {
    currency: "inr",
    style: "currency",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(Number(value))
}

export function formattedDate(value: string) {
  return new Intl.DateTimeFormat("en-In", {
    dateStyle: "medium",
  }).format(Number(value))
}

export function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function formatSlug(params: string) {
  // some-text -> Some Text
  return params
    .split("-")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ")
}

export function formattedCategoryName(value: string) {
  // e.g. pregnancy_womens-health-tests
  // "_" remove it and use " ",
  // "-" remove it and use "&",
  // capitalize each word
  return value
    .replace(/_/g, " ")
    .replace(/-/g, " & ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

/**
 * find last item in array
 * ```const arr = [1,2,3,4];```
 * ```
 * arr.map((item,idx)=>{
    const isLastItem = arr.lastIndexOf(arr.length) === idx
    console.log({isLastItem});
    return item;
  }) 
 * ```
 */
