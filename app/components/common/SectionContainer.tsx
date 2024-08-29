import { FaCode } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
interface SectionContainerProps {
  children: React.ReactNode;
  title: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  title,
}: SectionContainerProps) => {
  return (
    <div className="flex flex-col items-center min-h-full">
      <h2 className="text-2xl p-6 flex items-center gap-2 w-full max-w-6xl mx-auto sm:mx-0 justify-center sm:justify-start">
        {title === "ブログ記事一覧" ? <FaPencilAlt /> : <FaCode />}
        {title}
      </h2>
      {children}
    </div>
  );
};

export default SectionContainer;
