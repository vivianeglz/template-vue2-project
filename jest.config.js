module.exports = {
  verbose: true,
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    ".*\\.(vue)$": require.resolve("vue-jest"),
    "^.+\\.js$": require.resolve("babel-jest")
  },
  moduleNameMapper: {
    "@common/(.*)$": "<rootDir>/common/$1",
    "@ui/(.*)$": "<rootDir>/ui/$1",
    "@/(.*)$": "<rootDir>/client/$1"
  }
};
