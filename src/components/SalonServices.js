import React from 'react'

function SalonServices() {
  return (
    <section className="max-w-xl">
        <h2 className="text-center text-3xl py-4 text-red-800">Salon Services</h2>
        <ul className="max-w-6xl grid grid-cols-1 grid-rows-1 gap-2 text-center mx-auto">
        <div className="text-left">
        <div className="flex items-end">
        <h2 className="font-bold min-w-fit">Wash, Cut & Style</h2>
        <div className="h-px w-full mb-1 bg-neutral-400"></div>
        <p>$50.00+</p>
        </div>
        <p>Longer style haircuts with blowdry and styling.</p>
        </div>
        <div className="text-left">
        <div className="flex items-end">
        <h2 className="font-bold min-w-fit">Salon Cut - 13 & Under</h2>
        <div className="h-px w-full mb-1 bg-neutral-400"></div>
        <p>$31.00+</p>
        </div>
        <p>Longer style haircuts with quick blowdry and styling.</p>
        </div>
        <div className="text-left">
        <div className="flex items-end">
        <h2 className="font-bold min-w-fit">Bang Trim</h2>
        <div className="h-px w-full mb-1 bg-neutral-400"></div>
        <p>$22.00+</p>
        </div>
        </div>
        <div className="text-left">
        <div className="flex items-end">
        <h2 className="font-bold min-w-fit">Shampoo & Blowdry</h2>
        <div className="h-px w-full mb-1 bg-neutral-400"></div>
        <p>$40.00+</p>
        </div>
        <p>$1/min</p>
        </div>
        <div className="text-left">
        <div className="flex items-end">
        <h2 className="font-bold min-w-fit">Wash, Cut & Style - Curly Hair</h2>
        <div className="h-px w-full mb-1 bg-neutral-400"></div>
        <p>$60.00+</p>
        </div>
        <p>If your name is Eva this haircut is 100% free.</p>
        </div>
        <div className="text-left">
        <div className="flex items-end">
        <h2 className="font-bold min-w-fit">Dry Cut - Curly Hair</h2>
        <div className="h-px w-full mb-1 bg-neutral-400"></div>
        <p>$50.00+</p>
        </div>
        </div>
        </ul>
      </section>
  )
}

export default SalonServices