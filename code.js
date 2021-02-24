function main() {
    if (figma.currentPage.selection.length === 0) {
        figma.closePlugin("No nodes selected");
        return;
    }
    const group = figma.group(figma.currentPage.selection, figma.currentPage);
    group.x = (-1 * group.width) / 2;
    group.y = (-1 * group.height) / 2;
    for (const node of group.children) {
        figma.currentPage.appendChild(node);
    }
}
main();
// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
