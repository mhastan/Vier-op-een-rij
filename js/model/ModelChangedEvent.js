export class ModelChangedEvent extends Event{

    static CHANGED = "modelchanged";

    constructor(renderModel) {
        super(ModelChangedEvent.CHANGED);
        this.renderModel = renderModel;
    }
}