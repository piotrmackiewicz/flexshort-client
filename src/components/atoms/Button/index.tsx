interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className='bg-blue-500 text-white p-3 rounded-md'>
      {children}
    </button>
  );
};
