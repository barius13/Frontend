interface User {
  id: string;
  uid: Number;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  invited: string[];
  invitedBy: string;
  invites?: Invite[];
  verifiedAt: Date | null;
  verificationCode: string | null;
  discordId: string | null;
  discord?: Discord;
}

interface Invite {
  code: string;
  createdBy: string;
  createdAt: Date;
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
