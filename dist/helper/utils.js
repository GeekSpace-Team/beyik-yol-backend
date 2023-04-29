"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcDate = exports.randomIntFromInterval = exports.isNullValue = void 0;
const isNullValue = (value) => {
    return typeof value === 'undefined' || value === null || value === '';
};
exports.isNullValue = isNullValue;
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.randomIntFromInterval = randomIntFromInterval;
function calcDate(date1, date2) {
    const dt_date1 = new Date(date1);
    const dt_date2 = new Date(date2);
    const date1_time_stamp = dt_date1.getTime();
    const date2_time_stamp = dt_date2.getTime();
    let calc;
    if (date1_time_stamp > date2_time_stamp) {
        calc = new Date(date1_time_stamp - date2_time_stamp);
    }
    else {
        calc = new Date(date2_time_stamp - date1_time_stamp);
    }
    const calcFormatTmp = calc.getDate() + '-' + (calc.getMonth() + 1) + '-' + calc.getFullYear();
    const calcFormat = calcFormatTmp.split("-");
    const days_passed = Number(Math.abs(Number(calcFormat[0])) - 1);
    const months_passed = Number(Math.abs(Number(calcFormat[1])) - 1);
    const years_passed = Number(Math.abs(Number(calcFormat[2])) - 1970);
    const yrsTxt = ["year", "years"];
    const mnthsTxt = ["month", "months"];
    const daysTxt = ["day", "days"];
    const total_days = (years_passed * 365) + (months_passed * 30.417) + days_passed;
    const total_secs = total_days * 24 * 60 * 60;
    const total_mins = total_days * 24 * 60;
    const total_hours = total_days * 24;
    const total_weeks = (total_days >= 7) ? total_days / 7 : 0;
    const result = ((years_passed == 1) ? years_passed + ' ' + yrsTxt[0] + ' ' : (years_passed > 1) ?
        years_passed + ' ' + yrsTxt[1] + ' ' : '') +
        ((months_passed == 1) ? months_passed + ' ' + mnthsTxt[0] : (months_passed > 1) ?
            months_passed + ' ' + mnthsTxt[1] + ' ' : '') +
        ((days_passed == 1) ? days_passed + ' ' + daysTxt[0] : (days_passed > 1) ?
            days_passed + ' ' + daysTxt[1] : '');
    return {
        "total_days": Math.round(total_days),
        "total_weeks": Math.round(total_weeks),
        "total_hours": Math.round(total_hours),
        "total_minutes": Math.round(total_mins),
        "total_seconds": Math.round(total_secs),
        "result": result.trim()
    };
}
exports.calcDate = calcDate;
//# sourceMappingURL=utils.js.map