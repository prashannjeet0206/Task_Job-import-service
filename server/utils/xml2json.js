const xml2js = require("xml2js");

const convertToJson = async (xmlData) => {
  const Parser = new xml2js.Parser({ explicitArray: false });
  const data = await Parser.parseStringPromise(xmlData);
  return data;
};

module.exports = convertToJson;
