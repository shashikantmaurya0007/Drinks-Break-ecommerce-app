import { toast } from "react-toastify";

const loadScript = async (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};
export const displayRazorpay = async (
  totalMRP,
  navigate,
  clearCart,
  handlePaymentCelebaration
) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    toast.error("payment failed try later!");
    return;
  }

  const options = {
    key: "rzp_test_XuCEW4y13F7lJQ",
    amount: Number(totalMRP) * 100,
    currency: "INR",
    name: "Drinks Break",
    description: "You are one step closer to get your drink",
    image: `https://raw.githubusercontent.com/shashikantmaurya0007/Drinks-Break-ecommerce-app/dev/public/favicon.ico`,
    handler: async function (response) {
      toast.success("Payment is Successfull");
      navigate("/");
      handlePaymentCelebaration();
      clearCart();
    },

    theme: {
      color: "#66bb6a",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
