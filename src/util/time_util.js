var month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default (date) => {
    date = new Date(date);
    if (date) {
        let suffix = '';
        switch (date.getUTCDate().toString().substr(date.getUTCDate().toString().length - 1)) {
            case '1':
                suffix = 'st';
                break;
            case '2':
                suffix = 'nd';
                break;
            case '3':
                suffix = 'rd';
                break;
            default :
                suffix = 'th';
        }

        var formatedDate = month_names_short[date.getUTCMonth()] + ', ' +
            date.getUTCDate() + suffix + ' ' + date.getUTCFullYear();
        return formatedDate;
    } else '';
}