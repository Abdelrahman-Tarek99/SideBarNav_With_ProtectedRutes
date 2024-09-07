import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaNewspaper,
  FaFilm,
  FaFileAlt,
} from "react-icons/fa";

// Utility to map icon names to icon components
const iconMapper = {
  FaHome: <FaHome />,
  FaInfoCircle: <FaInfoCircle />,
  FaEnvelope: <FaEnvelope />,
  FaNewspaper: <FaNewspaper />,
  FaFilm: <FaFilm />,
  FaFileAlt: <FaFileAlt />,
};

export const getIconComponent = (iconName: string): JSX.Element => {
  return iconMapper[iconName as keyof typeof iconMapper];
};
