export const shortenNumber = (num: number, fractionDigits?: number): string => {
  const numAbs: number = Math.abs(num);
  const abbreviations: { value: number, symbol: string }[] = [
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "B" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "K" },
  ];

  for (let i = 0; i < abbreviations.length; i++) {
    if (numAbs >= abbreviations[i].value) {
      return (num / abbreviations[i].value).toFixed(fractionDigits || 1) + abbreviations[i].symbol;
    }
  }

  return num.toString();
};
