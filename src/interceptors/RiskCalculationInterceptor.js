import CommandInterceptor from "diagram-js/lib/command/CommandInterceptor";
import {is} from "bpmn-js/lib/util/ModelUtil";
import cloneDeep from 'lodash'

import inherits from "inherits";
import DefaultNameBehavior from "./DefaultNameBehaviour";

var LOW_PRIORITY = 500;
var defaultName = "DEFAULT_NAME";

function RiskCalculationInterceptor(injector) {
    injector.invoke(CommandInterceptor, this);
    this.postExecuted(
        ["elements.create"],
        LOW_PRIORITY,
        function (context) {
            let old = cloneDeep(context)
            old.elements.forEach(function (shape) {
                if (is(shape, "bpmn:ServiceTask") && shape.id === 'cte') {
                    const element = context.elements.find(element => element.id === 'ruleEvaluator');
                    console.log('cteeeee');

                    if (element == null || element == undefined) {
                        context.elements.delete(shape);
                    }else{

                    }
                    shape.businessObject.enlaceXml = 'shape.name';
                    shape.businessObject.id = shape.id;
                }
            });
        },
        true
    );
}

RiskCalculationInterceptor.$inject = ["injector"];

inherits(RiskCalculationInterceptor, CommandInterceptor);

module.exports = {
    __init__: ["RiskCalculationInterceptor"],
    RiskCalculationInterceptor: ["type", RiskCalculationInterceptor]
};
