
ServerEvents.recipes(event => {
    event.remove({ type: 'gtceu:rock_breaker' });

    event.shaped(Item.of('gtceu:lv_rock_generator'), [
        'WWW',
        'WMW',
        'WWW'
    ], {
        M: '#forge:tools/mallets',
        W: '#minecraft:logs',
    });

    event.recipes.gtceu.rock_generator('generate_cobblestone')
        .circuit(1)
        .itemOutputs('minecraft:cobblestone')
        .duration(100)
        .EUt(2);

    event.recipes.gtceu.rock_generator('generate_blackstone')
        .circuit(2)
        .itemOutputs('minecraft:blackstone')
        .duration(100)
        .EUt(2);

    event.recipes.gtceu.rock_generator('generate_dirt')
        .circuit(3)
        .itemOutputs('minecraft:dirt')
        .duration(100)
        .EUt(2);
});