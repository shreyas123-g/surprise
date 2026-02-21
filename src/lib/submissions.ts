export interface SubmissionEntry {
  id: string;
  timestamp: string;
  name: string;
  loveChoice: string;
  loveMessage: string;
  reactionChoice: string;
}

const STORAGE_KEY = "proposal_submissions";

export const saveSubmission = (entry: SubmissionEntry) => {
  const existing = getSubmissions();
  existing.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
};

export const getSubmissions = (): SubmissionEntry[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const clearSubmissions = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const createEmptyEntry = (): SubmissionEntry => ({
  id: Date.now().toString(),
  timestamp: new Date().toLocaleString(),
  name: "",
  loveChoice: "",
  loveMessage: "",
  reactionChoice: "",
});
