import {
  Home as HomeIcon,
  User,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Wrench,
  MessageSquare,
} from "lucide-react";

export const TAG_COLORS = [
  // mauve
  "bg-[hsl(266_85%_58%/0.18)] text-[hsl(266_85%_28%)] border-[hsl(266_85%_42%/0.65)] dark:bg-[hsl(267_84%_81%/0.15)] dark:text-[hsl(267_84%_81%)] dark:border-[hsl(267_84%_81%/0.4)]",
  // sky / sapphire
  "bg-[hsl(197_97%_46%/0.18)] text-[hsl(197_97%_20%)] border-[hsl(197_97%_32%/0.65)] dark:bg-[hsl(189_71%_73%/0.15)] dark:text-[hsl(189_71%_73%)] dark:border-[hsl(189_71%_73%/0.4)]",
  // green
  "bg-[hsl(109_58%_40%/0.18)] text-[hsl(109_58%_18%)] border-[hsl(109_58%_28%/0.65)] dark:bg-[hsl(115_54%_76%/0.15)] dark:text-[hsl(115_54%_76%)] dark:border-[hsl(115_54%_76%/0.4)]",
  // pink
  "bg-[hsl(316_72%_50%/0.18)] text-[hsl(316_72%_26%)] border-[hsl(316_72%_38%/0.65)] dark:bg-[hsl(316_72%_86%/0.15)] dark:text-[hsl(316_72%_86%)] dark:border-[hsl(316_72%_86%/0.4)]",
  // yellow
  "bg-[hsl(35_77%_45%/0.2)] text-[hsl(35_90%_22%)] border-[hsl(35_77%_32%/0.65)] dark:bg-[hsl(41_86%_83%/0.15)] dark:text-[hsl(41_86%_83%)] dark:border-[hsl(41_86%_83%/0.4)]",
  // peach
  "bg-[hsl(22_99%_52%/0.18)] text-[hsl(22_99%_26%)] border-[hsl(22_99%_38%/0.65)] dark:bg-[hsl(23_92%_75%/0.15)] dark:text-[hsl(23_92%_75%)] dark:border-[hsl(23_92%_75%/0.4)]",
  // teal
  "bg-[hsl(183_74%_35%/0.18)] text-[hsl(183_74%_16%)] border-[hsl(183_74%_25%/0.65)] dark:bg-[hsl(170_57%_73%/0.15)] dark:text-[hsl(170_57%_73%)] dark:border-[hsl(170_57%_73%/0.4)]",
  // blue
  "bg-[hsl(220_91%_54%/0.18)] text-[hsl(220_91%_28%)] border-[hsl(220_91%_40%/0.65)] dark:bg-[hsl(217_92%_76%/0.15)] dark:text-[hsl(217_92%_76%)] dark:border-[hsl(217_92%_76%/0.4)]",
];

export const CAT_ACCENTS = [
  "text-[hsl(266_85%_42%)] dark:text-[hsl(267_84%_81%)]",
  "text-[hsl(197_97%_32%)] dark:text-[hsl(189_71%_73%)]",
  "text-[hsl(109_58%_28%)] dark:text-[hsl(115_54%_76%)]",
  "text-[hsl(22_99%_38%)] dark:text-[hsl(23_92%_75%)]",
];

export const NAV_ICONS: Record<string, typeof HomeIcon> = {
  home: HomeIcon,
  about: User,
  education: GraduationCap,
  experience: Briefcase,
  projects: FolderGit2,
  skills: Wrench,
  contact: MessageSquare,
};
