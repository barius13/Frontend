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
      embeds: [];
    };
  };
  invite: {
    count: number;
    invited: string[];
    invitedBy: string;
  };
}
