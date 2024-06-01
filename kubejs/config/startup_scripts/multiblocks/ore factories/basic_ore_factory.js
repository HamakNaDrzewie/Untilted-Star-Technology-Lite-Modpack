
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('basic_kinetic_ore_factory')
        .category('basic_kinetic_ore_factory')
        .setEUIO('in')
        .setMaxIOSize(1, 2, 1, 0)
        .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('basic_kinetic_ore_factory', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('basic_kinetic_ore_factory')
		.recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK))
		.appearanceBlock(GTBlocks.CASING_PRIMITIVE_BRICKS)
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('MKM','MMM','AAA')
			.aisle('MMM','MWM','A.A')
			.aisle('MMM','M+M','AAA')
			.where('M', Predicates.blocks(GTBlocks.CASING_PRIMITIVE_BRICKS.get())
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1))
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1)))
			.where('A', Predicates.blocks('gtceu:bronze_machine_casing'))
			.where('+', Predicates.controller(Predicates.blocks(definition.get())))
            .where('K', Predicates.abilities(PartAbility.INPUT_KINETIC))
            .where('W', Predicates.fluids('minecraft:water'))
			.where('.', Predicates.air())
		.build())
		.workableCasingRenderer('gtceu:block/casings/solid/machine_primitive_bricks', 'gtceu:block/multiblock/primitive_blast_furnace', false);
});