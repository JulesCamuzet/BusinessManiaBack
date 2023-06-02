/**
 *
 * Returns a Promise resolved with an object with the API response or throw an error.
 *
 * @param {string} dataSource  - The cluster name
 * @param {string} database  - The database name
 * @param {string} collection - The collection name
 * @param {fitler} object - The filters to apply for the research
 *
 * @returns {Promise<object>}
 */

const findSingleDocument = (dataSource, database, collection, filter) => {
  return new Promise(async (resolve, reject) => {
    const url =
      "https://eu-west-2.aws.data.mongodb-api.com/app/data-auepf/endpoint/data/v1/action/findOne";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apiKey:
          "dxAOI0lHjTdxXxppVBocsyNmddXODCh42MnNsfh6BBphb40t0s00GKBHaysMbSsj",
      },
      body: JSON.stringify({
        dataSource: dataSource,
        database: database,
        collection: collection,
        filter: filter,
      }),
    };

    fetch(url, options).then((response) => {
      if (response.ok) {
        response.text().then((result) => resolve(JSON.parse(result)));
      } else {
        throw new Error("errorAtlasApi");
      }
    });
  });
};

module.exports = findSingleDocument;
