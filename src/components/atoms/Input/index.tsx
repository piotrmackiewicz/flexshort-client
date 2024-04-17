interface Props {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ name, value, onChange }: Props) => {
  return (
    <input
      type='text'
      name={name}
      value={value}
      onChange={onChange}
      className='w-full p-3 border border-gray-300 rounded-md text-black'
    />
  );
};
