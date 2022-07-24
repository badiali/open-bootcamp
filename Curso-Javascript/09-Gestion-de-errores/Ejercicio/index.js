const winston = require("winston");

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

const miFuncion = (val) => {
  if (typeof val === "number") {
    return 2 * val;
  }
  throw new Error("El valor debe ser de tipo número.");
};

try {
  const doble = miFuncion("asd");
  console.log(doble);
} catch (e) {
  logger.error(`${e}`);
}
