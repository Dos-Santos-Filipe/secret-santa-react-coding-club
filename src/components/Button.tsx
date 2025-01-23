interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}
export const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>{children}</button>
  )
}
