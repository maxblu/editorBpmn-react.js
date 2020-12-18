import CommandInterceptor from "diagram-js/lib/command/CommandInterceptor";
import { is } from "bpmn-js/lib/util/ModelUtil";

import inherits from "inherits";

var LOW_PRIORITY = 500;

var defaultName = "DEFAULT_NAME";

export default function DefaultNameBehavior(injector) {
    injector.invoke(CommandInterceptor, this);
    this.postExecuted(
        ["elements.create"],
        LOW_PRIORITY,
        function (context) {
            context.elements.forEach(function (shape) {
                console.log(shape.name)
                if (is(shape, "bpmn:ServiceTask") && shape.name !=null) {
                    shape.businessObject.name = shape.name;
                    shape.businessObject.id = shape.id;
                }
            });
        },
        true
    );
}

DefaultNameBehavior.$inject = ["injector"];

inherits(DefaultNameBehavior, CommandInterceptor);
