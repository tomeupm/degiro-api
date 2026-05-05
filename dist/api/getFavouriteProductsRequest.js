"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFavouriteProductsRequest = void 0;
// Import debug console log
var utils_1 = require("../utils");
// Import constants
var enums_1 = require("../enums");
var GET_FAVOURITES_PATH = enums_1.DEGIRO_API_PATHS.GET_FAVOURITES_PATH, BASE_API_URL = enums_1.DEGIRO_API_PATHS.BASE_API_URL;
// tslint:disable-next-line: max-line-length
function getFavouriteProductsRequest(accountData, accountConfig) {
    return new Promise(function (resolve, reject) {
        // Create fetch request options
        var requestOptions = {
            headers: {
                Cookie: "JSESSIONID=" + accountConfig.data.sessionId + ";",
            },
            credentials: 'include',
            referer: 'https://trader.degiro.nl/trader/',
        };
        // Create params to reach favourites
        var params = '';
        params += "intAccount=" + accountData.data.intAccount + "&";
        params += "sessionId=" + accountConfig.data.sessionId;
        // Do the request to get favourites data
        var url = "" + BASE_API_URL + GET_FAVOURITES_PATH + "?" + params;
        utils_1.debug("Making request to " + url + " with params: \n" + JSON.stringify(requestOptions));
        fetch(url, requestOptions)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            resolve(res.data);
        })
            .catch(reject);
    });
}
exports.getFavouriteProductsRequest = getFavouriteProductsRequest;
//# sourceMappingURL=getFavouriteProductsRequest.js.map