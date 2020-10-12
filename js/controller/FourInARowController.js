import {FourInARowView} from "../view/FourInARowView.js";
import {FourInARowModel} from "../model/FourInARowModel.js"

export class FourInARowController {

    constructor (){
        this.view = new FourInARowView();
        this.model = new FourInARowModel();
        this.view.addBoardHandler((e)=>{
            this.onClickedInBoard(e)
        })
        this.view.coupleModel(this.model);
    }


    onNamesGiven(){
        
    }

    onClickedInBoard(e){
        //console.log(e.target.id);
        let id = this.view.getClickedColumnId(e)
        this.model.acceptMove(id)
    }

    
}