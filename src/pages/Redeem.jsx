// pages/Redeem.jsx
import React, { useState } from "react";
import SectionTitle from "../components/UI/SectionTitle";
import Button from "../components/UI/Button";

const Redeem = () => {
  const [activeTab, setActiveTab] = useState("redeem");
  const [giftCardData, setGiftCardData] = useState({
    code: "",
    pin: "",
  });
  const [purchaseData, setPurchaseData] = useState({
    amount: "",
    recipientName: "",
    recipientEmail: "",
    message: "",
  });

  const handleGiftCardChange = (e) => {
    setGiftCardData({
      ...giftCardData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePurchaseChange = (e) => {
    setPurchaseData({
      ...purchaseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRedeem = (e) => {
    e.preventDefault();
    // Handle gift card redemption
    console.log("Redeeming gift card:", giftCardData);
    alert("Gift card redeemed successfully!");
    setGiftCardData({ code: "", pin: "" });
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    // Handle gift card purchase
    console.log("Purchasing gift card:", purchaseData);
    alert("Gift card purchased successfully!");
    setPurchaseData({
      amount: "",
      recipientName: "",
      recipientEmail: "",
      message: "",
    });
  };

  const checkBalance = () => {
    // Handle balance check
    alert("Balance check functionality would be implemented here");
  };

  const giftCardAmounts = [25, 50, 75, 100, 150, 200];

  return (
    <div className="min-h-screen py-12 bg-gradient-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Gift Cards"
          subtitle="The perfect gift for any occasion - share the joy of delicious baked goods"
          className="mb-12"
        />

        {/* Tab Navigation */}
        <div className="flex border-b border-secondary-200 mb-8">
          <button
            onClick={() => setActiveTab("redeem")}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors duration-200 ${
              activeTab === "redeem"
                ? "border-custom-orange text-custom-orange"
                : "border-transparent text-secondary-500 hover:text-secondary-700"
            }`}
          >
            Redeem Gift Card
          </button>
          <button
            onClick={() => setActiveTab("purchase")}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors duration-200 ${
              activeTab === "purchase"
                ? "border-custom-orange text-custom-orange"
                : "border-transparent text-secondary-500 hover:text-secondary-700"
            }`}
          >
            Purchase Gift Card
          </button>
          <button
            onClick={() => setActiveTab("balance")}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors duration-200 ${
              activeTab === "balance"
                ? "border-custom-orange text-custom-orange"
                : "border-transparent text-secondary-500 hover:text-secondary-700"
            }`}
          >
            Check Balance
          </button>
        </div>

        {/* Redeem Gift Card */}
        {activeTab === "redeem" && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-2">
                Redeem Your Gift Card
              </h3>
              <p className="text-secondary-600">
                Enter your gift card code and PIN to redeem your balance
              </p>
            </div>

            <form
              onSubmit={handleRedeem}
              className="max-w-md mx-auto space-y-6"
            >
              <div>
                <label
                  htmlFor="code"
                  className="block text-sm font-medium text-secondary-700 mb-2"
                >
                  Gift Card Code *
                </label>
                <input
                  type="text"
                  id="code"
                  name="code"
                  value={giftCardData.code}
                  onChange={handleGiftCardChange}
                  required
                  className="form-input"
                  placeholder="Enter 16-digit code"
                />
              </div>

              <div>
                <label
                  htmlFor="pin"
                  className="block text-sm font-medium text-secondary-700 mb-2"
                >
                  PIN *
                </label>
                <input
                  type="text"
                  id="pin"
                  name="pin"
                  value={giftCardData.pin}
                  onChange={handleGiftCardChange}
                  required
                  className="form-input"
                  placeholder="Enter 4-digit PIN"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="large"
                className="w-full"
              >
                Redeem Gift Card
              </Button>
            </form>

            <div className="mt-8 p-4 bg-primary-50 rounded-lg">
              <h4 className="font-semibold text-secondary-800 mb-2">
                Need Help?
              </h4>
              <p className="text-sm text-secondary-700">
                If you're having trouble redeeming your gift card, please
                contact us at
                <a
                  href="mailto:giftcards@slicebliss.com"
                  className="text-custom-orange underline ml-1"
                >
                  giftcards@slicebliss.com
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Purchase Gift Card */}
        {activeTab === "purchase" && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-2">
                Purchase a Gift Card
              </h3>
              <p className="text-secondary-600">
                Send the gift of delicious baked goods to someone special
              </p>
            </div>

            <form
              onSubmit={handlePurchase}
              className="max-w-2xl mx-auto space-y-6"
            >
              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-4">
                  Select Amount *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {giftCardAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() =>
                        setPurchaseData({ ...purchaseData, amount })
                      }
                      className={`p-4 border-2 rounded-lg text-center transition-colors duration-200 ${
                        purchaseData.amount === amount
                          ? "border-custom-orange bg-primary-50 text-custom-orange"
                          : "border-secondary-200 hover:border-custom-orange"
                      }`}
                    >
                      <div className="font-bold text-lg">${amount}</div>
                    </button>
                  ))}
                  <div className="p-4 border-2 border-secondary-200 rounded-lg">
                    <input
                      type="number"
                      placeholder="Custom"
                      min="10"
                      max="500"
                      className="w-full text-center border-none focus:ring-0 p-0"
                      value={
                        purchaseData.amount === "" ? "" : purchaseData.amount
                      }
                      onChange={(e) =>
                        setPurchaseData({
                          ...purchaseData,
                          amount: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="recipientName"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Recipient Name *
                  </label>
                  <input
                    type="text"
                    id="recipientName"
                    name="recipientName"
                    value={purchaseData.recipientName}
                    onChange={handlePurchaseChange}
                    required
                    className="form-input"
                    placeholder="Recipient's full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="recipientEmail"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Recipient Email *
                  </label>
                  <input
                    type="email"
                    id="recipientEmail"
                    name="recipientEmail"
                    value={purchaseData.recipientEmail}
                    onChange={handlePurchaseChange}
                    required
                    className="form-input"
                    placeholder="recipient@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-secondary-700 mb-2"
                >
                  Personal Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={purchaseData.message}
                  onChange={handlePurchaseChange}
                  rows={4}
                  className="form-input"
                  placeholder="Add a personal message for the recipient..."
                />
              </div>

              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-secondary-700">Gift Card Amount:</span>
                  <span className="font-semibold">
                    ${purchaseData.amount || "0"}
                  </span>
                </div>
                <div className="flex justify-between items-center font-bold text-lg">
                  <span>Total:</span>
                  <span className="text-custom-orange">
                    ${purchaseData.amount || "0"}
                  </span>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="large"
                className="w-full"
                disabled={
                  !purchaseData.amount ||
                  !purchaseData.recipientName ||
                  !purchaseData.recipientEmail
                }
              >
                Purchase Gift Card - ${purchaseData.amount || "0"}
              </Button>
            </form>
          </div>
        )}

        {/* Check Balance */}
        {activeTab === "balance" && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-2">
                Check Gift Card Balance
              </h3>
              <p className="text-secondary-600">
                Enter your gift card details to check the remaining balance
              </p>
            </div>

            <div className="max-w-md mx-auto space-y-6">
              <div>
                <label
                  htmlFor="balanceCode"
                  className="block text-sm font-medium text-secondary-700 mb-2"
                >
                  Gift Card Code *
                </label>
                <input
                  type="text"
                  id="balanceCode"
                  className="form-input"
                  placeholder="Enter 16-digit code"
                />
              </div>

              <div>
                <label
                  htmlFor="balancePin"
                  className="block text-sm font-medium text-secondary-700 mb-2"
                >
                  PIN *
                </label>
                <input
                  type="text"
                  id="balancePin"
                  className="form-input"
                  placeholder="Enter 4-digit PIN"
                />
              </div>

              <Button
                onClick={checkBalance}
                variant="primary"
                size="large"
                className="w-full"
              >
                Check Balance
              </Button>
            </div>

            <div className="mt-8 text-center text-secondary-600">
              <p>Don't have your gift card handy?</p>
              <p className="text-sm">
                Visit our bakery or contact us at{" "}
                <a
                  href="mailto:giftcards@slicebliss.com"
                  className="text-custom-orange hover:text-primary-600"
                >
                  giftcards@slicebliss.com
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Gift Card Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="text-3xl mb-4">🎂</div>
            <h4 className="font-semibold text-secondary-800 mb-2">
              Perfect for Any Occasion
            </h4>
            <p className="text-secondary-600 text-sm">
              Birthdays, holidays, thank yous, or just because - our gift cards
              are always appreciated.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl mb-4">⚡</div>
            <h4 className="font-semibold text-secondary-800 mb-2">
              Instant Delivery
            </h4>
            <p className="text-secondary-600 text-sm">
              E-gift cards delivered immediately via email. Physical cards
              available in-store.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl mb-4">∞</div>
            <h4 className="font-semibold text-secondary-800 mb-2">
              Never Expires
            </h4>
            <p className="text-secondary-600 text-sm">
              No expiration dates or fees. Your gift card is valid until the
              balance is used.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redeem;
