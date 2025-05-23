'use client';

import Link from 'next/link';
import clsx from 'clsx';

export interface GroupOption {
  teamId: string;
  updatedAt: string;
  createdAt: string;
  image: string | null;
  name: string;
  id: number;
}

interface DropDownGroupsItemProps {
  group: GroupOption;
  onClick?: () => void;
}

export default function DropDownGroupsItem({ group, onClick }: DropDownGroupsItemProps) {
  const { name, id, image } = group;

  return (
    <div
      onClick={onClick}
      className={clsx(
        'hover:bg-bg100',
        'flex w-[186px] cursor-pointer items-center justify-between',
        'rounded-lg px-2 py-[7px]'
      )}
    >
      <Link href={`/${id}`} className="flex items-center gap-3 text-white">
        <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-md bg-gray-600">
          {image ? (
            <img src={image} alt={`${name} 이미지`} className="h-full w-full object-cover" />
          ) : (
            <img src="/icons/team.svg" alt="기본 팀 아이콘" className="h-4 w-4" />
          )}
        </div>

        <p className="text-lg-md w-[110px] truncate">{name}</p>
      </Link>

      <Link href={`/${id}/edit`} className="shrink-0">
        <img src="/icons/kebab.svg" alt="팀 편집 아이콘" className="h-4 w-4" />
      </Link>
    </div>
  );
}
