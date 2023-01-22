export interface QuestionInterface {
  question: string;
  answer: boolean | string;
  img: string;
  info?: string;
  variants?: string[];
}