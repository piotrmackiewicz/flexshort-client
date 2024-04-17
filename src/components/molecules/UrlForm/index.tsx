'use client';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { FormEventHandler, useState } from 'react';

interface Props {
  onSubmit: (url: string) => void;
}

export const UrlForm = ({ onSubmit }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <Input
        name='url'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type='submit' className='bg-blue-500 text-white p-3 rounded-md'>
        Shorten
      </button>
    </form>
  );
};
