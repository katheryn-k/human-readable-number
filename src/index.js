module.exports = function toReadable (number) {
    number = String(number);
    let humanNumber = '';
    let arr = [];
    arr = [...number].reverse();

    if(number === '0') return 'zero';

    switch (arr[2]) {
        case '1': humanNumber = `one hundred `;
            break;
        case '2': humanNumber = `two hundred `;
            break;
        case '3': humanNumber = `three hundred `;
            break;
        case '4': humanNumber = `four hundred `;
            break;
        case '5': humanNumber = `five hundred `;
            break;
        case '6': humanNumber = `six hundred `;
            break;
        case '7': humanNumber = `seven hundred `;
            break;
        case '8': humanNumber = `eight hundred `;
            break;
        case '9': humanNumber = `nine hundred `;
            break;
        default: break;
    }
    switch (arr[1]) {
        case '1':
            switch (arr[0]) {
                case '0': humanNumber = `${humanNumber}ten`;
                    return humanNumber;
                case '1': humanNumber = `${humanNumber}eleven`;
                    return humanNumber;
                case '2': humanNumber = `${humanNumber}twelve`;
                    return humanNumber;
                case '3': humanNumber = `${humanNumber}thirteen`;
                    return humanNumber;
                case '4': humanNumber = `${humanNumber}fourteen`;
                    return humanNumber;
                case '5': humanNumber = `${humanNumber}fifteen`;
                    return humanNumber;
                case '6': humanNumber = `${humanNumber}sixteen`;
                    return humanNumber;
                case '7': humanNumber = `${humanNumber}seventeen`;
                    return humanNumber;
                case '8': humanNumber = `${humanNumber}eighteen`;
                    return humanNumber;
                case '9': humanNumber = `${humanNumber}nineteen`;
                    return humanNumber;

        }
        case '2': humanNumber = `${humanNumber}twenty `;
            break;
        case '3': humanNumber = `${humanNumber}thirty `;
            break;
        case '4': humanNumber = `${humanNumber}forty `;
            break;
        case '5': humanNumber = `${humanNumber}fifty `;
            break;
        case '6': humanNumber = `${humanNumber}sixty `;
            break;
        case '7': humanNumber = `${humanNumber}seventy `;
            break;
        case '8': humanNumber = `${humanNumber}eighty `;
            break;
        case '9': humanNumber = `${humanNumber}ninety `;
            break;
        default: break;
    }
    switch (arr[0]) {
        case '1': humanNumber = `${humanNumber}one`;
            break;
        case '2': humanNumber = `${humanNumber}two`;
            break;
        case '3': humanNumber = `${humanNumber}three`;
            break;
        case '4': humanNumber = `${humanNumber}four`;
            break;
        case '5': humanNumber = `${humanNumber}five`;
            break;
        case '6': humanNumber = `${humanNumber}six`;
            break;
        case '7': humanNumber = `${humanNumber}seven`;
            break;
        case '8': humanNumber = `${humanNumber}eight`;
            break;
        case '9': humanNumber = `${humanNumber}nine`;
            break;
        default: break;
    }
    return humanNumber.trimEnd();
}
