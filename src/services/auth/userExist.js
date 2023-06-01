const userExist = (email) => {
  return new Promise(async (resolve, reject) => {
    const url =
      "https://eu-west-2.aws.data.mongodb-api.com/app/data-auepf/endpoint/data/v1/action/findOne";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apiKey: "dxAOI0lHjTdxXxppVBocsyNmddXODCh42MnNsfh6BBphb40t0s00GKBHaysMbSsj",
      },
      body: JSON.stringify({
        dataSource: "BusinessMania",
        database: "Users",
        collection: "usersLogs",
        filter: {
          email: email,
        },
      }),
    };

    fetch(url, options)
    .then(response => response.text())
    .then(data => {
      data = JSON.parse(data);
      if (data.document === null) {
        resolve(false);
      } else {
        resolve(true);
      }
    })
  });
};


module.exports = userExist;