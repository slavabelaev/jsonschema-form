(this["webpackJsonpjsonschema-form"]=this["webpackJsonpjsonschema-form"]||[]).push([[56],{1611:function(e){e.exports=JSON.parse('{"$schema":"../../../package/schemas/form-props.schema.json","schema":{"properties":{"personal":{"title":"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435","description":"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 +40% \u043a \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u0438\u044e, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0432 \u043f\u0435\u0440\u0432\u044b\u0439 \u0448\u0430\u0433","properties":{"lastName":{"title":"\u0424\u0430\u043c\u0438\u043b\u0438\u044f","description":"\u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u043e\u0447\u043d\u043e \u043a\u0430\u043a \u0432 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0435","type":"string"},"firstName":{"title":"\u0418\u043c\u044f","description":"\u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u043e\u0447\u043d\u043e \u043a\u0430\u043a \u0432 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0435","type":"string"},"middleName":{"title":"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e","description":"\u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u043e\u0447\u043d\u043e \u043a\u0430\u043a \u0432 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0435","type":"string"},"gender":{"title":"\u041f\u043e\u043b","type":"string","anyOf":[{"title":"\u0416\u0435\u043d\u0441\u043a\u0438\u0439","const":"f"},{"title":"\u041c\u0443\u0436\u0441\u043a\u043e\u0439","const":"m"}],"default":"","x-errorMessages":{"anyOf":"\u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043e"}},"phone":{"$ref":"#/definitions/phone"},"email":{"$ref":"#/definitions/email"},"confirmed":{"title":"\u042f \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c \u0441 [\u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438](https://example.com) \u0438 \u0434\u0430\u044e \u0441\u0432\u043e\u0435 [\u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443](https://example.com) \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u043e\u0438\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u044e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u0432 \u0431\u044e\u0440\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u044b\u0445 \u0438\u0441\u0442\u043e\u0440\u0438\u0439","type":"boolean","const":true,"default":false,"x-errorMessages":{"const":"\u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0430\u0448\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435"}}},"required":["lastName","firstName","gender","confirmed"]},"identityDocument":{"title":"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442, \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u044f\u044e\u0449\u0438\u0439 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u044c","description":"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 +30% \u043a \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u0438\u044e, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0432 \u0432\u0442\u043e\u0440\u043e\u0439 \u0448\u0430\u0433","properties":{"series":{"title":"\u0421\u0435\u0440\u0438\u044f","type":"string","pattern":"^[0-9]{2} [0-9]{2}$","examples":["12 34"],"x-errorMessages":{"pattern":"\u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 4-\u0445 \u0446\u0438\u0444\u0440, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ${example}"}},"number":{"title":"\u041d\u043e\u043c\u0435\u0440","type":"string","pattern":"^[0-9]{6}$","examples":["123456"],"x-errorMessages":{"pattern":"\u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 6-\u0438 \u0446\u0438\u0444\u0440, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ${example}"}},"issuedDate":{"title":"\u0414\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438","description":"\u043f\u0440\u0438\u043c\u0435\u0440 21.12.2012","type":"string","format":"date","examples":["21.12.2012"]},"issuedCode":{"title":"\u041a\u043e\u0434 \u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f","description":"\u043f\u0440\u0438\u043c\u0435\u0440 123-456","type":"string","pattern":"^[0-9]{3}-[0-9]{3}$","examples":["123-456"],"x-errorMessages":{"pattern":"\u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 6-\u0438 \u0446\u0438\u0444\u0440, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ${example}"}},"issuedBy":{"title":"\u041a\u0435\u043c \u0432\u044b\u0434\u0430\u043d","description":"\u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u043e\u0447\u043d\u043e \u043a\u0430\u043a \u0432 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0435","type":"string","not":{"pattern":"[A-z]+"},"x-errorMessages":{"not":"\u0441\u043c\u0435\u043d\u0438\u0442\u0435 \u0440\u0430\u0441\u043a\u043b\u0430\u0434\u043a\u0443 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044b \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a"}},"birthdate":{"title":"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f","description":"\u043f\u0440\u0438\u043c\u0435\u0440 21.12.2012","type":"string","format":"date","examples":["21.12.2012"]},"birthplace":{"$ref":"#/definitions/city","title":"\u041c\u0435\u0441\u0442\u043e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f","description":"\u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u043e\u0447\u043d\u043e \u043a\u0430\u043a \u0432 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0435"},"registerRegion":{"$ref":"#/definitions/region","title":"\u0420\u0435\u0433\u0438\u043e\u043d \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438","description":"\u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432\u044b \u043d\u0430\u0439\u0434\u0435\u0442\u0435 \u043d\u0430 5 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430"}},"required":["series","number","issuedDate","issuedCode","birthdate","birthplace","registerRegion"]},"employee":{"title":"\u0421\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e \u0440\u0430\u0431\u043e\u0442\u0435","description":"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 +15% \u043a \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u0438\u044e, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0432 \u0442\u0440\u0435\u0442\u0438\u0439 \u0448\u0430\u0433","properties":{"startDate":{"title":"\u0414\u0430\u0442\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u0435\u0435 \u043c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b","description":"\u0435\u0441\u043b\u0438 \u043d\u0435 \u043f\u043e\u043c\u043d\u0438\u0442\u0435 \u0442\u043e\u0447\u043d\u0443\u044e \u0434\u0430\u0442\u0443, \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u0443\u044e","type":"string","format":"date","x-errorMessages":{"maximum":"\u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0435\u043d\u044b \u0431\u043e\u043b\u0435\u0435 1 \u043c\u0435\u0441\u044f\u0446\u0430"}},"organizationInn":{"title":"\u0418\u041d\u041d \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438","type":"string","pattern":"^([0-9]{10}|[0-9]{12})$","examples":["526317984689"]},"position":{"title":"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c","type":"string","not":{"pattern":"^[0-9]+$"},"x-errorMessages":{"not":"\u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0446\u0438\u0444\u0440"}},"phone":{"$ref":"#/definitions/phone","title":"\u0420\u0430\u0431\u043e\u0447\u0438\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d","description":"\u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0447\u0438\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u043e\u0442\u0434\u0435\u043b\u0430 \u043a\u0430\u0434\u0440\u043e\u0432/\u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u0438. \u041c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0438\u043b\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}},"required":["organizationInn","startDate","position","phone"]}},"definitions":{"phone":{"title":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d","description":"\u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0442\u0430\u0446\u0438\u043e\u043d\u0430\u0440\u043d\u044b\u0439 \u0438\u043b\u0438 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430","type":"string","pattern":"\\\\+7[0-9]{10}","examples":["+7 (901) 123-45-67"],"x-errorMessages":{"pattern":"\u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-\u0438 \u0446\u0438\u0444\u0440, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ${example}"}},"email":{"title":"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430","description":"\u043c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043c \u043f\u043e\u043b\u0435\u0437\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441","type":"string","format":"email","examples":["example@domain.ru"],"x-errorMessages":{"format":"\u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 email, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ${example}"}},"organizationInn":{"title":"\u0418\u041d\u041d \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438","description":"\\n> \u0418\u041d\u041d \u0432\u0430\u0448\u0435\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u0443\u0442\u043e\u0447\u043d\u0438\u0442\u044c: \\n> - \u0412 \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u0438;\\n> - \u0412 \u043e\u0442\u0434\u0435\u043b\u0435 \u043a\u0430\u0434\u0440\u043e\u0432, \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u0438\u043b\u0438 \u0432 \u043a\u043e\u043b\u043b-\u0446\u0435\u043d\u0442\u0440\u0435 \u0432\u0430\u0448\u0435\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438;\\n> - \u041d\u0430 \u0441\u0430\u0439\u0442\u0435 [https://egrul.nalog.ru/](https://egrul.nalog.ru/);","type":"string","pattern":"^([0-9]{10}|[0-9]{12})$","minLength":10,"maxLength":12,"examples":["7728168971","781612345678"],"x-errorMessages":{"pattern":"\u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 10-\u0438 \u0438\u043b\u0438 12-\u0438 \u0446\u0438\u0444\u0440"}},"region":{"title":"\u0420\u0435\u0433\u0438\u043e\u043d","enum":["\u041c\u043e\u0441\u043a\u0432\u0430","\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u041a\u0440\u0430\u0439","\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0410\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c","\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u041a\u0440\u0430\u0439","\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430","\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u041a\u0440\u0430\u0439","\u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430","\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c","\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u041a\u0440\u0430\u0439","\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u041a\u0440\u0430\u0439","\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0410\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433","\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u041e\u043c\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u041a\u0440\u0430\u0439","\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u041a\u0440\u0430\u0439","\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0443\u0440\u044f\u0442\u0438\u044f","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0435\u043b\u0438\u044f","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0440\u044b\u043c","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u0430\u0440\u0438\u0439 \u042d\u043b","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0430\u0445\u0430","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430","\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0425\u0430\u043a\u0430\u0441\u0438\u044f","\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0421\u0435\u0432\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c","\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u041a\u0440\u0430\u0439","\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430","\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u041a\u0440\u0430\u0439","\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0410\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433","\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c","\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430","\u0427\u0443\u0432\u0430\u0448\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430","\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0410\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433","\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0410\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433","\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u041e\u0431\u043b\u0430\u0441\u0442\u044c"],"x-errorMessages":{"enum":"\u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u043c \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430"}},"city":{"title":"\u0413\u043e\u0440\u043e\u0434","enum":["\u041c\u043e\u0441\u043a\u0432\u0430","\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","\u0410\u043f\u0440\u0435\u043b\u0435\u0432\u043a\u0430","\u0411\u0430\u043b\u0430\u0448\u0438\u0445\u0430","\u0411\u0435\u043b\u043e\u043e\u0437\u0435\u0440\u0441\u043a\u0438\u0439","\u0411\u0440\u043e\u043d\u043d\u0438\u0446\u044b","\u0411\u044b\u043a\u043e\u0432\u043e","\u0412\u0435\u0440\u0435\u044f","\u0412\u0438\u0434\u043d\u043e\u0435","\u0412\u043e\u043b\u043e\u043a\u043e\u043b\u0430\u043c\u0441\u043a","\u0412\u043e\u043b\u043e\u0441\u043e\u0432\u043e","\u0412\u043e\u043b\u0445\u043e\u0432","\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u0441\u043a","\u0412\u0441\u0435\u0432\u043e\u043b\u043e\u0436\u0441\u043a","\u0412\u044b\u0431\u043e\u0440\u0433","\u0412\u044b\u0440\u0438\u0446\u0430","\u0413\u0430\u0442\u0447\u0438\u043d\u0430","\u0413\u043e\u043b\u0438\u0446\u044b\u043d\u043e","\u0413\u043e\u0440\u043a\u0438-10","\u0414\u0435\u0434\u043e\u0432\u0441\u043a","\u0414\u0437\u0435\u0440\u0436\u0438\u043d\u0441\u043a\u0438\u0439","\u0414\u043c\u0438\u0442\u0440\u043e\u0432","\u0414\u043e\u043b\u0433\u043e\u043f\u0440\u0443\u0434\u043d\u044b\u0439","\u0414\u043e\u043c\u043e\u0434\u0435\u0434\u043e\u0432\u043e","\u0414\u043e\u0440\u043e\u0445\u043e\u0432\u043e","\u0414\u0440\u0435\u0437\u043d\u0430","\u0415\u0433\u043e\u0440\u044c\u0435\u0432\u0441\u043a","\u0416\u0443\u043a\u043e\u0432\u0441\u043a\u0438\u0439","\u0417\u0430\u043f\u0440\u0443\u0434\u043d\u044f","\u0417\u0430\u0440\u0430\u0439\u0441\u043a","\u0417\u0432\u0435\u043d\u0438\u0433\u043e\u0440\u043e\u0434","\u0417\u0435\u043b\u0435\u043d\u043e\u0433\u043e\u0440\u0441\u043a","\u0417\u0435\u043b\u0435\u043d\u043e\u0433\u0440\u0430\u0434","\u0418\u0432\u0430\u043d\u0433\u043e\u0440\u043e\u0434","\u0418\u0432\u0430\u043d\u0442\u0435\u0435\u0432\u043a\u0430","\u0418\u0441\u0442\u0440\u0430","\u041a\u0430\u0448\u0438\u0440\u0430","\u041a\u0438\u043d\u0433\u0438\u0441\u0435\u043f\u043f","\u041a\u0438\u0440\u0438\u0448\u0438","\u041a\u0438\u0440\u043e\u0432\u0441\u043a","\u041a\u043b\u0438\u043d","\u041a\u043e\u043b\u043e\u043c\u043d\u0430","\u041a\u043e\u043b\u043f\u0438\u043d\u043e","\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u0440","\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u0440\u043a\u0430","\u041a\u043e\u0440\u043e\u043b\u0435\u0432","\u041a\u043e\u0442\u0435\u043b\u044c\u043d\u0438\u043a\u0438","\u041a\u0440\u0430\u0441\u043a\u043e\u0432\u043e","\u041a\u0440\u0430\u0441\u043d\u043e\u0430\u0440\u043c\u0435\u0439\u0441\u043a","\u041a\u0440\u0430\u0441\u043d\u043e\u0433\u043e\u0440\u0441\u043a","\u041a\u0440\u0430\u0441\u043d\u043e\u0435 \u0421\u0435\u043b\u043e","\u041a\u0440\u043e\u043d\u0448\u0442\u0430\u0434\u0442","\u041a\u0443\u0431\u0438\u043d\u043a\u0430","\u041a\u0443\u0434\u0440\u043e\u0432\u043e","\u041a\u0443\u0440\u043e\u0432\u0441\u043a\u043e\u0435","\u041b\u0435\u0441\u043d\u043e\u0439 \u0413\u043e\u0440\u043e\u0434\u043e\u043a","\u041b\u0438\u043a\u0438\u043d\u043e-\u0414\u0443\u043b\u0451\u0432\u043e","\u041b\u043e\u0431\u043d\u044f","\u041b\u043e\u0434\u0435\u0439\u043d\u043e\u0435 \u041f\u043e\u043b\u0435","\u041b\u043e\u043c\u043e\u043d\u043e\u0441\u043e\u0432","\u041b\u043e\u0441\u0438\u043d\u043e-\u041f\u0435\u0442\u0440\u043e\u0432\u0441\u043a\u0438\u0439","\u041b\u043e\u0442\u043e\u0448\u0438\u043d\u043e","\u041b\u0443\u0433\u0430","\u041b\u0443\u0445\u043e\u0432\u0438\u0446\u044b","\u041b\u044b\u0442\u043a\u0430\u0440\u0438\u043d\u043e","\u041b\u044e\u0431\u0435\u0440\u0446\u044b","\u041c\u0430\u043b\u0430\u0445\u043e\u0432\u043a\u0430","\u041c\u0438\u0445\u043d\u0435\u0432\u043e","\u041c\u043e\u0436\u0430\u0439\u0441\u043a","\u041c\u043e\u043d\u0438\u043d\u043e","\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0438\u0439","\u041c\u0443\u0440\u0438\u043d\u043e","\u041c\u044b\u0442\u0438\u0449\u0438","\u041d\u0430\u0440\u043e-\u0424\u043e\u043c\u0438\u043d\u0441\u043a","\u041d\u0430\u0445\u0430\u0431\u0438\u043d\u043e","\u041d\u0438\u043a\u043e\u043b\u044c\u0441\u043a\u043e\u0435","\u041d\u043e\u0432\u0438\u043d\u043a\u0438","\u041d\u043e\u0432\u043e\u0435 \u0414\u0435\u0432\u044f\u0442\u043a\u0438\u043d\u043e","\u041d\u043e\u0433\u0438\u043d\u0441\u043a","\u041e\u0434\u0438\u043d\u0446\u043e\u0432\u043e","\u041e\u0437\u0435\u0440\u044b","\u041e\u0440\u0435\u0445\u043e\u0432\u043e-\u0417\u0443\u0435\u0432\u043e","\u041e\u0442\u0440\u0430\u0434\u043d\u043e\u0435","\u041f\u0430\u0432\u043b\u043e\u0432\u0441\u043a\u0438\u0439 \u041f\u043e\u0441\u0430\u0434","\u041f\u0438\u043a\u0430\u043b\u0435\u0432\u043e","\u041f\u043e\u0434\u043e\u043b\u044c\u0441\u043a","\u041f\u043e\u0434\u043f\u043e\u0440\u043e\u0436\u044c\u0435","\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a","\u041f\u0440\u0438\u043e\u0437\u0435\u0440\u0441\u043a","\u041f\u0440\u043e\u0442\u0432\u0438\u043d\u043e","\u041f\u0443\u0442\u0438\u043b\u043a\u043e\u0432\u043e","\u041f\u0443\u0448\u043a\u0438\u043d","\u041f\u0443\u0448\u043a\u0438\u043d\u043e","\u041f\u0443\u0449\u0438\u043d\u043e","\u0420\u0430\u043c\u0435\u043d\u0441\u043a\u043e\u0435","\u0420\u0435\u0443\u0442\u043e\u0432","\u0420\u043e\u0448\u0430\u043b\u044c","\u0420\u043e\u0449\u0438\u043d\u043e","\u0420\u0443\u0437\u0430","\u0421\u0430\u043b\u0430\u0440\u044c\u0435\u0432\u043e","\u0421\u0432\u0435\u0442\u043e\u0433\u043e\u0440\u0441\u043a","\u0421\u0435\u043b\u044f\u0442\u0438\u043d\u043e","\u0421\u0435\u0440\u0433\u0438\u0435\u0432 \u041f\u043e\u0441\u0430\u0434","\u0421\u0435\u0440\u0435\u0431\u0440\u044f\u043d\u044b\u0435 \u041f\u0440\u0443\u0434\u044b","\u0421\u0435\u0440\u043f\u0443\u0445\u043e\u0432","\u0421\u0435\u0440\u0442\u043e\u043b\u043e\u0432\u043e","\u0421\u0438\u0432\u0435\u0440\u0441\u043a\u0438\u0439","\u0421\u043b\u0430\u043d\u0446\u044b","\u0421\u043e\u0441\u043d\u043e\u0432\u044b\u0439 \u0411\u043e\u0440","\u0421\u043e\u0444\u0440\u0438\u043d\u043e","\u0421\u0442\u0430\u0440\u0430\u044f \u041a\u0443\u043f\u0430\u0432\u043d\u0430","\u0421\u0442\u0443\u043f\u0438\u043d\u043e","\u0421\u0445\u043e\u0434\u043d\u044f","\u0422\u0435\u043b\u044c\u043c\u0430\u043d\u0430","\u0422\u0438\u0445\u0432\u0438\u043d","\u0422\u043e\u043c\u0438\u043b\u0438\u043d\u043e","\u0422\u043e\u0441\u043d\u043e","\u0422\u0440\u043e\u0438\u0446\u043a","\u0422\u0443\u0447\u043a\u043e\u0432\u043e","\u0423\u0432\u0430\u0440\u043e\u0432\u043a\u0430","\u0424\u0440\u044f\u0437\u0438\u043d\u043e","\u0425\u0438\u043c\u043a\u0438","\u0425\u043e\u0442\u044c\u043a\u043e\u0432\u043e","\u0427\u0435\u0440\u043d\u043e\u0433\u043e\u043b\u043e\u0432\u043a\u0430","\u0427\u0435\u0445\u043e\u0432","\u0428\u0430\u0442\u0443\u0440\u0430","\u0428\u0430\u0445\u043e\u0432\u0441\u043a\u0430\u044f","\u0428\u043e\u043b\u043e\u0445\u043e\u0432\u043e","\u0428\u0443\u0448\u0430\u0440\u044b","\u0429\u0435\u043b\u043a\u043e\u0432\u043e","\u0429\u0435\u0440\u0431\u0438\u043d\u043a\u0430","\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u0433\u043e\u0440\u0441\u043a","\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u0441\u0442\u0430\u043b\u044c","\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u0443\u0433\u043b\u0438","\u042f\u0445\u0440\u043e\u043c\u0430"],"x-errorMessages":{"enum":"\u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0433\u043e\u0440\u043e\u0434\u043e\u043c \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430"}}}},"uiSchema":{"ui:template":"collapse-list","identityDocument":{"series":{"ui:gridColumn":"1 / 7"},"number":{"ui:gridColumn":"7 / 13"},"issuedDate":{"ui:gridColumn":"1 / 7"},"issuedCode":{"ui:gridColumn":"7 / 13"}}},"formData":{}}')}}]);
//# sourceMappingURL=56.d73302fe.chunk.js.map