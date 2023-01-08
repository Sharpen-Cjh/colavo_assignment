type Props = {
  onClose: () => void;
};

const CloseIcon = (props: Props) => {
  return (
    <svg
      onClick={props.onClose}
      xmlns="http://www.w3.org/2000/svg"
      fill="rgb(114, 121, 128)"
      width="24"
      height="24"
      viewBox="0 0 72 72"
      cursor="pointer"
    >
      <path d="M62.034 9.653l.159.154a6.177 6.177 0 010 8.73L44.731 36l17.463 17.462a6.178 6.178 0 01.153 8.572l-.154.159a6.177 6.177 0 01-8.73 0L36 44.731 18.538 62.194a6.178 6.178 0 01-8.572.153l-.159-.154a6.177 6.177 0 010-8.73L27.269 36 9.806 18.538a6.178 6.178 0 01-.153-8.572l.154-.159a6.177 6.177 0 018.73 0L36 27.269 53.462 9.806a6.178 6.178 0 018.572-.153z"></path>
    </svg>
  );
};

export default CloseIcon;
