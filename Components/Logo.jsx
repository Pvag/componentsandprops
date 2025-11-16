'use client'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className="my-6">
      <Image
        src="/img/effettoweb-logo.png"
        alt="Logo EffettoWeb"
        width={250}
        height={250}
      />
    </div>
  )
}

export default Logo
