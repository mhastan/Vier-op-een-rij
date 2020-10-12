export class FourInARowView{
    constructor(e)
    {
        document.getElementById("startButton").addEventListener("click", (e) => this.onClickOnStart(e));

    }
    onClickOnStart(e){
        this.giveNames(player1, player2)
        this.removeDivs();
        this.generateGrid(player1, player2);

    }

        // Haalt de divs weg, 
        removeDivs()
        {
            document.getElementById("playerInputs").style.display = 'none';

        }
        coupleModel(model){
            model.addEventListener()
            
        }


        giveNames(p1, p2)
        {
            if(p1.value === "") {
                p1.value = "Player 1";
            } 

            if(p2.value === "") {
                p2.value = "Player 2";
            }

            var createElementLeft = document.createElement("h3");
            var leftUserName = document.createTextNode(p1.value);
            createElementLeft.appendChild(leftUserName);
            var getLeftDiv = document.getElementById("left");
            getLeftDiv.appendChild(createElementLeft);

            var createElementRight = document.createElement("h3");
            var rightUserName = document.createTextNode(p2.value);
            createElementRight.appendChild(rightUserName);
            var getRightDiv = document.getElementById("right");
            getRightDiv.appendChild(createElementRight);

        }

        generateGrid(p1, p2)
            {

            let left = document.getElementById("left").style.visibility = 'visble';
            let right = document.getElementById("right").style.visibility = 'visble';


            let headingOne = document.createElement("H1");
            let headingText = document.createTextNode(`${p1.value} vs ${p2.value}`);

            headingOne.appendChild(headingText);
            document.body.appendChild(headingOne);



            for (let i = 0; i < 42; i++) 
            {
                document.querySelector("board").insertAdjacentHTML('beforeend', `<div id='${i}' class='board-item'></div>`);
                // klik detecteren
                let box = document.getElementById(i);
                box.addEventListener('click', () => {
                    let x = document.getElementById(i).innerHTML = "KLIK";
                    let id = i;
                });
            }
        }

        addBoardHandler(handler) {
            document.querySelector('board').addEventListener("click", handler)
            
        }

        getClickedColumnId(e) {
            return e.target.id%7;
            
        }
        coupleModel(model) {
            model.addEventListener("modelchanged",(e)=>{
                this.updateView(e)
            } )
        }

        updateView(e){
           let moves = e.renderModel;
           console.log(moves)
           
        }
    }

