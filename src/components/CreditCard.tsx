import React from "react";

interface CreditCardProps {
  cardholderName: string;
  cardNumber: string;
  validUntil: string;
  cvv?: string;
  bankName: string;
  cardType: string;
}

export const CreditCard: React.FC<CreditCardProps> = ({
  cardholderName,
  cardNumber,
  validUntil,
  cvv = "***",
  bankName,
  cardType,
}) => {
  return (
    <div className="bg-[url('/card-background.webp')] bg-cover bg-center aspect-[16/9] rounded-2xl p-4 flex flex-col items-start justify-center">
      <div className="mb-2 text-white font-semibold">{cardholderName}</div>
      <div className="flex gap-2 text-white mb-2 items-center">
        <span className="tracking-widest text-lg font-mono">•••• {cardNumber}</span>
      </div>
      <div className="flex justify-between w-full mb-1">
        <span className="text-xs font-mono text-white opacity-80">Valid {validUntil}</span>
        <span className="text-xs font-mono text-white opacity-80">CVV {cvv}</span>
      </div>
      <div className="flex justify-between w-full mt-2 items-center">
        <span className="text-white font-medium text-xs">{bankName}</span>
        <span className="text-white font-bold text-xs">{cardType}</span>
      </div>
    </div>
  );
};
