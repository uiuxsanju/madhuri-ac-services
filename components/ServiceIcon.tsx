import { ICONS, type IconName } from "@/lib/icons";

type Props = { name: IconName; className?: string; strokeWidth?: number };

export default function ServiceIcon({ name, className = "h-6 w-6", strokeWidth = 2 }: Props) {
  const Icon = ICONS[name];
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
