import * as bcrypt from 'bcrypt';
const saltRounds = 10;

export async function EncryptionText(rawPassword: string): Promise<string> {
  return bcrypt.hashSync(rawPassword, saltRounds);
}

export async function DencryptionText(
  rawPassword: string,
  hash: string,
): Promise<boolean> {
  return await bcrypt
    .compare(rawPassword, hash)
    .then(function (result: boolean) {
      return result;
    });
}
