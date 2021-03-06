"use strict";
var _getSert = require("../getsert");
var generateCode = require("../../../../src/utils/code-generator");

class ArticleMotifDataUtil {
    getSert(input) {
        var ManagerType = require("../../../../src/managers/master/article/article-motif-manager");
        return _getSert(input, ManagerType, (data) => {
            return {
                code: data.code
            };
        });
    }

    getNewData() {
        var Model = require('bateeq-models').master.article.ArticleMotif;
        var data = new Model();
        var code = generateCode();
        data.code = code;
        data.name = `name[${code}]`;
        data.description = `description[${code}]`;
        data.filePath = `filePath[${code}]`;
        return Promise.resolve(data);
    }

    getTestData() {
        var data = {
            code: "UT/Article-Motif/01",
            name: "data 01",
            description: "description data 01",
            filePath: "filePath data 01"
        };
        return this.getSert(data);
    }
}
module.exports = new ArticleMotifDataUtil();