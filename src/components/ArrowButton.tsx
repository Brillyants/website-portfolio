import { ArrowRightCircle } from "react-bootstrap-icons";

interface ArrowButtonProps {
  text: string;
  url: string;
  className?: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ text, url, className }) => {
  return (
    <div className={`arrow-button ${className || ""}`}>
      <a href={url} target="_blank">
        <button>
          {text} <ArrowRightCircle size={25} />
        </button>
      </a>
    </div>
  );
};

export default ArrowButton;
