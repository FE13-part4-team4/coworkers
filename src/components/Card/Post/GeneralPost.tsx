'use client';

import PostCard from './PostCard';
import { useWindowSize } from '@/hooks/useWindowSize';
import { GeneralPostProps } from '../CardType';

export function GeneralPost({ id, title, image, createdAt, likeCount, writer }: GeneralPostProps) {
  const windowWidth = useWindowSize();

  let size: 'large' | 'medium' | 'small' = 'large';
  if (windowWidth <= 375) size = 'small';
  else if (windowWidth <= 744) size = 'medium';

  return (
    <div className="w-full">
      <PostCard
        type="general"
        size={size}
        id={id}
        title={title}
        image={image}
        date={createdAt}
        showKebab={size === 'small'}
        topshowKebab={size !== 'small'}
        writer={writer}
        likeCount={likeCount}
      />
    </div>
  );
}
