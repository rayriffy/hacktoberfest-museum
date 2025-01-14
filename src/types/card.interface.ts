import { Founders } from "../enums/founders.enum";
import { AcademicTopics } from "../enums/topics.enum";

export interface DetailedPageProps {
  inspiredBy?: string;
  keywords: string[];
  descriptionMarkdown: string;
  contributingMarkdown?: string;
}

export interface CardProps {
  display: "light" | "dark";
  title: string;
  theme: "playful" | "mindful";
  founderName: Founders;
  topic: AcademicTopics;
  githubUrl: string;
  imagePath: string | undefined;
  detail?: DetailedPageProps;
}
