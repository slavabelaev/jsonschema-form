import {Routes} from "./index";
// import {common} from "./common";

export const samples: Routes = {
    forms: {
        title: 'Формы',
        routes: {
            // "registration": {
            //     title: "Регистрация клиента",
            //     fetchFormProps: async () => import('../../samples/forms/reg-client-form.json'),
            //     formPropsEditPath: 'src/samples/forms/reg-client-form.json'
            // },
            "credit-card": {
                title: "Оформление кредитной карты",
                fetchFormProps: async () => import('../../samples/forms/credit-card-form.json'),
                formPropsEditPath: 'src/samples/forms/credit-card-form.json'
            },
            // "client-card": {
            //     title: "Карточка клиента",
            //     fetchFormProps: async () => import('../../samples/forms/client-card-form.json'),
            //     formPropsEditPath: 'src/samples/forms/client-card-form.json'
            // },
            // "ipoteka": {
            //     title: "Заявка на ипотеку",
            //     fetchFormProps: async () => import('../../samples/forms/ipoteka.json'),
            //     formPropsEditPath: 'src/samples/forms/ipoteka.json'
            // },
            "100-days": {
                title: "Заявка на кредитную карту",
                fetchFormProps: async () => import('../../samples/forms/100-days-form.json'),
                formPropsEditPath: 'src/samples/forms/100-days-form.json'
            },
            "credit-cash": {
                title: "Заявка на кредит наличными или рефинансирование",
                fetchFormProps: async () => import('../../samples/forms/credit-cash-form.json'),
                formPropsEditPath: 'src/samples/forms/credit-cash-form.json'
            }
        }
    },
    // common: {
    //     title: 'Общие',
    //     routes: common
    // }
};
