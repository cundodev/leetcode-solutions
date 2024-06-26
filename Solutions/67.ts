function addBinary(a: string, b: string): string {
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)
}

addBinary('11', '1') // '100'
addBinary('1010', '1011') // '10101'

//BigInt
//0n -> huge
//0x -> hugeHex
//0o -> hugeOctal
//0b -> hugeBin
