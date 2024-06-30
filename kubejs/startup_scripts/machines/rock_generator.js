
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('rock_generator')
        .category('rock_generator')
        .setEUIO('in')
        .setMaxIOSize(1, 9, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    // Greenhouse
    event.create('rock_generator', 'simple', GTValues.LV)
        .recipeType('rock_generator', true, true)
        .tankScalingFunction(tier => tier * 3200)
        .workableTieredHullRenderer("gtceu:block/machines/extruder");

});