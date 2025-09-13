"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900 text-white">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold tracking-tight">404</h1>
          <p className="text-xl font-mono">
            <span className="text-fuchsia-400">Oops!</span> The page you&apos;re looking for got lost in the code...
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="/">
              <Button variant="default" className="shadow-lg">
                Go Home
              </Button>
            </Link>
            <Button
              variant="outline"
              className="shadow-lg"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </div>
          <div className="mt-8 text-sm text-fuchsia-300 animate-bounce">
            <span role="img" aria-label="emoji">👾</span> 
            Maybe the page is hiding in another dimension...
          </div>
        </div>
    </div>
  )
}