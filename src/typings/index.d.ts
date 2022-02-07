export interface User {
  id: string;
  uid: Number;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  invited: string[];
  invitedBy: string;
  invites: Invite[];
  verifiedAt: Date | null;
  verificationCode: string | null;
  discordId: string | null;
  discord: Discord;
  uploadKey: string | null;
  upload: UploadSettings;
  embeds: UserEmbed[];
}

interface Invite {
  code: string;
  createdBy: string;
  createdAt: Date;
  user?: User;
}

interface UserEmbed {
  id: string
  enabled: boolean
  title: string | null
  description: string | null
  color: string | null
  authorText: string | null
  authorUrl: string | null
  siteText: string | null
  siteUrl: string | null
  userId: string
}

interface UploadSettings {
  key: string;
  count: number;
  user?: User;
}

interface Discord {
  id: string;
  username: string;
  discriminator: string;
  tag: string;
  avatar: string;
  banner?: string;
  bannerColor?: string;
  createdAt: Date;
  nitroType: "NONE" | "CLASSIC" | "PREMIUM";
  user?: User;
}

interface loginState {
  username: string | null;
  password: string | null;
}

interface registerState {
  username: string | null;
  password: string | null;
  email: string | null;
  inviteCode: string | null;
}