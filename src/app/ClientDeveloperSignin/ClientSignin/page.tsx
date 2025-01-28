"use client"

import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"

const ClientSignin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
      {/* Centered Heading */}
      <h1 className="text-4xl font-semibold text-center mb-6 text-black">Welcome to LumioAI</h1>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Sign in form */}
        <div className="w-full max-w-md">
          <div className="bg-[#F8F7FF] rounded-lg p-8">
            <h2 className="text-2xl font-medium mb-6 text-black">Sign in</h2>

            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-black">
                  Email
                </label>
                <input id="email" type="email" className="w-full p-2 border rounded-md" required />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm mb-2 text-black">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full p-2 border rounded-md pr-10 text-black"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  className="bg-blue-100 hover:bg-blue-200 text-blue-900 px-8 py-2 rounded-md transition-colors"
                >
                  Sign in
                </button>
                <Link href="/forgot-password" className="text-sm text-black hover:underline">
                  Forgot password?
                </Link>
              </div>
            </form>

            <div className="mt-8 text-center text-sm text-black">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Start here
              </Link>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="hidden lg:block w-full max-w-xl">
          <Image
            src={"/assets/signin.png"}  
            alt="People collaborating on a dashboard"
            width={500}
            height={450}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default ClientSignin;