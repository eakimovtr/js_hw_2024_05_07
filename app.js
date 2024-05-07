const input = document.getElementById("input")
const wordBtn = document.getElementById("get-stats")
const toWordField = document.getElementById("to-word")
const letterCountField = document.getElementById("letter-count")
const digitCountField = document.getElementById("digit-count")
const otherCountField = document.getElementById("other-count")

const alphabet = "abcdefghijklmnopqrstuvwxyz"
const digits = "0123456789"

function getWordStats(word) {
    let wordStats = {
        letters: 0,
        digits: 0,
        others: 0
    }
    for (char of word) {
        if (alphabet.includes(char)) {
            wordStats.letters++
        } else if (digits.includes(char)) {
            wordStats.digits++
        } else {
            wordStats.others++
        }
    }
    return wordStats
}

function toNumeral(word) {
    let res = ""
    const len = word.length
    if (len > 2) {
        return "Can't convert numbers with more than 2 digits"
    }
    for (let i = 0; i < len; i++) {
        const char = word.charAt(i)
        if (!(digits.includes(char))) {
            return "Not a valid number"
        }
        switch (char) {
            case "0":
                if (len == 1) {
                    return "ноль"
                }
                break
            case "1":
                if (i == 0) {
                    switch (word.charAt(1)) {
                        case "0":
                            return "десять"
                        case "1":
                            return "одиннадцать"
                        case "2":
                            return "двенадцать"
                        case "3":
                            return "тринадцать"
                        case "4":
                            return "четырнадцать"
                        case "5":
                            return "пятнадцать"
                        case "6":
                            return "шестнадцать"
                        case "7":
                            return "семнадцать"
                        case "8":
                            return "восемнадцать"
                        case "9":
                            return "девятнадцать"
                    }
                }
                res += "один"
                break
            case "2": 
                if (i == 0 && len == 2) {
                    res += "двадцать "
                } else {
                    res += "два"
                }
                break
            case "3": 
                if (i == 0 && len == 2) {
                    res += "тридцать "
                } else {
                    res += 'три'
                }
                break
            case "4": 
                if (i == 0 && len == 2) {
                    res += "сорок "
                } else {
                    res += 'четыре'
                }
                break
            case "5": 
                if (i == 0 && len == 2) {
                    res += "пятьдесят "
                } else {
                    res += 'пять'
                }
                break
            case "6": 
                if (i == 0 && len == 2) {
                    res += "шестьдесят "
                } else {
                    res += 'шесть'
                }
                break
            case "7": 
                if (i == 0 && len == 2) {
                    res += "семьдесят "
                } else {
                    res += 'семь'
                }
                break
            case "8": 
                if (i == 0 && len == 2) {
                    res += "восемьдесят "
                } else {
                    res += 'восемь'
                }
                break
            case "9": 
                if (i == 0 && len == 2) {
                    res += "девяносто "
                } else {
                    res += 'девять'
                }
                break
        }
    }
    
    return res
}

wordBtn.onclick = function() {
    const word = input.value

    const wordStats = getWordStats(word)
    letterCountField.textContent = wordStats.letters
    digitCountField.textContent = wordStats.digits
    otherCountField.textContent = wordStats.others

    toWordField.textContent = toNumeral(word)
}