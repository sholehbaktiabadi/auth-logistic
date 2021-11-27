export function parseMsisdn(msisdn: string) {
  const fisrt_phone_number: string = msisdn.charAt(0);
  const phone_number = fisrt_phone_number == '0' ? msisdn.substring(1) : msisdn;
  const parseMsisdn = '62' + phone_number;
  console.log({
    msisdn,
    fisrt_phone_number,
    phone_number,
    result: parseMsisdn,
  });
  return parseMsisdn;
}
