import { z } from 'zod';
const AuthSchema = z.object({
  phoneNumber: z.string().length(11).regex(/^\d+$/),
});

export type AuthPayloadType = z.infer<typeof AuthSchema>;
export default AuthSchema;
