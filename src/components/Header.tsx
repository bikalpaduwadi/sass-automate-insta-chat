import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <path d="M14 9a2 2 0 0 0-2-2H6" />
              <path d="M14 13a2 2 0 0 0-2-2H6" />
            </svg>
            <span className="font-bold text-xl">AutoChat</span>
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              <li>
                <Link href="/features" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Log in
            </Link>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

