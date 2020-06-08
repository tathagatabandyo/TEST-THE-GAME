var a, b, name1, name2;

        document.querySelector("#play").addEventListener("click", ludo);
        document.querySelector("#reload").addEventListener("click", re_load);
        // clear();

        function re_load() {
            location.reload();
        }
        function clear() {
            
            document.getElementById("p1").setAttribute("style", "display:none");
            document.getElementById("p2").setAttribute("style", "display:none");

            document.getElementById("b1").setAttribute("style", "display:none");
            document.getElementById("b2").setAttribute("style", "display:none");
            document.getElementById("b3").setAttribute("style", "display:none");
            document.getElementById("b4").setAttribute("style", "display:none");
            document.getElementById("b5").setAttribute("style", "display:none");
            document.getElementById("b6").setAttribute("style", "display:none");

            document.getElementById("d1").setAttribute("style", "display:none");
            document.getElementById("d2").setAttribute("style", "display:none");
            document.getElementById("d3").setAttribute("style", "display:none");
            document.getElementById("d4").setAttribute("style", "display:none");
            document.getElementById("d5").setAttribute("style", "display:none");
            document.getElementById("d6").setAttribute("style", "display:none");

        }
        
        function b_1() {
            document.getElementById("m1").setAttribute("style", "grid-template-columns: repeat(1,45px);grid-template-rows: repeat(1,45px);");
            document.getElementById("b1").setAttribute("style", "display:block");
        }
        function d_1() {
            document.getElementById("m2").setAttribute("style", "grid-template-columns: repeat(1,45px);grid-template-rows: repeat(1,45px);");
            document.getElementById("d1").setAttribute("style", "display:block");
        }
        function b_2() {
            document.getElementById("m1").setAttribute("style", "grid-template-columns: repeat(2,45px);grid-template-rows: repeat(1,45px);");
            document.getElementById("b1").setAttribute("style", "display:block");
            document.getElementById("b2").setAttribute("style", "display:block");
        }
        function d_2() {
            document.getElementById("m2").setAttribute("style", "grid-template-columns: repeat(2,45px);grid-template-rows: repeat(1,45px);");
            document.getElementById("d1").setAttribute("style", "display:block");
            document.getElementById("d2").setAttribute("style", "display:block");
        }
        function b_3() {
            document.getElementById("m1").setAttribute("style", "grid-template-columns: repeat(3,45px);grid-template-rows: repeat(3,45px);");
            document.getElementById("b1").setAttribute("style", "display:block;grid-row: 3/4;grid-column: 1/2;");
            document.getElementById("b2").setAttribute("style", "display:block;grid-row: 2/3;grid-column: 2/3;");
            document.getElementById("b3").setAttribute("style", "display:block;grid-row: 1/2;grid-column: 3/4;");
        }
        function d_3() {
            document.getElementById("m2").setAttribute("style", "grid-template-columns: repeat(3,45px);grid-template-rows: repeat(3,45px);");
            document.getElementById("d1").setAttribute("style", "display:block;grid-row: 3/4;grid-column: 1/2;");
            document.getElementById("d2").setAttribute("style", "display:block;grid-row: 2/3;grid-column: 2/3;");
            document.getElementById("d3").setAttribute("style", "display:block;grid-row: 1/2;grid-column: 3/4;");
        }
        function b_4() {
            document.getElementById("m1").setAttribute("style", "grid-template-columns: repeat(2,45px);grid-template-rows: repeat(2,45px);align-content: space-around;");
            document.getElementById("b1").setAttribute("style", "display:block;");
            document.getElementById("b2").setAttribute("style", "display:block;");
            document.getElementById("b3").setAttribute("style", "display:block;");
            document.getElementById("b4").setAttribute("style", "display:block;");
        }
        function d_4() {
            document.getElementById("m2").setAttribute("style", "grid-template-columns: repeat(2,45px);grid-template-rows: repeat(2,45px);align-content: space-around;");
            document.getElementById("d1").setAttribute("style", "display:block;");
            document.getElementById("d2").setAttribute("style", "display:block;");
            document.getElementById("d3").setAttribute("style", "display:block;");
            document.getElementById("d4").setAttribute("style", "display:block;");

        }
        function b_5() {
            document.getElementById("m1").setAttribute("style", "grid-template-columns: repeat(3,45px);grid-template-rows: repeat(3,45px);");
            document.getElementById("b1").setAttribute("style", "display:block;grid-row: 1/2;grid-column: 1/2;");
            document.getElementById("b2").setAttribute("style", "display:block;grid-row: 1/2;grid-column: 3/4;");
            document.getElementById("b3").setAttribute("style", "display:block;grid-row: 2/3;grid-column: 2/3;");
            document.getElementById("b4").setAttribute("style", "display:block;grid-row: 3/4;grid-column: 1/2;");
            document.getElementById("b5").setAttribute("style", "display:block;grid-row: 3/4;grid-column: 3/4;");
        }
        function d_5() {
            document.getElementById("m2").setAttribute("style", "grid-template-columns: repeat(3,45px);grid-template-rows: repeat(3,45px);");
            document.getElementById("d1").setAttribute("style", "display:block;grid-row: 1/2;grid-column: 1/2;");
            document.getElementById("d2").setAttribute("style", "display:block;grid-row: 1/2;grid-column: 3/4;");
            document.getElementById("d3").setAttribute("style", "display:block;grid-row: 2/3;grid-column: 2/3;");
            document.getElementById("d4").setAttribute("style", "display:block;grid-row: 3/4;grid-column: 1/2;");
            document.getElementById("d5").setAttribute("style", "display:block;grid-row: 3/4;grid-column: 3/4;");

        }
        function b_6() {
            document.getElementById("m1").setAttribute("style", "grid-template-columns: repeat(2,45px);;grid-template-rows: repeat(3,45px);");
            document.getElementById("b1").setAttribute("style", "display:block");
            document.getElementById("b2").setAttribute("style", "display:block");
            document.getElementById("b3").setAttribute("style", "display:block");
            document.getElementById("b4").setAttribute("style", "display:block");
            document.getElementById("b5").setAttribute("style", "display:block");
            document.getElementById("b6").setAttribute("style", "display:block");
        }
        function d_6() {
            document.getElementById("m2").setAttribute("style", "grid-template-columns: repeat(2,45px);;grid-template-rows: repeat(3,45px);");
            document.getElementById("d1").setAttribute("style", "display:block");
            document.getElementById("d2").setAttribute("style", "display:block");
            document.getElementById("d3").setAttribute("style", "display:block");
            document.getElementById("d4").setAttribute("style", "display:block");
            document.getElementById("d5").setAttribute("style", "display:block");
            document.getElementById("d6").setAttribute("style", "display:block");
        }

        function draw() {
            document.getElementById("re").innerText = "Draw The Game";
        }
        function player1() {
            document.getElementById("re").innerText = name1 + " Player Is Winner";
        }
        function player2() {
            document.getElementById("re").innerText = name2 + " Player Is Winner";
        }
        function ludo() {
            name1 = document.getElementById("r1").value;
            name2 = document.getElementById("r2").value;
            if (name1 == "") {
                document.getElementById("a2").innerText = "";
                document.getElementById("a1").innerText = "Please Fill Player Name";
            }
            else if(name1.length<3) {
                document.getElementById("a2").innerText = "";
                document.getElementById("a1").innerText = "Player Name Must Be 3 Character";
            }
            else if(24<name1.length) {
                document.getElementById("a2").innerText = "";
                document.getElementById("a1").innerText = "Player Name Must Be less then 24 Character";
            }
            else if (name2 == "") {
                document.getElementById("a1").innerText = "";
                document.getElementById("a2").innerText = "Please Fill Player Name";
            }
            else if(name2.length<3) {
                document.getElementById("a1").innerText = "";
                document.getElementById("a2").innerText = "Player Name Must Be 3 Character";
            }
            else if(24<name2.length) {
                document.getElementById("a1").innerText = "";
                document.getElementById("a2").innerText = "Player Name Must Be less then 24 Character";
            }
            else {
                document.getElementById("a1").innerText = "";
                document.getElementById("a2").innerText = "";

                

                a = Math.floor(Math.random() * 6) + 1;
                b = Math.floor(Math.random() * 6) + 1;
                console.log("a = " +a );
                console.log("b = " +b );

                // a=5;
                // b=5;
                if (a == 1 && b == 1) {
                    clear();
                    b_1();
                    d_1();
                    draw();
                }

                else if (a == 2 && b == 2) {
                    clear();
                    b_2();
                    d_2();
                    draw()
                }
                else if (a == 3 && b == 3) {
                    clear();
                    b_3();
                    d_3();
                    draw()
                }

                else if (a == 4 && b == 4) {
                    clear();
                    b_4();
                    d_4();
                    draw();
                }
                else if (a == 5 && b == 5) {
                    clear();
                    b_5();
                    d_5();
                    draw();
                }
                else if (a == 6 && b == 6) {
                    clear();
                    b_6();
                    d_6();
                    draw();
                }
                else if (a == 1 && b == 2) {
                    clear();
                    b_1();
                    d_2();
                    player2();
                }

                else if (a == 1 && b == 3) {
                    clear();
                    b_1();
                    d_3();
                    player2();
                }

                else if (a == 1 && b == 4) {
                    clear();
                    b_1();
                    d_4();
                    player2();
                }

                else if (a == 1 && b == 5) {
                    clear();
                    b_1();
                    d_5();
                    player2();
                }
                else if (a == 1 && b == 6) {
                    clear();
                    b_1();
                    d_6();
                    player2();
                }

                else if (a == 2 && b == 1) {
                    clear();
                    b_2();
                    d_1();
                    player1();
                }
                else if (a == 2 && b == 3) {
                    clear();
                    b_2();
                    d_3();
                    player2();
                }
                else if (a == 2 && b == 4) {
                    clear();
                    b_2();
                    d_4();
                    player2();
                }
                else if (a == 2 && b == 5) {
                    clear();
                    b_2();
                    d_5();
                    player2();
                }
                else if (a == 2 && b == 6) {
                    clear();
                    b_2();
                    d_6();
                    player2();
                }

                else if (a == 3 && b == 1) {
                    clear();
                    b_3();
                    d_1();
                    player1();
                }
                else if (a == 3 && b == 2) {
                    clear();
                    b_3();
                    d_2();
                    player1();
                }
                else if (a == 3 && b == 4) {
                    clear();
                    b_3();
                    d_4();
                    player2();
                }
                else if (a == 3 && b == 5) {
                    clear();
                    b_3();
                    d_5();
                    player2();
                }
                else if (a == 3 && b == 6) {
                    clear();
                    b_3();
                    d_6();
                    player2();
                }

                else if (a == 4 && b == 1) {
                    clear();
                    b_4();
                    d_1();
                    player1();
                }
                else if (a == 4 && b == 2) {
                    clear();
                    b_4();
                    d_2();
                    player1();
                }
                else if (a == 4 && b == 3) {
                    clear();
                    b_4();
                    d_3();
                    player1();
                }
                else if (a == 4 && b == 5) {
                    clear();
                    b_4();
                    d_5();
                    player2();
                }
                else if (a == 4 && b == 6) {
                    clear();
                    b_4();
                    d_6();
                    player2();
                }

                else if (a == 5 && b == 1) {
                    clear();
                    b_5();
                    d_1();
                    player1();
                }
                else if (a == 5 && b == 2) {
                    clear();
                    b_5();
                    d_2();
                    player1();
                }
                else if (a == 5 && b == 3) {
                    clear();
                    b_5();
                    d_3();
                    player1();
                }
                else if (a == 5 && b == 4) {
                    clear();
                    b_5();
                    d_4();
                    player1();
                }
                else if (a == 5 && b == 6) {
                    clear();
                    b_5();
                    d_6();
                    player2();
                }

                else if (a == 6 && b == 1) {
                    clear();
                    b_6();
                    d_1();
                    player1();
                }
                else if (a == 6 && b == 2) {
                    clear();
                    b_6();
                    d_2();
                    player1();
                }
                else if (a == 6 && b == 3) {
                    clear();
                    b_6();
                    d_3();
                    player1();
                }
                else if (a == 6 && b == 4) {
                    clear();
                    b_6();
                    d_4();
                    player1();
                }
                else if (a == 6 && b == 5) {
                    clear();
                    b_6();
                    d_5();
                    player1();
                }
            }
        }