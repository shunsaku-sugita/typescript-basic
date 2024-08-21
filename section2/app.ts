// unknown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// The unknown type is more restrictive than the any type.
if (typeof userInput === "string") {
  userName = userInput;
}

// userName = userInput; // Error: Type 'unknown' is not assignable to type 'string'.

// Never Type
const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
};

generateError("An error occurred!", 500); // This function never produces a return value.
