import { BadgePreset, defineConfig, tierPresets } from 'sponsorkit'

const past: BadgePreset = {
  avatar: {
    size: 20,
  },
  boxWidth: 22,
  boxHeight: 22,
  container: {
    sidePadding: 35,
  },
}

export default defineConfig({
  sponsorsAutoMerge: true,
  renderer: "circles",
  width: 120,
  tiers: [
    {
      title: 'Sponsors',
      preset: tierPresets.xs,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 5,
      preset: tierPresets.small,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 10,
      preset: tierPresets.medium,
    },
    {
      title: 'Diamond Sponsors',
      monthlyDollars: 25,
      preset: tierPresets.large,
    }
  ],
})
