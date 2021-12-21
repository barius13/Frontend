export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  verifiedAt: Date;
  verified: boolean;
  verificationCode?: string;
  upload: {
    count: number;
    key: string;
    settings: {
      embeds: Embed[];
    };
  };
  invite: {
    count: number;
    invited: string[];
    invitedBy: string;
  };
  discord: {
    id: string | null;
    username: string | null;
    tag: string | null;
    discriminator: string | null;
    avatar: string | null;
    banner: string | null;
    bannerColor: string | null;
    nitroType: 'classic' | 'nitro' | null;
  };
}

interface Embed {
  color: string;
  title: string;
  description: string;
  author: {
    text: string;
    url: string;
  };
  site: {
    text: string;
    url: string;
  };
}
