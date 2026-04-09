export function formatCurrency(amount, currency) {
  if (currency === "KZT") return `${amount} ₸`;
  else if (currency === "EGP") return `${amount} E£`;
  else if (currency === "SAR") return `${amount} ر.س`;
  else if (currency === "SDG") return `${amount} ج.س`;
  
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
  }).format(amount);
}