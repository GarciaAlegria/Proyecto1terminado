module.exports = {
    transform: {
        "^.+\\.[tj]sx?$": "babel-jest"
      },
      moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
      testEnvironment: "node",
      moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
      },
      globals: {
        "ts-jest": {
          "tsconfig": "tsconfig.json"
        }
      },
  };