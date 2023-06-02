/**
 * 
 * If no error, returns a Promise resolved with an object with status code 200 and the API normal response.
 * Else, returns a Promise resolved with an object with status code 500 and the error description.
 * 
 * @param {string} dataSource  - The cluster name 
 * @param {string} database  - The database name
 * @param {string} collection - The collection name
 * 
 * @returns {Promise<{status: 200, body: object}>| Promise<{status: 500, message: string}>}
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
        response.text().then((result) => {
          resolve({
            status: 200,
            body: JSON.parse(result),
          });
        });
      } else {
        resolve({
          status: 500,
          message: "Error with API call.",
        });
      }
    });
  });
};

module.exports = findSingleDocument;
