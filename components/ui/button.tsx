"use client"

import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
}

export function Button({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {

  const base =
    "inline-flex items-center justify-center rounded-md font-semibold transition-all focus:outline-none"

  const variants = {
    default: "bg-cyan-500 text-black hover:bg-cyan-400",
    outline: "border border-cyan-400 text-cyan-300 hover:bg-cyan-500/20",
    ghost: "text-cyan-300 hover:bg-cyan-500/10",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
