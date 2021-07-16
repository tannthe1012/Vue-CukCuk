import moment from "moment";


export function format_date(value) {
    if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
    }
}