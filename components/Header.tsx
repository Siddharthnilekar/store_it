import React from 'react'
import {Button } from "@/components/ui/button"
import Image from 'next/image'
import Search from './Search'
import FileUploader from './FileUploader'
import { signOutUser } from '@/lib/actions/user.actions'

const Header = () => {
  return (
    <header className='header'>
      <Search/>
      <div className="header-wrepper">
        <FileUploader/>

        <form action={async () => {
         "use server";
          await signOutUser();
        }}>
            <Button type='submit' className='sign-out-button'>
                <Image src="/assets/icons/logout.svg" alt='logo' width={24} height={24} className='w-6'></Image>
            </Button>
        </form>
      </div>
    </header>
  )
}

export default Header
