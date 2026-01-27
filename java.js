let plus = document.getElementById("plus");
        let sub = document.getElementById("sub");
        let kon = document.getElementById("kon");
        let jek = document.getElementById("jek");
        let son = document.getElementById("son");
        let text = document.getElementById("text");

        function sum(a, b) {
            return (a + b)
        }
        function sum2(a, b) {
            return (a - b)
        }
        function sum3(a, b) {
            return (a * b)
        }
        function sum4(a, b) {
            return (a / b)
        }

        plus.addEventListener("click", function() {
            let number1 = Number(document.getElementById("num1").value);
            let number2 = Number(document.getElementById("num2").value);
            let total = sum(number1, number2);
            text.innerText = "លទ្ធផល​ = " + total;
        })

        sub.addEventListener("click", function() {
            let number1 = Number(document.getElementById("num1").value);
            let number2 = Number(document.getElementById("num2").value);
            let total = sum2(number1, number2);
            text.innerText = "លទ្ធផល​ = " + total;
        })

        kon.addEventListener("click", function() {
            let number1 = Number(document.getElementById("num1").value);
            let number2 = Number(document.getElementById("num2").value);
            let total = sum3(number1, number2);
            text.innerText = "លទ្ធផល​ = " + total;
        })

        jek.addEventListener("click", function() {
            let number1 = Number(document.getElementById("num1").value);
            let number2 = Number(document.getElementById("num2").value);
            let total = sum4(number1, number2);
            if (number2 === 0) {
                text.innerText = "លទ្ធផល​ = " + 0;
            } else {
                text.innerText = "លទ្ធផល​ = " + total;
            }
        })