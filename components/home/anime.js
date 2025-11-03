'use client';

import { useEffect, useState } from 'react';

export default function Anime() {
  const [Lottie, setLottie] = useState(null);

  useEffect(() => {
    let mounted = true;
    // SSR 단계에서 평가되지 않도록 런타임에만 로드
    import('react-lottie-player').then((m) => {
      if (mounted) setLottie(() => m.default);
    });
    return () => { mounted = false; };
  }, []);

  if (!Lottie) return null; // 필요하면 스피너/플레이스홀더 넣어도 OK

  // /public/animation_llfuvf1m.json 파일을 path로 로드 (번들/SSR 안전)
  return (
    <Lottie
      loop
      play
      path="/animation_llfuvf1m.json"
      style={{ width: 240, height: 240 }}
    />
  );
}
