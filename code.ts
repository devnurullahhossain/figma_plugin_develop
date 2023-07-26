figma.showUI(__html__);

figma.ui.resize(500, 500);

figma.ui.onmessage = (pluginMessage) => {
  const postComponentSet = figma.root.findOne(
    (node) => node.type == "COMPONENT_SET" && node.name == "post"
  ) as ComponentSetNode;
  console.log(postComponentSet);
  console.log(postComponentSet.children);
  console.log(postComponentSet.name);

  console.log(pluginMessage.name);
  console.log(pluginMessage.username);
  console.log(pluginMessage.description);
  console.log(pluginMessage.darkModeState);
  console.log(pluginMessage.imageVariant);

  if (pluginMessage.darkModeState === true) {
    console.log("Welcome to the dark side.");
  } else {
    console.log("Myself Mr. LightSide");
  }

  figma.closePlugin();
};
