const path = require("path");
const https = require("https");
const net = require("net");
const packageJsonPath = path.join(__dirname, "../package.json");
const packageJson = require(packageJsonPath);

/**
 * Checks the availability of internet connection.
 *
 * @returns {Promise<boolean>} - A promise that resolves to true if internet is available, false otherwise.
 */
function isInternetAvailable() {
  return new Promise((resolve) => {
    const socket = net.createConnection(80, "www.google.com");

    socket.on("connect", () => {
      socket.end();
      resolve(true);
    });

    socket.on("error", () => {
      resolve(false);
    });
  });
}

/**
 * Fetches the new version from the provided package.json URL.
 *
 * @param {string} url - The URL of the package.json file.
 * @returns {Promise<string>} - A promise that resolves to the version string.
 */
function getPackageJsonVersion() {
  const url = "https://raw.githubusercontent.com/FajarKim/node-openssl-enc/master/package.json";
  return isInternetAvailable().then((internetAvailable) => {
    if (!internetAvailable) {
      return;
    }

    return new Promise((resolve, reject) => {
      https.get(url, (response) => {
        let data = "";

        // A chunk of data has been received.
        response.on("data", (chunk) => {
          data += chunk;
        });

        // The whole response has been received.
        response.on("end", () => {
          try {
            const packageJson = JSON.parse(data);
            const version = packageJson.version;

            resolve(version);
          } catch (error) {
            reject(new Error("Error parsing JSON"));
          }
        });
      }).on("error", (error) => {
        reject(new Error(error.message));
      });
    });
  });
}

getPackageJsonVersion()
  .then((version) => {
    if (version !== undefined && version !== packageJson.version) {
      console.info(`You have a missed version: ${packageJson.version} -> ${version}`);
      console.log(`Try 'npm -g install ${packageJson.name}@${version}' for update this tool`);
    }
  })
  .catch((error) => {
    console.error(error.message);
    const errorCode = typeof error.code === "number" ? error.code : 1;
    process.exit(errorCode);
  });

module.exports = { isInternetAvailable, getPackageJsonVersion };
