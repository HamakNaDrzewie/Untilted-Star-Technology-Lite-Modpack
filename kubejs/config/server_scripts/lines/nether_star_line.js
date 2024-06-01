
ServerEvents.recipes(event => {

    event.recipes.gtceu.chemical_reactor('blizz_dust')
        .itemInputs('gtceu:cobalt_dust')
        .inputFluids('gtceu:fluorine 1000')
        .itemOutputs('thermal:blizz_powder')
        .duration(200)
        .EUt(7680);

    event.recipes.gtceu.chemical_reactor('blitz_dust')
        .itemInputs('gtceu:platinum_dust')
        .inputFluids('gtceu:deuterium 1000')
        .itemOutputs('thermal:blitz_powder')
        .duration(200)
        .EUt(1920);

    event.recipes.gtceu.chemical_reactor('basalz_dust')
        .itemInputs('gtceu:rhodium_dust')
        .inputFluids('gtceu:helium 1000')
        .itemOutputs('thermal:basalz_powder')
        .duration(200)
        .EUt(480);

    event.recipes.gtceu.macerator('basalz_powder')
        .itemInputs('thermal:basalz_rod')
        .itemOutputs('4x thermal:basalz_powder')
        .duration(88)
        .EUt(2);

    event.recipes.gtceu.macerator('blizz_powder')
        .itemInputs('thermal:blizz_rod')
        .itemOutputs('4x thermal:blizz_powder')
        .duration(88)
        .EUt(2);

    event.recipes.gtceu.macerator('blitz_powder')
        .itemInputs('thermal:blitz_rod')
        .itemOutputs('4x thermal:blitz_powder')
        .duration(88)
        .EUt(2);

    event.recipes.gtceu.mixer('earth_charge')
        .itemInputs('#forge:dusts/coal', 'minecraft:gunpowder', 'thermal:basalz_powder')
        .itemOutputs('3x thermal:earth_charge')
        .duration(100)
        .EUt(30);

    event.recipes.gtceu.mixer('ice_charge')
        .itemInputs('#forge:dusts/coal', 'minecraft:gunpowder', 'thermal:blizz_powder')
        .itemOutputs('3x thermal:ice_charge')
        .duration(100)
        .EUt(30);

    event.recipes.gtceu.mixer('lightning_charge')
        .itemInputs('#forge:dusts/coal', 'minecraft:gunpowder', 'thermal:blitz_powder')
        .itemOutputs('3x thermal:lightning_charge')
        .duration(100)
        .EUt(30);

    event.recipes.gtceu.mixer('nether_star_essence')
        .itemInputs('8x minecraft:fire_charge', '8x thermal:earth_charge', '8x thermal:ice_charge', '8x thermal:lightning_charge')
        .chancedOutput('gtceu:small_nether_star_dust', 8000, 500)
        .duration(360)
        .EUt(512);

});