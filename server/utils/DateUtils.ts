export class DateUtils {

    public static getMysqlDateString(date: Date){

        if (!date) {
            return null;
        }

        const result = date.getFullYear() + '-' +
            (date.getMonth() + 1) + '-' +
            date.getDate() + ' ' +
            date.getHours() + ':' +
            date.getMinutes() + ':' +
            date.getSeconds();

        return result;
    }

    public static getNow() {

        return this.getMysqlDateString(new Date());
    }
}
