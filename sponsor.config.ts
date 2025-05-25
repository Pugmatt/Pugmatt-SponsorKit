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
    sponsors.push(new Sponsor({
      sponsor: {
          type: 'User',
          login: "testlogin",
          name: "test",
          avatarUrl: "https://avatars.githubusercontent.com/u/6006328?s=400&u=6efb43b9edded80df36f732e2e34dc469b3fdfc7&v=4"
      },
      monthlyDollars: 5,
      privacyLevel: 'PUBLIC',
      tierName: "silver",
      createdAt: "2025-05-25T23:56:02.093Z"
      expireAt: "2025-05-26T23:56:02.093Z",
      isOneTime: false,
      provider: "github",
    });
  return sponsors;
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
