import { type ComponentConfig } from "@superblocksteam/custom-components";

export default {
  // DO NOT CHANGE THE ID ONCE THE COMPONENT HAS BEEN REGISTERED!
  id: "6a3f19cd-0309-4598-b7cd-0ce10af87f15",
  name: "LaunchdarklyComponent",
  displayName: "Launchdarkly Component",
  componentPath: "components/LaunchdarklyComponent/component.tsx",
  properties: [
    {
      path: "launchdarklyClientId",
      dataType: "string",
      propertiesPanelDisplay: {
        label: "Launchdarkly Client ID",
        controlType: "text",
      },
      isExternallyReadable: true,
      isExternallySettable: true,
    },
    {
      path: "configs",
      dataType: "any",
      propertiesPanelDisplay: {
        label: "JSON config (example: { featuer1: ['Component']  })",
        controlType: "js-expr",
      },
      isExternallyReadable: true,
      isExternallySettable: true,
    },
  ],
  events: [],
  gridDimensions: {
    initialColumns: 10,
    initialRows: 5,
  },
} satisfies ComponentConfig;
