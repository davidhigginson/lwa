"use client";

import { useState } from "react";
import { Heart, CreditCard, Calendar, Gift, CheckCircle2, ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface DonationFormProps {
  defaultType?: "single" | "monthly";
  presetAmount?: number;
}

const suggestedAmounts = [10, 25, 50, 100, 250, 500];

export function DonationForm({ defaultType = "single", presetAmount }: DonationFormProps) {
  const [donationType, setDonationType] = useState<"single" | "monthly">(defaultType);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(presetAmount || null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [giftAid, setGiftAid] = useState(false);
  const [step, setStep] = useState(1);

  // Form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    city: "",
    postcode: "",
    country: "United Kingdom",
  });

  const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
  const giftAidBonus = giftAid && amount ? amount * 0.25 : 0;
  const totalImpact = amount ? amount + giftAidBonus : 0;

  const handleAmountSelect = (value: number) => {
    setSelectedAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would integrate with Stripe or another payment processor
    alert(`Thank you for your ${donationType} donation of £${amount}! This is a demo - in production, this would process your payment securely.`);
  };

  const canProceed = amount && amount >= 1;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-white text-center">
          <Heart className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl font-heading mb-2">Quick Donate</h2>
          <p className="text-primary-100">Your generosity changes lives</p>
        </div>

        {/* Progress Steps */}
        <div className="flex border-b border-neutral-100">
          {[
            { num: 1, label: "Amount" },
            { num: 2, label: "Details" },
            { num: 3, label: "Payment" },
          ].map((s) => (
            <button
              key={s.num}
              onClick={() => s.num < step && setStep(s.num)}
              className={cn(
                "flex-1 py-4 text-center text-sm font-medium transition-colors relative",
                step >= s.num ? "text-primary-600" : "text-neutral-400",
                s.num < step && "cursor-pointer hover:bg-neutral-50"
              )}
            >
              <span className={cn(
                "inline-flex items-center justify-center w-6 h-6 rounded-full text-xs mr-2",
                step > s.num ? "bg-primary-600 text-white" : step === s.num ? "bg-primary-100 text-primary-600" : "bg-neutral-100 text-neutral-400"
              )}>
                {step > s.num ? <CheckCircle2 className="w-4 h-4" /> : s.num}
              </span>
              {s.label}
              {step === s.num && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600" />
              )}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Amount Selection */}
          {step === 1 && (
            <div className="p-8 space-y-8">
              {/* Donation Type Toggle */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Donation Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setDonationType("single")}
                    className={cn(
                      "flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all",
                      donationType === "single"
                        ? "border-primary-500 bg-primary-50 text-primary-700"
                        : "border-neutral-200 hover:border-neutral-300"
                    )}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span className="font-medium">One-time</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType("monthly")}
                    className={cn(
                      "flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all",
                      donationType === "monthly"
                        ? "border-primary-500 bg-primary-50 text-primary-700"
                        : "border-neutral-200 hover:border-neutral-300"
                    )}
                  >
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">Monthly</span>
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Select Amount
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {suggestedAmounts.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => handleAmountSelect(value)}
                      className={cn(
                        "p-4 rounded-xl border-2 font-heading text-xl transition-all",
                        selectedAmount === value
                          ? "border-primary-500 bg-primary-50 text-primary-700"
                          : "border-neutral-200 hover:border-neutral-300 text-neutral-700"
                      )}
                    >
                      £{value}
                    </button>
                  ))}
                </div>
                
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-lg">£</span>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    placeholder="Enter custom amount"
                    className="w-full pl-8 pr-4 py-4 border-2 border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-0 text-lg transition-colors"
                  />
                </div>
              </div>

              {/* Gift Aid */}
              <div className="bg-secondary-50 rounded-xl p-6 border border-secondary-100">
                <label className="flex items-start gap-4 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={giftAid}
                    onChange={(e) => setGiftAid(e.target.checked)}
                    className="mt-1 w-5 h-5 text-secondary-600 border-neutral-300 rounded focus:ring-secondary-500"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Gift className="w-5 h-5 text-secondary-600" />
                      <span className="font-medium text-neutral-900">Add Gift Aid</span>
                      {amount && giftAid && (
                        <span className="px-2 py-0.5 bg-secondary-500 text-white text-xs rounded-full">
                          +£{giftAidBonus.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-neutral-600">
                      I am a UK taxpayer and understand that if I pay less Income Tax and/or Capital Gains Tax 
                      than the amount of Gift Aid claimed on all my donations, it is my responsibility to pay any difference.
                    </p>
                  </div>
                </label>
              </div>

              {/* Summary */}
              {amount && (
                <div className="bg-neutral-50 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-neutral-600">Your {donationType} donation</span>
                    <span className="text-lg font-medium">£{amount.toFixed(2)}</span>
                  </div>
                  {giftAid && (
                    <div className="flex justify-between items-center mb-2 text-secondary-600">
                      <span>Gift Aid (25%)</span>
                      <span>+£{giftAidBonus.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center pt-3 border-t border-neutral-200">
                    <span className="font-medium text-neutral-900">Total impact</span>
                    <span className="text-2xl font-heading text-primary-600">£{totalImpact.toFixed(2)}</span>
                  </div>
                </div>
              )}

              <Button
                type="button"
                onClick={() => setStep(2)}
                disabled={!canProceed}
                variant="primary"
                size="lg"
                className="w-full"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          )}

          {/* Step 2: Personal Details */}
          {step === 2 && (
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              {giftAid && (
                <>
                  <div className="pt-4 border-t border-neutral-200">
                    <p className="text-sm text-neutral-600 mb-4">
                      For Gift Aid, we need your UK address:
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Address Line 1 *
                    </label>
                    <input
                      type="text"
                      name="addressLine1"
                      required={giftAid}
                      value={formData.addressLine1}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        required={giftAid}
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Postcode *
                      </label>
                      <input
                        type="text"
                        name="postcode"
                        required={giftAid}
                        value={formData.postcode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  onClick={() => setStep(1)}
                  variant="ghost"
                  size="lg"
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={() => setStep(3)}
                  variant="primary"
                  size="lg"
                  className="flex-1"
                >
                  Continue to Payment
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="p-8 space-y-6">
              {/* Summary Card */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="font-medium text-neutral-900 mb-4">Donation Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Type</span>
                    <span className="font-medium capitalize">{donationType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Amount</span>
                    <span className="font-medium">£{amount?.toFixed(2)}</span>
                  </div>
                  {giftAid && (
                    <div className="flex justify-between text-secondary-600">
                      <span>Gift Aid</span>
                      <span>+£{giftAidBonus.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-2 border-t border-primary-200">
                    <span className="font-medium">Total Impact</span>
                    <span className="font-heading text-lg text-primary-700">£{totalImpact.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Payment Methods (Demo) */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Payment Method
                </label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border-2 border-primary-500 rounded-xl bg-primary-50 cursor-pointer">
                    <input type="radio" name="payment" defaultChecked className="w-4 h-4 text-primary-600" />
                    <CreditCard className="w-5 h-5 text-neutral-600" />
                    <span className="font-medium">Credit / Debit Card</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border-2 border-neutral-200 rounded-xl cursor-pointer hover:border-neutral-300">
                    <input type="radio" name="payment" className="w-4 h-4 text-primary-600" />
                    <span className="text-xl">🍎</span>
                    <span className="font-medium">Apple Pay</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border-2 border-neutral-200 rounded-xl cursor-pointer hover:border-neutral-300">
                    <input type="radio" name="payment" className="w-4 h-4 text-primary-600" />
                    <span className="text-xl">G</span>
                    <span className="font-medium">Google Pay</span>
                  </label>
                </div>
              </div>

              {/* Card Details (Demo) */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-neutral-500 justify-center">
                <Lock className="w-4 h-4" />
                <span>Your payment is secured with 256-bit encryption</span>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  variant="ghost"
                  size="lg"
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="flex-1"
                >
                  <Heart className="w-5 h-5" />
                  Complete Donation
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-neutral-500">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4" />
          <span>Secure Payment</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>Charity No. 235703</span>
        </div>
        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4" />
          <span>100% to Projects</span>
        </div>
      </div>
    </div>
  );
}


