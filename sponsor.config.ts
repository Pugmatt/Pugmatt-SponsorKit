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

const silver: BadgePreset = {
  avatar: {
    size: 50,
  },
  boxWidth: 80,
  boxHeight: 90,
  container: {
    sidePadding: 20,
  },
  name: false
}


export default defineConfig({
  sponsorsAutoMerge: true,
  tiers: [
    {
      title: 'Sponsors',
      preset: tierPresets.none
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 5,
      preset: silver,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 15,
      preset: tierPresets.large,
    },
    {
      title: 'Diamond Sponsors',
      monthlyDollars: 50,
      preset: tierPresets.xl,
    }
  ],
})
