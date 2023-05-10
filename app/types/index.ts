import { User } from '@prisma/client'

export type SafeUser = Omit<
    User, 
    "createdAt" | "updatedAt" | "emailVerfified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
};

