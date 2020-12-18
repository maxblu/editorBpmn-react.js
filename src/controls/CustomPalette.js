export default class CustomPalette {
  constructor(create, elementFactory, palette, translate) {
    this.create = create;
    this.elementFactory = elementFactory;
    this.translate = translate;

    palette.registerProvider(this);
  }

  getPaletteEntries(element) {
    const { create, elementFactory, translate } = this;

    function createCTEServiceTask(event) {
      console.log(event);

      const shape = elementFactory.createShape({
        type: "bpmn:ServiceTask",
        name: "CTE",
        id: "cte", //+ Math.random(),
      });
      create.start(event, shape);
    }
    function createSBIFServiceTask(event) {
      const shape = elementFactory.createShape({
        type: "bpmn:ServiceTask",
        name: "SBIF",
        id: "sbif",
      });
      create.start(event, shape);
    }
    function createEquifaxServiceTask(event) {
      const shape = elementFactory.createShape({
        type: "bpmn:ServiceTask",
        name: "Equifax",
        id: "equifax",
      });
      create.start(event, shape);
    }
    function createRiskEvaluationServiceTask(event) {
      const shape = elementFactory.createShape({
        type: "bpmn:ServiceTask",
        name: "Risk evaluation",
        id: "risk-evaluation",
      });
      create.start(event, shape);
    }

    return {
      "create.cte-task": {
        group: "activity",
        className: "bpmn-icon-service-task",
        title: translate("Create CTE"),
        action: {
          dragstart: createCTEServiceTask,
          click: createCTEServiceTask,
        },
      },
      "create.sbif-task": {
        group: "activity",
        className: "bpmn-icon-service-task",
        title: translate("Create SBIF"),
        action: {
          dragstart: createSBIFServiceTask,
          click: createSBIFServiceTask,
        },
      },
      "create.equifax-task": {
        group: "activity",
        className: "bpmn-icon-service-task",
        title: translate("Create Equifax"),
        action: {
          dragstart: createEquifaxServiceTask,
          click: createEquifaxServiceTask,
        },
      },
      "create.risk-eval-task": {
        group: "activity",
        className: "bpmn-icon-service-task",
        title: translate("Create Risk Evaluation"),
        action: {
          dragstart: createRiskEvaluationServiceTask,
          click: createRiskEvaluationServiceTask,
        },
      },
    };
  }
}

CustomPalette.$inject = ["create", "elementFactory", "palette", "translate"];
