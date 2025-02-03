/**
 * 
 */
import { isPrime, isPerfectNumber, sumOfDigits, isArmstrongNumber } from '../../utils/Numbers.js';

export default class ClassifyNumberController {
    constructor() { }
    static async classifyNumber(req, res) {
        const queryDetails = req.query;
        try {
            const number = Number(queryDetails?.number);
            if (!number && !queryDetails?.number) {
                throw new Error('Number Query is required');
            }
            if (!number) {
                throw new Error(queryDetails?.number.match(/[^0-9]/g).join(''));
            }
            const properties = [];
            isArmstrongNumber(number) && properties.push('armstrong');
            number % 2 !== 0 ? properties.push('odd') : properties.push('even');
            const number_api = process.env.NUMBER_API || 'http://numbersapi.com/';
            if (!number_api.endsWith('/')) {
                number_api += '/';
            }
            const number_api_query_type = process.env.NUMBER_API_QUERY_TYPE || '';
            const funFact = await fetch(`${number_api}${number}/${number_api_query_type}`, {
                method: 'GET',
            })
                .then(response => response.text())
                .then(result => {
                  return  result
                })
                .catch(error => 'unable to get fun fact');
            res.status(200).json(
                {
                    "number": number,
                    "is_prime": isPrime(number),
                    "is_perfect": isPerfectNumber(number),
                    "properties": properties,
                    "digit_sum": sumOfDigits(number) || 0,
                    "fun_fact": funFact
                }
            );
        } catch (error) {
            return res.status(400).json(
                {
                    "number": queryDetails?.number,//error.message,//"alphabet"
                    "error": true
                }
            );
        }

    }
}