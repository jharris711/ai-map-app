import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const description = 'An AI map app.';

export default function Root() {
  return (
    <div className='grid h-screen w-full bg-gray-100'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Landing Page
      </h1>
      <Link to='/map-assistant'>
        <Button>Go to AI Map</Button>
      </Link>
    </div>
  );
}
