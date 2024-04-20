import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; ChatbotTensPy.com.  All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
