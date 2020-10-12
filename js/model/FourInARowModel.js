import {ModelChangedEvent} from "./ModelChangedEvent.js";

export class FourInARowModel extends EventTarget {
    
    constructor() {
        super();
        this.playerId = 1;
        this.moves =    [
                            [0,0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0,0]

                        ]


    }


    acceptMove(id) {
        this.moves[1][id] = this.playerId;
        this.dispatchEvent(new ModelChangedEvent(this.moves));
    }


}