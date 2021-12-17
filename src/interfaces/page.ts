export interface PageProps {
  pageStates?: {
    loading: string;
    error: string;
    neutral: string;
  };
  setPageState?: React.Dispatch<React.SetStateAction<string>>;
}
