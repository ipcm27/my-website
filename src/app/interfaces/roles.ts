export interface Role {
  id: number;
  company: string;
  title: string;
  time: string;
  text: string;
  keyAchievements?: string; // Optional because some roles don't have key achievements
}
