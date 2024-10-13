import { Share } from 'lucide-react';

import { Button } from '@/components/ui/button';
import SidebarNav from '@/components/sidebar-nav';

interface Props {
  heading: string;
  children: React.ReactNode;
}

export default function AppLayout({ heading, children }: Props) {
  return (
    <div className='grid h-screen w-full pl-[56px]'>
      <SidebarNav />
      <div className='flex flex-col'>
        <header className='sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4'>
          <h1 className='text-xl font-semibold'>{heading}</h1>
          <Button
            variant='outline'
            size='sm'
            className='ml-auto gap-1.5 text-sm'
          >
            <Share className='size-3.5' />
            Share
          </Button>
        </header>
        {children}
      </div>
    </div>
  );
}
