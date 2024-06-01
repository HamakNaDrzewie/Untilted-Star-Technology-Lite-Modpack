
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('sluice')
        .category('sluice')
        .setEUIO('in')
        .setMaxIOSize(0, 9, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    // Greenhouse
    event.create('sluice', 'simple', GTValues.ULV)
        .recipeType('sluice', true, true)
        .tankScalingFunction(tier => tier * 3200)
        .workableTieredHullRenderer("gtceu:block/machines/extruder");

});