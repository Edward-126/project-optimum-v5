"use client";

import React, { useState, ChangeEvent } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const BmiCalculator: React.FC = () => {
  const [age, setAge] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [result, setResult] = useState<string>("");

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = parseFloat(
      (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(1),
    );
    setBmi(bmiValue);
    if (bmiValue < 18.5) {
      setResult("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setResult("Normal");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setResult("Overweight");
    } else {
      setResult("Obese");
    }
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  return (
    <>
      <div className="h-fit rounded-lg border border-border bg-background p-[18px] shadow-lg max-sm:mt-10 sm:w-[320px] sm:max-w-[320px]">
        <h4>BMI Calculator</h4>
        <small>
          Calculate your BMI with ease{" "}
          <TooltipProvider>
            <Tooltip delayDuration={100}>
              <TooltipTrigger>
                <span className="text-primary">*</span>
              </TooltipTrigger>
              <TooltipContent side="right" className="ml-2">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </small>

        <div className="mb-5 mt-2.5 space-y-2.5">
          <div className="space-y-1">
            <Label>Age</Label>
            <Input value={age} onChange={handleInputChange(setAge)} />
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <div className="space-y-1">
              <Label>Height</Label>
              <Input value={height} onChange={handleInputChange(setHeight)} />
            </div>
            <div className="space-y-1">
              <Label>Weight</Label>
              <Input value={weight} onChange={handleInputChange(setWeight)} />
            </div>
          </div>
          <div className="pt-2.5">
            <Button className="w-full" onClick={calculateBMI}>
              Calculate BMI
            </Button>
          </div>
        </div>

        {bmi ? (
          <div className="grid grid-cols-2 border-t pt-3">
            <div>
              <small>Your BMI</small>
              <h4>{bmi}</h4>
            </div>
            <div>
              <small>The Result</small>
              <h4>{result}</h4>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 border-t pt-3">
            <div>
              <small>Your BMI</small>
              <h4>00.0</h4>
            </div>
            <div>
              <small>The Result</small>
              <h4>RESULT</h4>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BmiCalculator;
