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
  onSponsorsReady: function(sponsors) {
    console.log(sponsors);
  },
  tiers: [
    {
      title: 'All Sponsors',
       preset: tierPresets.small,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 5,
      preset: tierPresets.medium,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 15,
      preset: tierPresets.large,
    },
    {
      title: 'Diamond Sponsor',
      monthlyDollars: 50,
      preset: tierPresets.xl,
    }
  ]
})
