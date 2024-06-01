
ItemEvents.tooltip(event => {
    event.add('enderio:lv_energy_conduit', 'Transfers 256 FE/t or 2 Amps of LV');
    event.add('enderio:mv_energy_conduit', 'Transfers 1024 FE/t or 2 Amps of MV');
    event.add('enderio:hv_energy_conduit', 'Transfers 4096 FE/t or 2 Amps of HV');
    event.add('enderio:ev_energy_conduit', 'Transfers 16384 FE/t or 2 Amps of EV');
    event.add('enderio:iv_energy_conduit', 'Transfers 65536 FE/t or 2 Amp of IV');
    event.add('enderio:luv_energy_conduit', 'Transfers 262144 FE/t or 2 Amp of LuV');
    event.add('enderio:zpm_energy_conduit', 'Transfers 1048576 FE/t or 2 Amp of ZPM');
    event.add('enderio:uv_energy_conduit', 'Transfers 4194304 FE/t or 2 Amp of UV');
    event.add('enderio:uhv_energy_conduit', 'Transfers 16777216 FE/t or 2 Amp of UHV');
});

ClientEvents.lang('en_us', event => {
    const rename = (item, newName) => event.add(Item.of(item).item.getDescriptionId(), newName);
    rename('exdeorum:flint_mesh', 'Steel-Reinforced Mesh');
    rename('exdeorum:golden_mesh', 'Gold Plated Mesh');
    rename('exdeorum:diamond_mesh', 'Industrial Diamond Mesh');
    rename('exdeorum:iron_mesh', 'Fine Titanium Mesh');
    rename('exdeorum:netherite_mesh', 'Highly Capable Netherite Mesh');
})

