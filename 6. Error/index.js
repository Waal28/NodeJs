a;

class CustomizeError extends Error {
  constructor(messege) {
    super(messege);
    this.name = "Custom Error";
  }
}

if ((a, b, c === undefined)) {
  throw new CustomizeError("Variable a b c Undefined");
}
