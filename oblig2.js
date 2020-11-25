// controller

    // stolpe nummer fra venstre markeres ved click, barNo kalles på i addBar onclick.
            function selectedBar(barNo) {
                if (barNo == chosenBar) {
                chosenBar = '';
                } else {
                chosenBar = barNo;
                }
                show();
            }

    // legger til stolpe med ønsket verdi (0-10) i input feltet.
            function addBar() {
                if (inputValue > 10) {
                    alert('Tallet må være 0-10, prøv igjen!')
                } else if (inputValue <= 10) {
                    numbers.push(inputValue);
                }
                show();
            }

    // endrer markert stolpe til ønsket verdi via input feltet.
    function changeBar() {
        if (inputValue > 10) {
            inputValue = 5;
            alert('Tallet må være 0-10, prøv igjen!');
        } else if (inputValue < 10 && inputValue > 0) {
            numbers[chosenBar - 1] = inputValue;
        }
        show();
    }

            // function changeBar() {
            //     if (inputValue > 10 && inputValue <= 0) {
            //         alert('Tallet må være 0-10, prøv igjen!');
            //     } else if (inputValue <= 10) {
            //         numbers[chosenBar - 1] = parseInt(inputValue);
            //         //parseInt trenger ikke '' | eksempel: feil -> '1001' riktig -> 1001
            //     }
            //     show();
            // }

    // fjerner markert stolpe.
            function removeBar() {
                numbers.splice(chosenBar - 1, 1);
                show();
            }
