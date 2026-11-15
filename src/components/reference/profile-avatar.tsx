"use client";

import Image from "next/image";
import { useState } from "react";

export function ProfileAvatar({
  src,
  name,
  initials,
}: {
  src: string;
  name: string;
  initials: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="profile-avatar">
      {failed ? (
        <span role="img" aria-label={name}>
          {initials}
        </span>
      ) : (
        <div className="profile-avatar-crop">
          <Image
            src={src}
            alt={name}
            width={960}
            height={1280}
            sizes="192px"
            preload
            className="profile-photo"
            onError={() => setFailed(true)}
          />
        </div>
      )}
    </div>
  );
}
