import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { Button } from "..";

const VerifierOtp = ({ phone, onRegister }) => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        onRegister();
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div className="p-4 flex flex-col h-full items-center justify-center gap-4">
      <span>
        We send OTP code your phone number: {phone} . Please check your phone.
      </span>

      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        inputStyle="h-20 opt-item border rounded-md outline-none inline-block border-blue-600 "
        shouldAutoFocus
      />

      <Button loading={isLoading} onClick={handleSubmit} type="primary">
        ConFirm OTP
      </Button>
    </div>
  );
};

export default VerifierOtp;
