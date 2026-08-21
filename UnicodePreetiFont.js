

(function () {

    "use strict";

    /* =========================================================
       PREETI → UNICODE
       ========================================================= */

    const preetiToUnicode = [

        ["ç", "ॐ"],
        ["˜", "ऽ"],
        [".", "।"],
        ["'m", "m'"],
        ["]m", "m]"],
        ["Fmf", "mfF"],
        ["Fm", "mF"],

        [")", "०"],
        ["!", "१"],
        ["@", "२"],
        ["#", "३"],
        ["$", "४"],
        ["%", "५"],
        ["^", "६"],
        ["&", "७"],
        ["*", "८"],
        ["(", "९"],

        ["k|m", "फ्र"],
        ["em", "झ"],
        ["km", "फ"],
        ["Qm", "क्त"],
        ["qm", "क्र"],
        ["N˜", "ल"],

        ["¡", "ज्ञ्"],
        ["¢", "द्घ"],
        ["1", "ज्ञ"],
        ["2", "द्द"],
        ["4", "द्ध"],
        [">", "श्र"],
        ["?", "रु"],
        ["B", "द्य"],
        ["I", "क्ष्"],
        ["Q", "त्त"],
        ["ß", "द्म"],

        ["q", "त्र"],
        ["„", "ध्र"],
        ["‹", "ङ्घ"],
        ["•", "ड्ड"],
        ["›", "द्र"],
        ["§", "ट्ट"],
        ["°", "ड्ढ"],
        ["¶", "ठ्ठ"],
        ["¿", "रू"],
        ["Å", "हृ"],

        ["Ë", "ङ्ग"],
        ["Ì", "त्र"],
        ["Í", "ङ्क"],
        ["Î", "ङ्ख"],
        ["Ý", "ट्ठ"],
        ["å", "द्व"],

        ["6«", "ट्र"],
        ["7«", "ठ्र"],
        ["8«", "ड्र"],
        ["9«", "ढ्र"],

        ["Ø", "ड़"],
        ["|", "ढ़"],

        ["8Þ", "ड़"],
        ["9Þ", "ढ़"],

        ["S", "क्"],
        ["s", "क"],
        ["V", "ख्"],
        ["v", "ख"],
        ["U", "ग्"],
        ["u", "ग"],
        ["£", "घ्"],
        ["3", "घ"],
        ["ª", "ङ"],

        ["R", "च्"],
        ["r", "च"],
        ["5", "छ"],
        ["H", "ज्"],
        ["h", "ज"],
        ["‰", "झ्"],
        ["´", "झ"],
        ["~", "ञ्"],
        ["`", "ञ"],

        ["6", "ट"],
        ["7", "ठ"],
        ["8", "ड"],
        ["9", "ढ"],
        ["0", "ण्"],

        ["T", "त्"],
        ["t", "त"],
        ["Y", "थ्"],
        ["y", "थ"],
        ["b", "द"],
        ["W", "ध्"],
        ["w", "ध"],
        ["G", "न्"],
        ["g", "न"],

        ["K", "प्"],
        ["k", "प"],
        ["ˆ", "फ्"],
        ["A", "ब्"],
        ["a", "ब"],
        ["E", "भ्"],
        ["e", "भ"],
        ["D", "म्"],
        ["d", "म"],

        ["o", "य"],
        ["/", "र"],
        ["N", "ल्"],
        ["n", "ल"],
        ["J", "व्"],
        ["j", "व"],
        ["Z", "श्"],
        ["z", "श"],
        ["i", "ष्"],
        [":", "स्"],
        [";", "स"],
        ["X", "ह्"],
        ["x", "ह"],

        ["cf‘", "ऑ"],
        ["c‘f", "ऑ"],
        ["cf}", "औ"],
        ["cf]", "ओ"],
        ["cf", "आ"],
        ["c", "अ"],
        ["O{", "ई"],
        ["O", "इ"],
        ["pm", "ऊ"],
        ["p", "उ"],
        ["C", "ऋ"],
        ["P]", "ऐ"],
        ["P", "ए"],

        ["f‘", "ॉ"],
        ["\"", "ू"],
        ["'", "ु"],
        ["+", "ं"],
        ["f", "ा"],
        ["[", "ृ"],
        ["\\", "्"],
        ["]", "े"],
        ["}", "ै"],
        ["F", "ँ"],
        ["L", "ी"],
        ["M", "ः"],

        ["cf", "अ"],
        ["c", "अ"]
    ];


    /* =========================================================
       UNICODE → PREETI
       ========================================================= */

    const unicodeToPreeti = [

        ["‘", "…"],
        ["?", "<"],

        ["क़", "क़"],
        ["ख़", "ख़"],
        ["ग़", "ग़"],
        ["ज़", "ज़"],
        ["ड़", "ड़"],
        ["ढ़", "ढ़"],
        ["फ़", "फ़"],

        ["ॐ", "ç"],
        ["ऽ", "˜"],
        ["।", "."],
        ["m'", "'m"],
        ["m]", "]m"],
        ["mfF", "Fmf"],
        ["mF", "Fm"],

        ["०", ")"],
        ["१", "!"],
        ["२", "@"],
        ["३", "#"],
        ["४", "$"],
        ["५", "%"],
        ["६", "^"],
        ["७", "&"],
        ["८", "*"],
        ["९", "("],

        ["फ्र", "k|m"],
        ["झ", "em"],
        ["फ", "km"],
        ["क्त", "Qm"],
        ["क्र", "qm"],
        ["ल", "N˜"],

        ["ज्ञ्", "¡"],
        ["द्घ", "¢"],
        ["ज्ञ", "1"],
        ["द्द", "2"],
        ["द्ध", "4"],
        ["श्र", ">"],
        ["रु", "?"],
        ["द्य", "B"],
        ["क्ष्", "I"],
        ["क्ष", "If"],
        ["त्त", "Q"],
        ["द्म", "ß"],

        ["त्र", "q"],
        ["ध्र", "„"],
        ["ङ्घ", "‹"],
        ["ड्ड", "•"],
        ["द्र", "›"],
        ["ट्ट", "§"],
        ["ड्ढ", "°"],
        ["ठ्ठ", "¶"],
        ["रू", "¿"],
        ["हृ", "Å"],

        ["ङ्ग", "Ë"],
        ["ङ्क", "Í"],
        ["ङ्ख", "Î"],
        ["ट्ठ", "Ý"],
        ["द्व", "å"],

        ["ट्र", "6«"],
        ["ठ्र", "7«"],
        ["ड्र", "8«"],
        ["ढ्र", "9«"],

        ["्र", "|"],

        ["ड़", "8Þ"],
        ["ढ़", "9Þ"],

        ["क्", "S"],
        ["क", "s"],
        ["ख्", "V"],
        ["ख", "v"],
        ["ग्", "U"],
        ["ग", "u"],
        ["घ्", "£"],
        ["घ", "3"],
        ["ङ", "ª"],

        ["च्", "R"],
        ["च", "r"],
        ["छ", "5"],
        ["ज्", "H"],
        ["ज", "h"],
        ["झ्", "‰"],
        ["झ", "´"],
        ["ञ्", "~"],
        ["ञ", "`"],

        ["ट", "6"],
        ["ठ", "7"],
        ["ड", "8"],
        ["ढ", "9"],
        ["ण्", "0"],
        ["ण", "0f"],

        ["त्", "T"],
        ["त", "t"],
        ["थ्", "Y"],
        ["थ", "y"],
        ["द", "b"],
        ["ध्", "W"],
        ["ध", "w"],
        ["न्", "G"],
        ["न", "g"],

        ["प्", "K"],
        ["प", "k"],
        ["फ्", "ˆ"],
        ["ब्", "A"],
        ["ब", "a"],
        ["भ्", "E"],
        ["भ", "e"],
        ["म्", "D"],
        ["म", "d"],

        ["य", "o"],
        ["र", "/"],
        ["ल्", "N"],
        ["ल", "n"],
        ["व्", "J"],
        ["व", "j"],
        ["श्", "Z"],
        ["श", "z"],
        ["ष्", "i"],
        ["ष", "if"],
        ["स्", ":"],
        ["स", ";"],
        ["ह्", "X"],
        ["ह", "x"],

        ["्य", "Ø"],

        ["ऑ", "cf‘"],
        ["औ", "cf}"],
        ["ओ", "cf]"],
        ["आ", "cf"],
        ["अ", "c"],
        ["ई", "O{"],
        ["इ", "O"],
        ["ऊ", "pm"],
        ["उ", "p"],
        ["ऋ", "C"],
        ["ऐ", "P]"],
        ["ए", "P"],

        ["ॉ", "f‘"],
        ["ू", "\""],
        ["ु", "'"],
        ["ं", "+"],
        ["ा", "f"],
        ["ृ", "["],
        ["्", "\\"],
        ["े", "]"],
        ["ै", "}"],
        ["ँ", "F"],
        ["ी", "L"],
        ["ः", "M"],
        ["ो", "f]"],
        ["ौ", "f}"]
    ];


    /* =========================================================
       UTILITY
       ========================================================= */

    function replaceAll(text, search, replacement) {

        if (!search) {
            return text;
        }

        return text.split(search).join(replacement);
    }


    function sortByLength(a, b) {
        return b[0].length - a[0].length;
    }


    /* =========================================================
       PREETI → UNICODE
       ========================================================= */

    function convertPreetiToUnicode(text) {

        if (!text) {
            return "";
        }

        let result = text;

        /*
         * Longest sequences must be replaced first.
         * Otherwise "cf‘" could be partially converted
         * before the complete sequence is detected.
         */
        const mappings = [...preetiToUnicode]
            .sort(sortByLength);

        mappings.forEach(function (pair) {
            result = replaceAll(result, pair[0], pair[1]);
        });


        /* -----------------------------------------------
           Small "i" / ि correction
           ----------------------------------------------- */

        let position = result.indexOf("l");

        while (position !== -1) {

            const nextChar = result.charAt(position + 1);

            if (nextChar) {
                result = replaceAll(
                    result,
                    "l" + nextChar,
                    nextChar + "ि"
                );
            } else {
                result = result.replace("l", "");
            }

            position = result.indexOf("l", position + 1);
        }


        /*
         * Correct ि् sequence.
         */

        result = result.replace(/ि्(.)/g, "्$1ि");


        /*
         * Correct िं् sequence.
         */

        result = result.replace(/िं्(.)/g, "्$1िं");


        /* -----------------------------------------------
           Reph conversion: { → र्
           ----------------------------------------------- */

        let rPosition = result.indexOf("{");

        const matras = "ाीुूृेैोौंँॅि";

        while (rPosition !== -1) {

            let start = rPosition - 1;

            while (
                start >= 0 &&
                matras.indexOf(result.charAt(start)) !== -1
            ) {
                start--;
            }

            if (start >= 0) {

                const part = result.substring(
                    start,
                    rPosition
                );

                result = result.replace(
                    part + "{",
                    "र्" + part
                );

            } else {

                result = result.replace("{", "र्");
            }

            rPosition = result.indexOf("{");
        }


        /* -----------------------------------------------
           Punctuation
           ----------------------------------------------- */

        result = replaceAll(result, "=", ".");
        result = replaceAll(result, "_", ")");
        result = replaceAll(result, "Ö", "=");
        result = replaceAll(result, "Ù", ";");
        result = replaceAll(result, "…", "‘");
        result = replaceAll(result, "Ú", "’");
        result = replaceAll(result, "Û", "!");
        result = replaceAll(result, "Ü", "%");
        result = replaceAll(result, "æ", "“");
        result = replaceAll(result, "Æ", "”");
        result = replaceAll(result, "±", "+");
        result = replaceAll(result, "-", "(");
        result = replaceAll(result, "<", "?");

        return result;
    }


    /* =========================================================
       UNICODE → PREETI
       ========================================================= */

    function convertUnicodeToPreeti(text) {

        if (!text) {
            return "";
        }

        let result = text;


        /* -----------------------------------------------
           ि MATRA
           ----------------------------------------------- */

        let position = result.indexOf("ि");

        while (position !== -1) {

            if (position > 0) {

                const leftChar =
                    result.charAt(position - 1);

                result = result.replace(
                    leftChar + "ि",
                    "l" + leftChar
                );

                /*
                 * Handle consonant clusters.
                 */

                let lPosition = result.indexOf("l");

                while (lPosition > 0) {

                    if (
                        result.charAt(lPosition - 1) === "्" &&
                        lPosition > 1
                    ) {

                        const previous =
                            result.charAt(lPosition - 2);

                        result = result.replace(
                            previous + "्" + "l",
                            "l" + previous + "्"
                        );

                        lPosition--;
                    } else {
                        break;
                    }
                }

            }

            position = result.indexOf(
                "ि",
                position + 1
            );
        }


        /* -----------------------------------------------
           Reph: र् → { 
           ----------------------------------------------- */

        const matras =
            "ािीुूृेैोौं:ँॅ";

        result += "  ";

        let rephPosition =
            result.indexOf("र्");

        while (rephPosition > 0) {

            let target =
                rephPosition + 2;

            while (
                matras.indexOf(
                    result.charAt(target)
                ) !== -1
            ) {
                target++;
            }


            /*
             * Include conjunct consonants.
             */

            while (
                result.charAt(target + 1) === "्"
            ) {
                target += 2;

                while (
                    matras.indexOf(
                        result.charAt(target)
                    ) !== -1
                ) {
                    target++;
                }
            }


            const part = result.substring(
                rephPosition + 2,
                target
            );

            result = result.replace(
                "र्" + part,
                part + "{"
            );

            rephPosition =
                result.indexOf("र्");
        }


        /* Remove the two temporary spaces. */
        result = result.substring(
            0,
            result.length - 2
        );


        /* -----------------------------------------------
           Unicode → Preeti mapping
           ----------------------------------------------- */

        const mappings = [...unicodeToPreeti]
            .sort(sortByLength);

        mappings.forEach(function (pair) {

            result = replaceAll(
                result,
                pair[0],
                pair[1]
            );

        });


        return result;
    }


    /* =========================================================
       BUTTON FUNCTIONS
       ========================================================= */

    window.PUConvertToUnicode = function () {

        const input =
            document.getElementById("preeti_conv").value;

        const output =
            convertPreetiToUnicode(input);

        document.getElementById(
            "unicode_conv"
        ).value = output;

    };


    window.PUConvertToPreeti = function () {

        const input =
            document.getElementById("unicode_conv").value;

        const output =
            convertUnicodeToPreeti(input);

        document.getElementById(
            "preeti_conv"
        ).value = output;

    };


    /* =========================================================
       COPY FUNCTION
       ========================================================= */

    window.PUCopy = async function (id) {

        const textarea =
            document.getElementById(id);

        const text = textarea.value;

        if (!text) {
            PUShowStatus("Nothing to copy.");
            return;
        }


        try {

            if (
                navigator.clipboard &&
                window.isSecureContext
            ) {

                await navigator.clipboard.writeText(text);

            } else {

                textarea.focus();
                textarea.select();

                const success =
                    document.execCommand("copy");

                if (!success) {
                    throw new Error("Copy failed");
                }
            }

            PUShowStatus("✓ Copied to clipboard");

        } catch (error) {

            textarea.focus();
            textarea.select();

            PUShowStatus(
                "Please press Ctrl+C / ⌘+C to copy."
            );
        }
    };


    /* =========================================================
       STATUS MESSAGE
       ========================================================= */

    function PUShowStatus(message) {

        const status =
            document.getElementById("pu-status");

        status.textContent = message;
        status.classList.add("show");

        clearTimeout(
            status._timer
        );

        status._timer = setTimeout(
            function () {
                status.classList.remove("show");
            },
            1800
        );
    }


    /* =========================================================
       KEYBOARD SHORTCUTS
       Alt+C = Preeti → Unicode
       Alt+P = Unicode → Preeti
       ========================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.altKey &&
                event.key.toLowerCase() === "c"
            ) {

                event.preventDefault();
                PUConvertToUnicode();

            }

            if (
                event.altKey &&
                event.key.toLowerCase() === "p"
            ) {

                event.preventDefault();
                PUConvertToPreeti();

            }

        }
    );

})();
 
