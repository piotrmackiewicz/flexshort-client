'use client';
import { Button } from '@/components/atoms/Button';
import { Heading } from '@/components/atoms/Heading';
import { useRouter } from 'next/navigation';

export const UrlShortenerSuccess = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/');
  };

  return (
    <div className='flex flex-col gap-7'>
      <Heading>Here is your shortened URL</Heading>
      <p className='text-center'>URLURLURLURLURL</p>
      <div className='flex justify-center gap-4'>
        <Button>Copy</Button>
        <Button onClick={handleGoBack}>Go Back</Button>
      </div>
    </div>
  );
};
