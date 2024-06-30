
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('chemical_dehydrator')
        .category('chemical_dehydrator')
        .setEUIO('in')
        .setMaxIOSize(2, 9, 2, 3)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    // Greenhouse
    event.create('chemical_dehydrator', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV)
        .recipeType('chemical_dehydrator', true, true)
        .tankScalingFunction(tier => tier * 3200)
        .workableTieredHullRenderer("gtceu:block/machines/chemical_reactor");

});