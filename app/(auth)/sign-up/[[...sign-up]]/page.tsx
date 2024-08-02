import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import { LoaderPinwheel } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
	return (
		<div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
			<div className='h-full lg:flex flex-col items-center justify-center px-4'>
				<div className='text-center space-y-4 pt-16'>
					<h1 className='font-bold text-3xl text-muted-[#2e2a47]'>
						Welcome Back!
					</h1>
					<p className='text-base test-[#7e8ca0]'>
						Log in or Create account to get back to your dashboard!
					</p>
				</div>
				<div className='flex items-center justify-center mt-8'>
					<ClerkLoaded>
						<SignUp />
					</ClerkLoaded>
					<ClerkLoading>
						<LoaderPinwheel className='animate-spin text-muted-foreground'></LoaderPinwheel>
					</ClerkLoading>
				</div>
			</div>
			<div className='h-full bg-[#4F9E91] hidden lg:flex justify-center'>
				<Image
					className=''
					src='/logo.svg'
					height={300}
					width={300}
					alt='Logo'
				></Image>
			</div>
		</div>
	);
}
