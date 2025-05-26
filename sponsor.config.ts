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
  onSponsorsFetched: function(sponsors, provider) {
    console.log(sponsors, provider);
    for (let i = 0; i < 750; i++) {
       sponsors.push({
       sponsor: {
          type: 'User',
          login: "testlogin" + i,
          name: "Test Name" + i,
          avatarUrl: "https://picsum.photos/200"
       },
         monthlyDollars: Math.floor(Math.random()*17)
      });
    }
    for (let i = 750; i < 760; i++) {
       sponsors.push({
       sponsor: {
          type: 'User',
          login: "testlogin" + i,
          name: "Test Name" + i,
          avatarUrl: "https://picsum.photos/200"
       },
         monthlyDollars: 50+Math.floor(Math.random()*8)
      });
    }
  return sponsors;
  },
  renderer: "circles",
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
      monthlyDollars: 15,
      preset: tierPresets.medium,
    },
    {
      title: 'Diamond Sponsors',
      monthlyDollars: 50,
      preset: tierPresets.large,
    }
  ],
})
