'use client';
import { Heading } from '@/components/atoms/Heading';
import { UrlForm } from '@/components/molecules/UrlForm';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const UrlShortener = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loadingCounter, setLoadingCounter] = useState(0);

  const handleUrlFormSubmit = (url: string) => {
    let timeout: NodeJS.Timeout;
    setIsLoading(true);

    timeout = setTimeout(() => {
      setIsSuccess(true);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingCounter((prev) => (prev === 3 ? 0 : prev + 1));
      }, 700);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess) {
      router.push('/success');
    }
  }, [isSuccess, router]);

  return (
    <div className='flex flex-col gap-7'>
      {isLoading ? (
        <Heading>
          {`
          Shortening your URL
          ${new Array(loadingCounter)
            .fill(null)
            .map(() => '.')
            .join('')}
            `}
        </Heading>
      ) : (
        <>
          <Heading>Paste your URL</Heading>
          <UrlForm onSubmit={handleUrlFormSubmit} />
        </>
      )}
    </div>
  );
};
