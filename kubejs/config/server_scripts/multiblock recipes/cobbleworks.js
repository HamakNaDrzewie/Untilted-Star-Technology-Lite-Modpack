
ServerEvents.recipes(event => {

    event.recipes.gtceu.assembler('cobbleworks')
        .itemInputs('gtceu:iv_machine_hull', '2x #gtceu:circuits/iv', '2x gtceu:double_maraging_steel_300_plate' ,'4x gtceu:tungsten_carbide_gear')
        .itemOutputs('gtceu:cobbleworks')
        .duration(1200)
        .EUt(1240);

    const overclock = [256, 512, 1024, 2048];

    for (let i = 0; i < 4; i++) {
        event.recipes.gtceu.cobbleworks(`deepslate_${i}`)
            .chancedFluidInput('minecraft:water 1', 1, 0)
            .chancedFluidInput('minecraft:lava 1', 1, 0)
            .itemOutputs(`${overclock[i]}x exdeorum:crushed_deepslate`)
            .duration(20 * (i + 1))
            .EUt(320)
            .circuit(i);


        event.recipes.gtceu.cobbleworks(`blackstone_to_crushed_blackstone_${i}`)
            .chancedFluidInput('exdeorum:witch_water 1', 1, 0)
            .chancedFluidInput('minecraft:lava 1', 1, 0)
            .itemOutputs(`${overclock[i]}x exdeorum:crushed_blackstone`)
            .duration(20 * (i + 1))
            .EUt(320)
            .circuit(i);
    }

});