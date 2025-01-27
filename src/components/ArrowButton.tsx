import { ArrowRightCircle } from "react-bootstrap-icons";

interface ArrowButtonProps {
  text: string;
  url: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ text, url }) => {
  return (
    <div className="arrow-button">
      <a href={url} target="_blank">
        <button>
          {text} <ArrowRightCircle size={25} />
        </button>
      </a>
    </div>
  );
};

export default ArrowButton;
