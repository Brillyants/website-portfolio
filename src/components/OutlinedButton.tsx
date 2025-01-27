interface OutlinedButtonProps {
  text: string;
  url: string;
}

const OutlinedButton: React.FC<OutlinedButtonProps> = ({ text, url }) => {
  return (
    <div className="outlined-button">
      <a href={url} target="_blank">
        <button>{text}</button>
      </a>
    </div>
  );
};

export default OutlinedButton;
