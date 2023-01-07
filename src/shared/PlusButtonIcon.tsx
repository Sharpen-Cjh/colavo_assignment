interface PlusButtonProps {
  width: number;
  height: number;
  fill: string;
}

const PlusButtonIcon = ({ width, height, fill }: PlusButtonProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    width={width}
    height={height}
    viewBox="0 0 72 72"
  >
    <path d="M36 0c19.882 0 36 16.118 36 36S55.882 72 36 72 0 55.882 0 36 16.118 0 36 0zm0 18l-.176.005A3.006 3.006 0 0033 21.007V33H21.007a3.004 3.004 0 00-3.002 2.824L18 36c0 1.653 1.346 3 3.007 3H33v11.993a3.004 3.004 0 002.824 3.002L36 54c1.653 0 3-1.346 3-3.007V39h11.993a3.004 3.004 0 003.002-2.824L54 36l-.005-.176A3.006 3.006 0 0050.993 33H39V21.007a3.004 3.004 0 00-2.824-3.002L36 18z"></path>
  </svg>
);

export default PlusButtonIcon;
