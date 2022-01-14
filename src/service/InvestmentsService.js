import API from "./../service/InvestmentsApi";

export default {
    list: async () => API.get("renda-fixa"),
}