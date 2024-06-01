GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('industrial_primitive_blast_furnace')
        .category('industrial_primitive_blast_furnace')
        .setEUIO('in')
        .setMaxIOSize(3, 2, 2, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FIRE);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('industrial_primitive_blast_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('industrial_primitive_blast_furnace')
        .appearanceBlock(GTBlocks.CASING_PRIMITIVE_BRICKS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('   sbbbs   ', '   sIffs   ', '   sFFFs   ', '   sOFos   ', '   sbbbs   ')
            .aisle(' A bFFFb A ', ' B F   F B ', ' BBF   FBB ', '   F   F   ', '   bFFFb   ')
            .aisle('AAAbFFFbAAA', 'B BF   FB B', 'B  P   P  B', ' BBF   FBB ', '   bFMFb   ')
            .aisle(' A bFFFb A ', ' B F   F B ', ' BBF   FBB ', '   F   F   ', '   bFFFb   ')
            .aisle('   sbbbs   ', '   sFFFs   ', '   sFCFs   ', '   sFFFs   ', '   sbbbs   ')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks(GTBlocks.CASING_PRIMITIVE_BRICKS.get()))
            .where('s', Predicates.blocks('gtceu:steel_frame'))
            .where('b', Predicates.blocks('gtceu:bronze_frame'))
            .where('B', Predicates.blocks('gtceu:steam_machine_casing'))
            .where('A', Predicates.blocks(GTBlocks.FIREBOX_BRONZE.get()))
            .where('P', Predicates.blocks(GTBlocks.CASING_BRONZE_PIPE.get()))
            .where('I', Predicates.abilities(PartAbility.IMPORT_ITEMS))
            .where('f', Predicates.abilities(PartAbility.IMPORT_FLUIDS))
            .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS))
            .where('o', Predicates.abilities(PartAbility.EXPORT_FLUIDS))
            .where('M', Predicates.abilities(PartAbility.MUFFLER))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_primitive_bricks",
        "gtceu:block/multiblock/primitive_blast_furnace", false);
});