type CheckoutButtonProps = {
  onCheckout: () => void;
};

export default function CheckoutButton({ onCheckout }: CheckoutButtonProps) {
  return (
    <button
      onClick={onCheckout}
      className="w-full mt-6 bg-[#64D98B] hover:bg-green-500 transition-all duration-300 text-[#081B29] font-bold py-5 rounded-2xl text-xl shadow-lg"
    >
      Complete Secure Payment →
    </button>
  );
}
