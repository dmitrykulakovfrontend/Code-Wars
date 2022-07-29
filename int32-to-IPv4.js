/*
  Take the following IPv4 address: 128.32.10.1

  This address has 4 octets where each octet is a single byte (or 8 bits).

  1st octet 128 has the binary representation: 10000000
  2nd octet 32 has the binary representation: 00100000
  3rd octet 10 has the binary representation: 00001010
  4th octet 1 has the binary representation: 00000001
  So 128.32.10.1 == 10000000.00100000.00001010.00000001

  Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

  Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

  Examples
  2149583361 ==> "128.32.10.1"
  32         ==> "0.0.0.32"
  0          ==> "0.0.0.0"
*/

// Answer:

function int32ToIp(int32) {
  let binary = int32.toString(2);
  int32 =
    binary.length === 32
      ? binary
      : "0".repeat(32 - binary.length).concat(binary);
  return int32
    .toString(2)
    .match(/.{1,8}/g)
    .reduce(
      (acc, num, i, arr) => {
        num = parseInt(String(num), 2);
        arr.length < 4 ? (acc[3 - i] = num) : (acc[i] = num);
        return acc;
      },
      [0, 0, 0, 0]
    )
    .join(".");
}
// BigO: O(n)
