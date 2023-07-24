'use client'
import { ClassNameValue } from 'tailwind-merge';
import { clsxm } from '@/utils/clsxm';
import * as Icons from '../../assets/icons';

type IconName = 'check' | 'syncCloud';

interface IconProps {
  name: IconName;
  size?: number;
  className?: ClassNameValue;
}

export const CustomIcon: React.FC<IconProps> = ({ className, name, size = 24 }) => {

  const IconComponent = Icons[name];

  const customClass = clsxm(
    "fill-gray-700",
    className,
  )

  return IconComponent && <IconComponent className={customClass} width={size} height={size} />;
}